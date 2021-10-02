import React from "react";

import Checkbox from "./Checkbox";

export default {
  title: "Data Input/Checkbox",
  component: Checkbox,
};

export const Default = (args: any) => <Checkbox {...args} />;
export const withLabel = (args: any) => <Checkbox {...args} />;

Default.args = {
  label: "This is the label",
  description: "This is the description",
};
