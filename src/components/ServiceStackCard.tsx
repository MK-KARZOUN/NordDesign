import type { ServiceModel } from "../models/ServiceModel";

type ServiceStackCardProps = {
  card: ServiceModel;
  onSelect: () => void;
};

const ServiceStackCard = ({ card, onSelect }: ServiceStackCardProps) => {
  return (
    <div className="service-card service-stack-card">
      <div>
        <span className="service-label">{card.label}</span>
        <h3>{card.title}</h3>
      </div>
      <button
        className="service-stack-card__button"
        type="button"
        aria-label={`Show ${card.title} service`}
        onClick={onSelect}
      >
        <i className="bi bi-plus" aria-hidden="true"></i>
      </button>
    </div>
  );
};

export default ServiceStackCard;
