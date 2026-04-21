import { Link } from "react-router-dom";
import type { InsightCardModel } from "../models/InsightCardModel";

type InsightCardProps = {
  card: InsightCardModel;
};

const InsightCard = ({ card }: InsightCardProps) => {
  return (
    <article className="insight-card">
      <img src={card.img} alt={card.title} />
      <div className="insight-card-content">
        <span className="insight-label">{card.label}</span>
        <h4>{card.title}</h4>
        <p className="body-lg muted-text-white">{card.description}</p>
        <Link
          className="insight-link"
          to={card.link}
          aria-label={`Read article: ${card.title}`}
        >
          Read article <span aria-hidden="true">→</span>
        </Link>
      </div>
    </article>
  );
};

export default InsightCard;
