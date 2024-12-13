import React from 'react';
import { Filter } from '@/types';
import { Column } from './TableRoot';
import { handleGetColumnVisible } from '@/utils';

interface TableFilterProps {
  columns: Column[];
  filters: Filter[];
  selectable?: boolean;
  onFilter: (newFilter: Filter, value: string) => void;
  tableUuid?: string;
}

function TableFilter({ columns, filters, selectable, onFilter, tableUuid }: TableFilterProps) {
  return (
    <tr>
      {selectable && <th></th>}
      {columns.map((column: Column, index) => {
        const filterIndex = filters.findIndex((filter: Filter) => filter.field === column.field);
        if(handleGetColumnVisible(column, tableUuid) !== null ? !handleGetColumnVisible(column, tableUuid) : column.hidden){
          return null;
      }
        return (filterIndex || filterIndex === 0) && filters[filterIndex] ? (
          <th key={column.field + column.title} className="text-center">
            <input
              type="text"
              onChange={(ev) => onFilter(filters[filterIndex], ev.target.value)}
              value={filters[filterIndex].value}
            />
          </th>
        ) : (
          <th key={column.field + column.title}></th>
        );
      })}
    </tr>
  );
}

export default TableFilter;
