import Image from 'next/image';
import { IFeatureDT } from '@/types/feature-d-t';

interface FeatureItemProps {
  feature: IFeatureDT;
}

const FeatureItemThree = ({ feature }: FeatureItemProps) => {
  return (
    <div
      key={feature.id}
      className="pg-feature-item mb-35 section-bg text-center it-fade-anim"
      data-fade-from="top"
      data-delay=".5"
      style={{ backgroundImage: `url(${feature.bgImage})` }}
    >
      <span className="pg-feature-icon">
        {feature.image && (
          <Image
            className="image-height-auto"
            src={feature.image}
            alt="feature img"
          />
        )}
      </span>
      <h4 className="pg-feature-title">
        <a className="border-line-white" href="#">
          {feature.title}
        </a>
      </h4>
      <p>{feature.description}</p>
    </div>
  );
};
export default FeatureItemThree;
