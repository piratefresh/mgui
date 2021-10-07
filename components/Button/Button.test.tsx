import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Button from "./Button";
import { IButtonProps } from "./Button";

const SIZES = ["tiny", "small", "medium", "large", "xlarge"];
const TYPES = [
  "primary",
  "default",
  "secondary",
  "outline",
  "dashed",
  "link",
  "text",
];

type TTypes = {
  type?:
    | "primary"
    | "default"
    | "secondary"
    | "outline"
    | "dashed"
    | "link"
    | "text";
};

describe("Button", () => {
  it("should render button correctly", () => {
    const wrapper = render(<Button>Button</Button>);
    expect(wrapper.getByText("Button")).toBeInTheDocument();
    expect(() => wrapper.unmount()).not.toThrow();
  });

  it("should render different text", () => {
    const wrapper = render(<Button>Button</Button>);
    expect(screen.getByText("Button")).toBeInTheDocument();
    wrapper.rerender(<Button>按钮</Button>);
    expect(screen.getByText("按钮")).toBeInTheDocument();
  });

  it("should ignore events when disabled", () => {
    const WrapperButton = () => {
      const [state, setState] = React.useState("state1");
      return (
        <Button disabled onClick={() => setState("state2")}>
          {state}
        </Button>
      );
    };
    render(<WrapperButton />);
    expect(screen.getByText("state1")).toBeInTheDocument();
    fireEvent.click(screen.getByText("state1"));
    expect(screen.getByText("state1")).toBeInTheDocument();
    expect(screen.queryByText("state2")).not.toBeInTheDocument();
  });

  it('should have "w-full" class', async () => {
    render(<Button block>Button Block</Button>);
    expect(screen.queryByRole("button")).toHaveClass(
      " mgui-btn mgui-btn-default mgui-btn--tiny mgui-btn--w-full"
    );
  });

  it.each(TYPES)('should have "btn--%s" class', (type: any) => {
    render(<Button type={type}>Button Variant</Button>);

    if (type !== "text" && type !== "link") {
      expect(screen.queryByRole("button")).toHaveClass(
        `mgui-btn mgui-btn-${type} mgui-btn--tiny`
      );
    } else {
      expect(screen.queryByRole("button")).toHaveClass(
        `mgui-btn mgui-btn-${type} mgui-btn--tiny`
      );
    }
  });
});
