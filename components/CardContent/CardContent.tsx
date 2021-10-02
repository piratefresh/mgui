import CardContentStyles from "./CardContent.module.css";

export interface ICardContentProps {
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

const CardContent = ({ className, style, children }: ICardContentProps) => {
  let classes = [CardContentStyles["mgui-card-content"]];
  if (className) {
    classes.push(className);
  }
  return (
    <div style={style} className={classes.join(" ")}>
      {children}
    </div>
  );
};

export default CardContent;
