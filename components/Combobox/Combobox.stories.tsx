import Combobox from ".";
import { IComboboxProps } from "./Combobox";

export default {
  title: "Data Input/Combobox",
  component: Combobox,
};

export const Default = (args: IComboboxProps) => (
  <div className="max-w-2xl">
    <Combobox {...args} />
  </div>
);

Default.args = {
  options: [
    { id: 1, name: "Durward Reynolds", disabled: false },
    { id: 2, name: "Kenton Towne", disabled: false },
    { id: 3, name: "Therese Wunsch", disabled: false },
    { id: 4, name: "Benedict Kessler", disabled: true },
    { id: 5, name: "Katelyn Rohan", disabled: false },
  ],
  selected: {
    id: 1,
    name: "Durward Reynolds",
    disabled: false,
  },
};
