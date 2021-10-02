import React from "react";
import DataTable from "./DataTable";
import Table from "./Table";

export default {
  title: "Data Input/Table",
  component: Table,
  argTypes: { onChange: { action: "onChange" } },
};

export const Default = (args: any) => <DataTable />;
