import Typography from "@components/Typography";
import Image from "next/image";
import SummaryItemStyles from "./SummaryItem.module.css";

export interface ISummaryItemProps {
  className?: string;
  style?: React.CSSProperties;
  title?: string;
  subTitle?: string;
}

export default function SummaryItemAuthor({
  className,
  style,
  title,
  subTitle,
}: ISummaryItemProps) {
  return (
    <div className="flex flex-row">
      <div className="flex flex-col pr-4">
        <Typography.Text className="uppercase">
          {title ? title : ""}
        </Typography.Text>
        <Typography.Text type="subheader" className="uppercase">
          {subTitle ? subTitle : ""}
        </Typography.Text>
      </div>
    </div>
  );
}
