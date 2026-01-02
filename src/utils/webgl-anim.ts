import HoverEffect from './hover-effect';

export const webglAnim = () => {
  const imgAnimWrap =
    document.querySelectorAll<HTMLDivElement>('.it-img-anim-wrap');

  if (imgAnimWrap.length > 0) {
    const hoverAnimationDo = (
      container: HTMLDivElement,
      images: HTMLImageElement[]
    ) => {
      const intensity = parseFloat(container.dataset.intensity || '1');
      const speedIn = parseFloat(container.dataset.speedin || '1.6');
      const speedOut = parseFloat(container.dataset.speedout || '1.2');
      const easing = container.dataset.easing || 'expo.out';
      const displacementImage = container.dataset.displacement || '';

      // Initialize HoverEffect
      const effect = new HoverEffect({
        parent: container,
        intensity,
        speedIn,
        speedOut,
        easing,
        displacementImage,
        image1: images[0]?.src,
        image2: images[1]?.src || images[0]?.src, // fallback to the first image if no second image
      });

      // Optional: Trigger animations manually if needed
      container.addEventListener('mouseenter', () => {
        effect.transitionIn(speedIn, easing);
      });

      container.addEventListener('mouseleave', () => {
        effect.transitionOut(speedOut, easing);
      });
    };

    const processImages = () => {
      document
        .querySelectorAll<HTMLDivElement>('.it-img-anim')
        .forEach((animContainer) => {
          const images = Array.from(
            animContainer.querySelectorAll<HTMLImageElement>('img')
          );

          if (images.length > 0) {
            // If the first image is already loaded
            if (images[0].complete) {
              hoverAnimationDo(animContainer, images);
            } else {
              // Wait for the image to load before initializing
              images[0].addEventListener('load', () => {
                hoverAnimationDo(animContainer, images);
              });
            }
          }
        });
    };

    processImages();
  }
};
