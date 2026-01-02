import Image from 'next/image';
import Link from 'next/link';
import { IFeatureDT } from '@/types/feature-d-t';

interface FeatureItemProps {
  feature: IFeatureDT;
}

const FeatureItemFour = ({ feature }: FeatureItemProps) => {
  return (
    <div className="ss-feature-item-wrap">
      <div className="ss-feature-item text-center">
        <div>
          <div className="ss-feature-icon mb-35">
            {feature.image && (
              <Image
                className="image-height-auto"
                src={feature.image}
                alt={feature.title}
              />
            )}
          </div>
          <div className="ss-feature-content">
            <h4 className="ss-feature-title mb-20">
              <Link className="border-line-white" href="#">
                {feature.title}
              </Link>
            </h4>
            <p
              className="mb-0"
              dangerouslySetInnerHTML={{ __html: feature.description }}
            ></p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default FeatureItemFour;
