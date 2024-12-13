import React, { ComponentType } from 'react';
import { Column } from './TableRoot';
import TableSelector from './TableSelector';
import { FORMATTER_LIST } from './formatters';
import { Action } from '@/types';
import TableAction from './TableAction';
import TableEditor from './TableEditor';
import { useTranslation } from 'react-i18next';
import { handleGetColumnVisible, handleGetVarObjectNestedValue } from '@/utils';

interface TableRowProps {
  columns: Column[];
  item: any;
  selectable?: boolean;
  keyColumns?: string[];
  selectedRows?: any[];
  actions?: Action[];
  onSelectChange?: (value: boolean, selectedItem: any) => void;
  onUpdate?: (item: any) => void;
  tableUuid?: string
}

function TableRow({
  item,
  columns,
  selectable,
  keyColumns,
  selectedRows,
  actions,
  onSelectChange,
  onUpdate,
  tableUuid
}: TableRowProps) {
  const { t } = useTranslation();

  return (
    <tr id="collapseExample">
      {selectable && keyColumns && onSelectChange && item && selectedRows && (
        <TableSelector
          keyColumns={keyColumns}
          item={item}
          onSelectChange={onSelectChange}
          selectedRows={selectedRows}
        />
      )}
      {columns &&
        columns.map((column: Column, index) => {
          let FormatterComponent: ComponentType<any> | undefined;

          if (column.formatter && column.formatterParams) {
            FormatterComponent = FORMATTER_LIST[column.formatterParams!.type] as ComponentType<any>;
          }

          if(handleGetColumnVisible(column, tableUuid) !== null ? !handleGetColumnVisible(column, tableUuid) : column.hidden){
            return null;
        }

          return (
              <td key={column.field + index} className="text-center">
                <TableEditor
                  column={column}
                  field={column.field}
                  value={handleGetVarObjectNestedValue(item, column.field)}
                  item={item}
                  onUpdate={onUpdate}
                >
                  {column.formatter && column.formatterParams && FormatterComponent ? (
                    <FormatterComponent
                      params={column.formatterParams}
                      value={handleGetVarObjectNestedValue(item, column.field)}
                      item={item}
                      field={column.field}
                    />
                  ) : (
                    <span>{column.type === "ENUM" ? t(handleGetVarObjectNestedValue(item, column.field)) : String(handleGetVarObjectNestedValue(item, column.field))}</span>
                  )}
                </TableEditor>
              </td>
          );
        })}

      {actions && <TableAction actions={actions} item={item} />}
    </tr>
  );
}

export default TableRow;
