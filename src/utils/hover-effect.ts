import * as THREE from 'three';
import { gsap } from 'gsap';

interface HoverEffectOptions {
  parent: HTMLElement;
  displacementImage: string;
  image1: string;
  image2: string;
  intensity?: number;
  speedIn?: number;
  speedOut?: number;
  angle?: number;
  easing?: string;
}

interface Uniforms {
  [key: string]: THREE.IUniform<number | THREE.Texture>;
  intensity: THREE.IUniform<number>;
  dispFactor: THREE.IUniform<number>;
  texture1: THREE.IUniform<THREE.Texture>;
  texture2: THREE.IUniform<THREE.Texture>;
  disp: THREE.IUniform<THREE.Texture>;
  angle: THREE.IUniform<number>;
}

class HoverEffect {
  private scene: THREE.Scene;
  private camera: THREE.OrthographicCamera;
  private renderer: THREE.WebGLRenderer;
  private material: THREE.ShaderMaterial;
  private mesh: THREE.Mesh;
  private uniforms: Uniforms;
  private parent: HTMLElement;

  constructor(options: HoverEffectOptions) {
    const {
      parent,
      displacementImage,
      image1,
      image2,
      intensity = 1,
      speedIn = 1.6,
      speedOut = 1.2,
      angle = Math.PI / 4,
      easing = 'expo.out',
    } = options;

    this.parent = parent;

    // Create Scene
    this.scene = new THREE.Scene();

    // Create Camera
    this.camera = new THREE.OrthographicCamera(
      parent.offsetWidth / -2,
      parent.offsetWidth / 2,
      parent.offsetHeight / 2,
      parent.offsetHeight / -2,
      1,
      1000
    );
    this.camera.position.z = 1;

    // Create Renderer
    this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    this.renderer.setSize(parent.offsetWidth, parent.offsetHeight);
    this.renderer.setPixelRatio(window.devicePixelRatio || 1);
    parent.appendChild(this.renderer.domElement);

    // Load Textures
    const loader = new THREE.TextureLoader();
    const texture1 = loader.load(image1, () => this.render());
    const texture2 = loader.load(image2, () => this.render());
    const displacement = loader.load(displacementImage, () => this.render());

    texture1.magFilter = THREE.LinearFilter;
    texture2.magFilter = THREE.LinearFilter;
    displacement.magFilter = THREE.LinearFilter;

    // Uniforms
    this.uniforms = {
      intensity: { value: intensity },
      dispFactor: { value: 0 },
      texture1: { value: texture1 },
      texture2: { value: texture2 },
      disp: { value: displacement },
      angle: { value: angle },
    };

    // Shader Material
    this.material = new THREE.ShaderMaterial({
      uniforms: this.uniforms,
      vertexShader: `
        varying vec2 vUv;
        void main() {
          vUv = uv;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        varying vec2 vUv;

        uniform sampler2D texture1;
        uniform sampler2D texture2;
        uniform sampler2D disp;

        uniform float dispFactor;
        uniform float intensity;
        uniform float angle;

        mat2 getRotationMatrix(float angle) {
          float sinTheta = sin(angle);
          float cosTheta = cos(angle);
          return mat2(cosTheta, -sinTheta, sinTheta, cosTheta);
        }

        void main() {
          vec2 uv = vUv;

          vec4 disp = texture2D(disp, uv);
          vec2 dispVec = (disp.rg * 2.0 - 1.0) * intensity;

          vec2 distortedPosition1 = uv + getRotationMatrix(angle) * dispVec * dispFactor;
          vec2 distortedPosition2 = uv - getRotationMatrix(angle) * dispVec * (1.0 - dispFactor);

          vec4 texture1Color = texture2D(texture1, distortedPosition1);
          vec4 texture2Color = texture2D(texture2, distortedPosition2);

          gl_FragColor = mix(texture1Color, texture2Color, dispFactor);
        }
      `,
      transparent: true,
    });

    // Plane Geometry
    const geometry = new THREE.PlaneGeometry(
      parent.offsetWidth,
      parent.offsetHeight,
      1
    );
    this.mesh = new THREE.Mesh(geometry, this.material);
    this.scene.add(this.mesh);

    // Event Listeners for Hover
    parent.addEventListener('mouseenter', () =>
      this.transitionIn(speedIn, easing)
    );
    parent.addEventListener('mouseleave', () =>
      this.transitionOut(speedOut, easing)
    );

    // Handle Resize
    window.addEventListener('resize', this.onResize.bind(this));

    this.render();
  }

  private render(): void {
    this.renderer.render(this.scene, this.camera);
  }

  public transitionIn(duration: number, easing: string): void {
    gsap.to(this.uniforms.dispFactor, {
      duration,
      value: 1,
      ease: easing,
      onUpdate: () => this.render(),
    });
  }

  public transitionOut(duration: number, easing: string): void {
    gsap.to(this.uniforms.dispFactor, {
      duration,
      value: 0,
      ease: easing,
      onUpdate: () => this.render(),
    });
  }

  private onResize(): void {
    const { offsetWidth, offsetHeight } = this.parent;
    this.camera.left = offsetWidth / -2;
    this.camera.right = offsetWidth / 2;
    this.camera.top = offsetHeight / 2;
    this.camera.bottom = offsetHeight / -2;
    this.camera.updateProjectionMatrix();

    this.renderer.setSize(offsetWidth, offsetHeight);
    this.mesh.geometry = new THREE.PlaneGeometry(offsetWidth, offsetHeight, 1);

    this.render();
  }
}

export default HoverEffect;
