import { CheckMarkEighteen } from '@/components/svg';

const services = [
  {
    id: 1,
    title: 'Consulting Service',
    description: ` Duis aute irure dolor in reprehen derit in voluptate
                    velit esse cillum dolore fugiat nulla pariatur.`,
  },
  {
    id: 2,
    title: '24/7 live support',
    description: ` Duis aute irure dolor in reprehen derit in voluptate
                    velit esse cillum dolore fugiat nulla pariatur.`,
  },
  {
    id: 3,
    title: 'Implementation Solutions',
    description: ` Duis aute irure dolor in reprehen derit in voluptate
                    velit esse cillum dolore fugiat nulla pariatur.`,
  },
  {
    id: 4,
    title: 'Direct System Management',
    description: ` Duis aute irure dolor in reprehen derit in voluptate
                    velit esse cillum dolore fugiat nulla pariatur.`,
  },
];

const ServiceList = () => {
  return (
    <ul>
      {services.map((item) => (
        <li key={item.id}>
          <div className="it-sv-details-list">
            <span className="it-sv-details-list-icon">
              <CheckMarkEighteen />
            </span>
            <div className="it-sv-details-list-content">
              <h5>{item.title}</h5>
              <p>{item.description}</p>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};
export default ServiceList;
