import Table from "./Table";
import DataTableStyles from "./DataTable.module.css";
import makeData from "./makeData";
import React from "react";

export interface ITableRowProps {
  original: IDataProps;
  id: string;
  index: number;
}

export interface IDataProps {
  firstName: string;
  lastName: string;
  email: string;
  image: string;
  age: string;
  visits: string;
  status: string;
  progress: string;
}

function DataTable() {
  const data = React.useMemo(() => makeData(20), []);

  const columns = React.useMemo(
    () => [
      {
        Header: "Name",
        columns: [
          {
            // Make an expander cell
            Header: "Project",
            id: "expander", // It needs an ID
            className: "pl-4 w-10 h-10",
            Cell: ({ row }: any) => {
              return (
                // Use Cell to render an expander for each row.
                // We can use the getToggleRowExpandedProps prop-getter
                // to build the expander.
                <img
                  className="w-full h-full rounded-md"
                  src={row.original.image}
                />
              );
            },
          },
          {
            Header: () => null, // No header
            accessor: "firstName",
            Cell: ({ row }: any) => {
              console.log("email: ", row.original.email);
              return (
                // Use Cell to render an expander for each row.
                // We can use the getToggleRowExpandedProps prop-getter
                // to build the expander.
                <div className="flex flex-col">
                  <div className="font-medium">{row.original.firstName}</div>
                  <div className="text-xs leading-3 text-gray-500 pt-2">
                    {`${row.original.email}@gmail.com`}
                  </div>
                </div>
              );
            },
          },
          {
            Header: () => null, // No header
            accessor: "lastName",
          },
        ],
      },
      {
        Header: "Info",
        columns: [
          {
            Header: "Age",
            accessor: "age",
          },
          {
            Header: "Visits",
            accessor: "visits",
          },
          {
            Header: "Status",
            accessor: "status",
          },
          {
            Header: "Profile Progress",
            accessor: "progress",
          },
        ],
      },
    ],
    []
  );
  return (
    <div className={DataTableStyles["mgui-table-container"]}>
      <div className={DataTableStyles["mgui-table-inner-container"]}>
        <Table data={data} columns={columns} />
      </div>
    </div>
  );
}

export default DataTable;
