import React, { useState } from 'react';
import { useTable, useFilters, useSortBy } from "react-table";

export interface TableProps extends React.HTMLAttributes<HTMLButtonElement> {

};

export const Table = ({ children, ...rest }: TableProps) => {
  return <button {...rest}>{children}</button>
};