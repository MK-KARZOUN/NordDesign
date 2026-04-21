import type { ApproachCardModel } from "../models/ApproachCardModel";

type ApproachCardProps = {
  card: ApproachCardModel;
};

const ApproachCard = ({ card }: ApproachCardProps) => {
  return (
    <article className={`approach-card approach-card--${card.position}`}>
      <h4>{card.title}</h4>
      <p className="body-lg muted-text-dark">{card.description}</p>
    </article>
  );
};

export default ApproachCard;
