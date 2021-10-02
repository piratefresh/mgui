import * as React from "react";
import TableStyles from "./Table.module.css";
import { useTable, Column, usePagination, Row } from "react-table";
import {
  ChevronDoubleLeftIcon,
  ChevronDoubleRightIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "@heroicons/react/solid";

// import makeData from "./makeData";

export interface ITableProps {
  data: {}[];
  columns: Column<{}>[];
}

const Table = ({ columns, data }: ITableProps) => {
  // Use the state and functions returned from useTable to build your UI
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow, // The rest of these things are super handy, too ;)

    page, // Instead of using 'rows', we'll use page,
    // which has only the rows for the active page
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    state: { pageIndex, pageSize },
  } = useTable(
    {
      columns,
      data,
    },
    usePagination
  );

  // Render the UI for your table
  return (
    <>
      <table className={TableStyles["mgui-table"]} {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr
              className={TableStyles["mgui-table-tr"]}
              {...headerGroup.getHeaderGroupProps()}
            >
              {headerGroup.headers.map((column) => (
                <th
                  className={TableStyles["mgui-table-th"]}
                  {...column.getHeaderProps()}
                >
                  {column.render("Header")}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.map((row, i) => {
            prepareRow(row);
            return (
              <tr
                className={TableStyles["mgui-table-tbody-tr"]}
                {...row.getRowProps()}
              >
                {row.cells.map((cell) => {
                  return (
                    <td
                      className={TableStyles["mgui-table-tbody-tr-td"]}
                      {...cell.getCellProps([
                        {
                          className: (cell.column as any).className,
                          style: (cell.column as any).style,
                        },
                      ])}
                    >
                      {cell.render("Cell")}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
      {/* 
        Pagination can be built however you'd like. 
        This is just a very basic UI implementation:
      */}
      <div className={TableStyles["mgui-table-pagination-container"]}>
        <button
          className={TableStyles["mgui-table-pagination-arrow"]}
          onClick={() => gotoPage(0)}
          disabled={!canPreviousPage}
        >
          <ChevronDoubleLeftIcon className="h-5 w-5" />
        </button>{" "}
        <button
          className={TableStyles["mgui-table-pagination-arrow"]}
          onClick={() => previousPage()}
          disabled={!canPreviousPage}
        >
          <ChevronLeftIcon className="h-5 w-5" />
        </button>{" "}
        <button
          className={TableStyles["mgui-table-pagination-arrow"]}
          onClick={() => nextPage()}
          disabled={!canNextPage}
        >
          <ChevronRightIcon className="h-5 w-5" />
        </button>{" "}
        <button
          className={TableStyles["mgui-table-pagination-arrow"]}
          onClick={() => gotoPage(pageCount - 1)}
          disabled={!canNextPage}
        >
          <ChevronDoubleRightIcon className="h-5 w-5" />
        </button>{" "}
        <span className={TableStyles["mgui-table-pagination-page-view"]}>
          Viewing {pageIndex + 1} - {pageOptions.length}
        </span>
        <span>
          | Go to page:{" "}
          <input
            type="number"
            defaultValue={pageIndex + 1}
            onChange={(e) => {
              const page = e.target.value ? Number(e.target.value) - 1 : 0;
              gotoPage(page);
            }}
            style={{ width: "100px" }}
          />
        </span>{" "}
        <select
          value={pageSize}
          onChange={(e) => {
            setPageSize(Number(e.target.value));
          }}
        >
          {[10, 20, 30, 40, 50].map((pageSize) => (
            <option key={pageSize} value={pageSize}>
              Show {pageSize}
            </option>
          ))}
        </select>
      </div>
    </>
  );
};

export default Table;
