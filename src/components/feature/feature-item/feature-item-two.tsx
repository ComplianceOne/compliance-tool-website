import Image from 'next/image';
import Link from 'next/link';
import { IFeatureDT } from '@/types/feature-d-t';
import { RightArrowTwo } from '@/components/svg';

interface FeatureItemProps {
  feature: IFeatureDT;
}

const FeatureItemTwo = ({ feature }: FeatureItemProps) => {
  return (
    <div className="dt-feature-item mb-30 text-center">
      <span className="dt-feature-icon mb-25 d-block">
        {feature.image && (
          <Image
            className="image-height-auto"
            src={feature.image}
            alt="Feature Img"
          />
        )}
      </span>
      <div className="dt-feature-content">
        <h4 className="dt-feature-title mb-20">
          <a className="border-line-black" href="#">
            {feature.title}
          </a>
        </h4>
        <p className="mb-20">{feature.description}</p>
        <div className="dt-feature-link">
          <Link className="it-btn-feature" href="#">
            {feature.btnText || 'Read More'}
            <RightArrowTwo />
          </Link>
        </div>
      </div>
    </div>
  );
};
export default FeatureItemTwo;
