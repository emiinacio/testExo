import React from 'react';
import { Filter, Sorter } from '@/types';
import TableSorter from './TableSorter';
import TableFilter from './TableFilter';
import { Column } from './TableRoot';
import TableDragger from './TableDragger';
import { handleGetColumnVisible } from '@/utils';

interface TableHeaderProps {
  columns: Column[];
  sorters?: Sorter[];
  filters?: Filter[];
  selectable?: boolean;
  actions?: boolean;
  setColumns: React.Dispatch<React.SetStateAction<any[]>>;
  onSort?: (sorter: Sorter) => void;
  onFilter?: (newFilter: Filter, value: string) => void;
  tableUuid?: string;
}

function TableHeader({
  columns,
  sorters,
  filters,
  selectable,
  actions,
  setColumns,
  onSort,
  onFilter,
  tableUuid
}: TableHeaderProps) {
  function handleGetSorter(field: string) {
    return sorters?.filter((sorter: Sorter) => field === sorter.field)[0];
  }

  return (
      <thead>
        <tr>
          {selectable && <th></th>}
          {columns
            .sort((columnA: Column, columnB: Column) => columnA.order! - columnB.order!)
            .map((column: Column) => {
              const columnSorter = handleGetSorter(column.field);
              if(handleGetColumnVisible(column, tableUuid) !== null ? !handleGetColumnVisible(column, tableUuid) : column.hidden){
                  return null;
              }
              return (
                <th
                  key={column.title}
                  onClick={() => columnSorter && onSort && onSort(columnSorter)}
                  style={{ cursor: 'pointer' }}
                  className="text-center"
                >
                  <TableDragger dragKey={column.field} columns={columns} setColumns={setColumns}>
                    {column.title}
                    {column.sortable && columnSorter && sorters && (
                      <TableSorter column={column} sorters={sorters} columnSorter={columnSorter} />
                    )}
                  </TableDragger>
                </th>
              );
            })}
          {actions && <th></th>}
        </tr>
        {filters && onFilter && (
          <TableFilter
            columns={columns}
            filters={filters}
            selectable={selectable}
            onFilter={onFilter}
            tableUuid={tableUuid}
          />
        )}
      </thead>
  );
}

export default TableHeader;
