import Navigation from ".";
import { INavigationProps } from "./Navigation";
import { categories as categories } from "./categories";

export default {
  title: "Components/Navigation",
  component: Navigation,
};

export const Default = (args: INavigationProps) => <Navigation {...args} />;

Default.args = {
  navigation: categories,
};
