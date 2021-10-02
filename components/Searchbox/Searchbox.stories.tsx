import Searchbox from ".";
import { ISearchboxProps } from "./Searchbox";

export default {
  title: "Components/Searchbox",
  component: Searchbox,
};

export const Default = (args: ISearchboxProps) => (
  <div className="max-w-2xl">
    <Searchbox {...args} />
  </div>
);

Default.args = {};
