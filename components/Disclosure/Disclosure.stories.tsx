import Disclosure from "./Disclosure";

export default {
  title: "Components/Disclosure",
  component: Disclosure,
};

export const Default = (args: any) => (
  <div className="max-w-2xl">
    <Disclosure {...args}>Disclosure text</Disclosure>
  </div>
);

Default.args = {
  panels: [
    {
      title: "Details",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab voluptatum esse iure asperiores consequuntur ducimus incidunt voluptates, quam odio officia veniam! Numquam pariatur dicta qui maiores sunt eius voluptatibus, voluptatum consequatur veritatis dolor beatae? Possimus cumque vitae autem, quibusdam debitis tempore incidunt dolores sit? Ad neque illum rem aperiam odit.",
    },
    {
      title: "Dimension",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab voluptatum esse iure asperiores consequuntur ducimus incidunt voluptates, quam odio officia veniam! Numquam pariatur dicta qui maiores sunt eius voluptatibus, voluptatum consequatur veritatis dolor beatae? Possimus cumque vitae autem, quibusdam debitis tempore incidunt dolores sit? Ad neque illum rem aperiam odit.",
    },
  ],
};
