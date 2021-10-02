import React from "react";
import { Listbox } from "@headlessui/react";
import { SelectorIcon } from "@heroicons/react/outline";
import ComboboxStyles from "./Combobox.module.css";
import { OptionT } from "@components/types";

export interface IComboboxProps {
  id: string | number;
  name: string;
  setSelected: () => void;
  selected: OptionT;
  options: OptionT[];
}

export default function Combobox({
  options,
  selected,
  setSelected,
}: IComboboxProps) {
  return (
    <Listbox value={selected} onChange={setSelected}>
      <Listbox.Button className={ComboboxStyles["mgui-selection-button"]}>
        <span className="block truncate">{selected.name}</span>
        <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
          <SelectorIcon className="w-5 h-5" aria-hidden="true" />
        </span>
      </Listbox.Button>
      <Listbox.Options className={ComboboxStyles["mgui-selection-option"]}>
        {options.map((option) => (
          <Listbox.Option
            key={option.id}
            value={option}
            disabled={option.disabled}
            className={({ active }) =>
              `${active ? "text-black bg-gray-100" : "text-gray-900"}
                          cursor-default select-none relative py-2 pl-4 pr-4 text-sm border-b`
            }
          >
            {option.name}
          </Listbox.Option>
        ))}
      </Listbox.Options>
    </Listbox>
  );
}
