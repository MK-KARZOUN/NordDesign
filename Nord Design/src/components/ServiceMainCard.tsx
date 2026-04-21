import type { ServiceModel } from "../models/ServiceModel";
import Button from "./UI/Button";

type ServiceMainCardProps = {
  card: ServiceModel;
};

const ServiceMainCard = ({ card }: ServiceMainCardProps) => {
  return (
    <article className="service-card service-main-card">
      <span className="service-label">{card.label}</span>
      <h3>{card.title}</h3>
      <p className="body-lg muted-text-white">{card.description}</p>

      <Button
        className="button-accent button-md"
        name={card.buttonName}
        rightIcon="bi bi-arrow-right-short"
      />

      {card.links.length > 0 && (
        <ul className="main-links">
          {card.links.map((link) => (
            <li key={link.name}>
              <a href={link.url}>{link.name}</a>
              <span aria-hidden="true">→</span>
            </li>
          ))}
        </ul>
      )}
    </article>
  );
};

export default ServiceMainCard;
