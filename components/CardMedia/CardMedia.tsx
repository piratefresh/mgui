import Image from "next/image";
import React from "react";
import CardMediaStyles from "./CardMedia.module.css";

export interface ICardMedia {
  src: string;
  align?: "row" | "column";
  layout?: "fill" | "fixed" | "intrinsic" | "responsive" | undefined;
  objectFit?: "cover" | "contain" | "inherit" | "fill";
  className?: string;
  style?: React.CSSProperties;
}

const CardMedia = ({
  align = "column",
  style,
  className,
  src,
  layout = "fill",
  objectFit = "cover",
}: ICardMedia) => {
  let classes = [CardMediaStyles["mgui-card-media"]];
  if (className) classes.push(className);
  if (align === "row") classes.push(CardMediaStyles["mgui-card-media-row"]);

  console.log("classes: ", classes);
  return (
    <div className={classes.join(" ") + " overflow-hidden"} style={style}>
      <Image
        className="absolute overflow-hidden inset-0"
        src={src}
        layout="fill"
        objectFit="cover"
      />
    </div>
  );
};

export default CardMedia;
