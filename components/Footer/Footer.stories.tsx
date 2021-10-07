import Footer from "./Footer";

export default {
  title: "General/Footer",
  component: Footer,
};

export const Default = (args: any) => <Footer {...args} />;
// export const withBlock = (args: any) => (
//   <div className="flex">
//     <Footer {...args}>Footer text</Footer>
//   </div>
// );

// withBlock.args = {
//   type: "primary",
//   block: true,
// };
