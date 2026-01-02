import Image from 'next/image';
import Link from 'next/link';
import { IFeatureDT } from '@/types/feature-d-t';

interface FeatureItemProps {
  feature: IFeatureDT;
}

const FeatureItemOne = ({ feature }: FeatureItemProps) => {
  return (
    <div className="it-feature-item text-center">
      <div className="it-feature-icon mb-25">
        {feature.image && (
          <Image
            className="image-height-auto"
            src={feature.image}
            alt={feature.title}
          />
        )}
      </div>
      <h4 className="it-feature-title mb-20">
        <Link className="border-line-black" href="#">
          {feature.title}
        </Link>
      </h4>
      <p className="mb-0">{feature.description}</p>
    </div>
  );
};
export default FeatureItemOne;
