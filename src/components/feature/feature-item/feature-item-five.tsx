import Link from 'next/link';
import { IFeatureDT } from '@/types/feature-d-t';

interface FeatureItemProps {
  feature: IFeatureDT;
}

const FeatureItemFive = ({ feature }: FeatureItemProps) => {
  return (
    <div className="ai-service-item p-relative z-index-1 mb-30">
      <span className="ai-service-icon mb-55 d-block">{feature.icon}</span>
      <div className="ai-service-content">
        <h4 className="dt-service-title mb-25">
          <Link className="border-line-white" href="#">
            {feature.title}
          </Link>
        </h4>
        <p className="mb-0">{feature.description}</p>
      </div>
    </div>
  );
};
export default FeatureItemFive;
