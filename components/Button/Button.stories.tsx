import Button from "./Button";

export default {
  title: "General/Button",
  component: Button,
};

export const Default = (args: any) => <Button {...args}>Button text</Button>;
export const withBlock = (args: any) => (
  <div className="flex">
    <Button {...args}>Button text</Button>
  </div>
);

withBlock.args = {
  type: "primary",
  block: true,
};
