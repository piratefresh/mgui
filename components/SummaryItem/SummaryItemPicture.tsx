import Image from "next/image";
import SummaryItemStyles from "./SummaryItem.module.css";

export interface IProps {
  className?: string;
  style?: React.CSSProperties;
  imageUrl: string;
}

export default function SummaryItemPicture({
  className,
  style,
  imageUrl,
}: IProps) {
  let classes = [SummaryItemStyles["mgui-summary-picture-container"]];
  if (className) {
    classes.push(className);
  }
  return (
    <figure className={classes.join(" ")} style={style}>
      <Image layout="fill" objectFit="contain" src={`${imageUrl}`} />
    </figure>
  );
}
