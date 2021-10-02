import Tag from ".";
import { ITagProps } from "./Tag";

export default {
  title: "General/Tag",
  component: Tag,
};

export const Default = (args: ITagProps) => (
  <ul className="flex flex-row w-full justify-around">
    <Tag {...args}>Hardwood Upholstered Furniture</Tag>
    <Tag {...args}>Imported Foam Chairs</Tag>
    <Tag {...args}>Imported Polyester Chair</Tag>
    <Tag {...args}>Home Rubberwood Furniture</Tag>
    <Tag {...args}>Ivory Furniture</Tag>
  </ul>
);

Default.args = {};
