import React from 'react';
import { Column } from './TableRoot';
import { handleGetColumnVisible } from '@/utils';

interface TableFooter {
  items: any[];
  columns: Column[];
  selectable?: boolean;
  actions?: boolean;
  pageable?: boolean;
  tableUuid?: string;
}

function TableFooter({ items, columns, selectable, actions, pageable, tableUuid }: TableFooter) {
  return (
    <tfoot>
      {!pageable && (
        <tr>
          {selectable && <th></th>}
          {columns &&
            items &&
            items.length > 0 &&
            columns.map((column: Column) => {

              if(handleGetColumnVisible(column, tableUuid) !== null ? !handleGetColumnVisible(column, tableUuid) : column.hidden){
                return null;
              }

              return(<th key={column.field + column.title} className="text-center">
                {column.footerSum &&
                  items.reduce((total: number, currentItem: any) => {
                    const itemValue = parseFloat(currentItem[column.field]);
                    return total + (isNaN(itemValue) ? 0 : itemValue);
                  }, 0)}
              </th>)
          })}
          {actions && items.length > 0 &&  <th></th>}
        </tr>
      )}
    </tfoot>
  );
}

export default TableFooter;
