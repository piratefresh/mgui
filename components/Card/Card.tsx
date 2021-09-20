import CardHeader from "@components/CardHeader";
import CardStyles from "./Card.module.css";

export interface ICardProps {
  children: React.ReactNode;
  className?: string;
  cover?: React.ReactElement;
  description?: string;
  title?: string;
  subheader?: string;
  style?: React.CSSProperties;
}

const Card = ({
  children,
  className,
  cover,
  description,
  title,
  subheader,
  style,
}: ICardProps) => {
  let classes = [CardStyles["mgui-card"]];
  if (className) classes.push(className);

  return (
    <div className={classes.join(" ")} style={style}>
      {title && <CardHeader title={title} subheader={subheader} />}
      {cover}
      <div className="mgui-card-content">{children}</div>
    </div>
  );
};

export default Card;
