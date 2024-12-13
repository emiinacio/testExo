import React from 'react';
import { Sorter } from '@/types';
import { FaCaretDown, FaCaretUp } from 'react-icons/fa';
import { Column } from './TableRoot';

interface TableSorterProps {
  column: Column;
  sorters: Sorter[];
  columnSorter: Sorter;
}
function TableSorter({ column, sorters, columnSorter }: TableSorterProps) {
  return (
    <React.Fragment key={columnSorter.field}>
      {columnSorter.direction === 'desc' ? (
        <FaCaretDown
          className={sorters && columnSorter.field === sorters[0].field ? 'text-primary' : ''}
        />
      ) : (
        <FaCaretUp
          className={sorters && columnSorter.field === sorters[0].field ? 'text-primary' : ''}
        />
      )}
    </React.Fragment>
  );
}

export default TableSorter;
