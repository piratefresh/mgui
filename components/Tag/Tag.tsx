import TagStyles from "./Tag.module.css";

export interface ITagProps {
  children: React.ReactNode;
  className?: string;
  style: React.CSSProperties;
}

export default function Tag({ children, className, style }: ITagProps) {
  let classes = [TagStyles["mgui-tag-base"]];
  if (className) {
    classes.push(className);
  }
  return (
    <li className={classes.join(" ")} style={style}>
      {children}
    </li>
  );
}
