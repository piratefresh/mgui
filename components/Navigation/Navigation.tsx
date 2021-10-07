import { Tab } from "@headlessui/react";
import useOnClickOutside from "hooks/useOnClickOutside";
import Link from "next/link";
import React from "react";
import NavigationStyles from "./Navigation.module.css";
import { categories as navigation } from "./categories";

export type TItem = {
  name: string;
  href: string;
};

export interface INavigationProps {
  navigation: {
    categories: CategoriesEntity[] | null;
    pages: ItemsEntityOrPagesEntity[] | null;
  };
}
export interface CategoriesEntity {
  id: string;
  name: string;
  featured?: FeaturedEntity[] | null;
  sections?: SectionsEntity[] | null;
}
export interface FeaturedEntity {
  name: string;
  href: string;
  imageSrc: string;
  imageAlt: string;
}
export interface SectionsEntity {
  id: string;
  name: string;
  items?: ItemsEntityOrPagesEntity[] | null;
}
export interface ItemsEntityOrPagesEntity {
  name: string;
  href: string;
}

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function Navigation({ navigation }: INavigationProps) {
  const [showSubmenu, setShowSubmenu] = React.useState<boolean>(false);
  const ref = React.useRef(null);
  const handleClickOutside = () => {
    console.log("outside");
    setShowSubmenu(false);
  };
  const handleShowSubmenu = () => {
    setShowSubmenu(true);
  };

  let classes = [NavigationStyles["mgui-nav-ul"]];

  useOnClickOutside(ref, handleClickOutside);
  return (
    <nav className="bg-black w-full z-10" onMouseLeave={handleClickOutside}>
      {/* Links */}

      <Tab.Group
        as="div"
        className="bg-white"
        onChange={handleShowSubmenu}
        onMouseEnter={handleShowSubmenu}
      >
        <div className="">
          <Tab.List className="bg-mine-shaft -mb-px flex px-4 space-x-8">
            {navigation.categories?.map((category) => (
              <Tab
                onMouseEnter={handleShowSubmenu}
                key={category.name}
                className={({ selected }) =>
                  classNames(
                    selected ? "border-b-2 border-white" : "",
                    "flex-1 text-gray-100 whitespace-nowrap py-2 px-1 text-base font-medium"
                  )
                }
              >
                {category.name}
              </Tab>
            ))}
          </Tab.List>
        </div>
        {showSubmenu && (
          <Tab.Panels as={React.Fragment}>
            {navigation.categories?.map((category) => (
              <Tab.Panel key={category.name} className="mx-auto px-8 ">
                <div className={NavigationStyles["mgui-panel-container"]}>
                  <div className="col-start-2 grid grid-cols-2 gap-x-8">
                    {category.featured?.map((item) => (
                      <div key={item.name} className="group relative text-sm">
                        <div className="aspect-w-1 aspect-h-1 rounded-lg bg-gray-100 overflow-hidden group-hover:opacity-75">
                          <img
                            src={item.imageSrc}
                            alt={item.imageAlt}
                            className="object-center object-cover"
                          />
                        </div>
                        <a
                          href={item.href}
                          className="mt-6 block font-medium text-gray-900"
                        >
                          <span
                            className="absolute z-10 inset-0"
                            aria-hidden="true"
                          />
                          {item.name}
                        </a>
                        <p aria-hidden="true" className="mt-1">
                          Shop now
                        </p>
                      </div>
                    ))}
                  </div>
                  <div
                    className={`row-start-1 grid ${
                      category.sections && category.sections.length <= 8
                        ? `grid-cols-${category.sections.length}`
                        : "grid-cols-8"
                    } gap-y-10 gap-x-8 text-sm`}
                  >
                    {category.sections?.map((section) => (
                      <div key={section.name}>
                        <p
                          id={`${category.id}-${section.id}-heading-mobile`}
                          className="font-medium text-gray-900"
                        >
                          {section.name}
                        </p>
                        <ul
                          role="list"
                          aria-labelledby={`${category.id}-${section.id}-heading-mobile`}
                          className="mt-6 flex flex-col space-y-6 pl-0"
                        >
                          {section.items?.map((item) => (
                            <li key={item.name} className="flex">
                              <a
                                href={item.href}
                                className="text-secondary-light dark:text-secondary-dark hover:text-gray-800"
                              >
                                {item.name}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              </Tab.Panel>
            ))}
          </Tab.Panels>
        )}
      </Tab.Group>
    </nav>
  );
}
