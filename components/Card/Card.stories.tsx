import Card from "./Card";

export default {
  title: "Displays/Card",
  component: Card,
};

export const Default = (args: any) => (
  <Card {...args}>
    <div>Test</div>
  </Card>
);

export const withCover = (args: any) => (
  <Card {...args}>
    <div>Sub title here</div>
    <div>To Do List with Vue.JS</div>
  </Card>
);

withCover.args = {
  cover: (
    <img
      className="h-64 w-full object-cover"
      src={"https://supabase.io/new/images/case-study-monitoro.jpg"}
      alt={"title"}
    />
  ),
};
