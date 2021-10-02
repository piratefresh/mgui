import Typography from "@components/Typography";
import Image from "next/image";
import SummaryItemStyles from "./SummaryItem.module.css";

export interface ISummaryItemProps {
  className?: string;
  style?: React.CSSProperties;
  authorName: string;
  category: string;
  avatarUrl: string;
}

export default function SummaryItemAuthor({
  className,
  style,
  authorName,
  category,
  avatarUrl,
}: ISummaryItemProps) {
  return (
    <div className="flex flex-row">
      <div className="flex flex-col pr-4">
        <Typography.Text className="uppercase">{authorName}</Typography.Text>
        <Typography.Text type="subheader" className="uppercase">
          {category}
        </Typography.Text>
      </div>

      <div className={SummaryItemStyles["mgui-aspectratio-container"]}>
        <Image
          className={SummaryItemStyles["mgui-picture"]}
          layout="fill"
          objectFit="contain"
          src={`${avatarUrl}`}
        />
      </div>
    </div>
  );
}
