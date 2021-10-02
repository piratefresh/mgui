import { Disclosure } from "@headlessui/react";
import { PlusIcon, MinusIcon } from "@heroicons/react/outline";
import DisclosureStyles from "./Disclosure.module.css";

export interface IDisclosureProps {
  className?: string;
  style?: React.CSSProperties;
  panels: {
    title: string;
    description: any;
  }[];
}

export default function MyDisclosure({
  panels,
  className,
  style,
}: IDisclosureProps) {
  let classes = [DisclosureStyles["mgui-disclosure"]];
  if (className) classes.push(className);
  return (
    <>
      {panels.map((panel) => {
        return (
          <Disclosure>
            {({ open }) => (
              <>
                <Disclosure.Button
                  className={DisclosureStyles["mgui-disclosure-button"]}
                >
                  {panel.title}
                  {!open ? (
                    <PlusIcon className="h-4 w-4 ml-auto" />
                  ) : (
                    <MinusIcon className="h-4 w-4 ml-auto" />
                  )}
                </Disclosure.Button>
                <Disclosure.Panel
                  className={DisclosureStyles["mgui-disclosure-panel"]}
                >
                  {panel.description}
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
        );
      })}
    </>
  );
}
