import React from "react";

import { action } from "@storybook/addon-actions";

import Radio from ".";

const options = [
  {
    label: "Comments",
    description:
      "Get notified when someones posts a comment on a posting. Get notified when someones posts a comment on a posting Get notified when someones posts a comment on a posting.",
    value: "1",
  },
  {
    label: "Candidates",
    description: "Get notified when a candidate applies for a job.",
    value: "2",
  },
  {
    label: "Offers",
    description: "Get notified when a candidate accepts or rejects an offer.",
    value: "3",
  },
];

export default {
  title: "Data Input/Radio",
  component: Radio,
  argTypes: { onChange: { action: "onChange" } },
};

export const Default = (args: any) => (
  <>
    {options.map((x, i) => (
      <Radio
        name="sbui-radiogroup"
        key={i}
        label={x.label}
        description={x.description}
        value={x.value}
      />
    ))}
  </>
);
