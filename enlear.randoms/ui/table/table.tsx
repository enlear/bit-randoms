import React, { useState } from "react";
import { useTable, useFilters, useSortBy , UseFiltersColumnProps} from "react-table";

import "./styles.css";
import makeData from './makeData';
import styled from 'styled-components';

export interface TableProps extends React.HTMLAttributes<HTMLButtonElement> {
};

export interface setFilter{
  
}

function Main({ columns, data }) {
  const [filterInput, setFilterInput] = useState("");
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    // setFilter, // For Searching
  } = useTable({
    columns, data
  },
  useFilters,
  useSortBy
  )
  //For Searching
  // const handleFilterChange = e => {
  //   const value = e.target.value || undefined;
  //   setFilter("firstName", value);
  //   setFilterInput(value);
  // };
  // Render the UI for your table
  return (
    <div>
      {/* For Searching */}
      {/* <input
        value={filterInput}
        onChange={handleFilterChange}
        placeholder={"Search with First Name"}
      /> */}
    <table {...getTableProps()}>
      <thead>
        {headerGroups.map(headerGroup => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map(column => (
              <th {...column.getHeaderProps()}>{column.render('Header')}</th>

              //For Sorting

              // <th
              //     {...column.getHeaderProps(column.getSortByToggleProps())}
              //     className={
              //       column.isSorted
              //         ? column.isSortedDesc
              //           ? "sort-desc"
              //           : "sort-asc"
              //         : ""
              //     }
              //   >
              //     {column.render("Header")}
              //   </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row, i) => {
          prepareRow(row)
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map(cell => {
                return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
              })}
            </tr>
          )
        })}
      </tbody>
    </table>
    </div>
  )
}


export const Table = () => {
  const columns = React.useMemo(
    () => [
      {
        Header: 'Name',
        columns: [
          {
            Header: 'First Name',
            accessor: 'firstName',
          },
          {
            Header: 'Last Name',
            accessor: 'lastName',
          },
        ],
      },
      {
        Header: 'Info',
        columns: [
          {
            Header: 'Age',
            accessor: 'age',
          },
          {
            Header: 'Visits',
            accessor: 'visits',
          },
          {
            Header: 'Status',
            accessor: 'status',
          },
          {
            Header: 'Progress',
            accessor: 'progress',
          },
        ],
      },
    ],
    []
  )

  const data = React.useMemo(() => makeData(20), []);
  return (
      <Main columns={columns} data={data} />
  );
}

