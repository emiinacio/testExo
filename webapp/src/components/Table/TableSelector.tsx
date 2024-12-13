import React from 'react';

interface TableSelector {
  selectedRows: any[];
  keyColumns: string[];
  onSelectChange: (value: boolean, selectedItem: any) => void;
  item: any;
}

function TableSelector({ selectedRows, keyColumns, item, onSelectChange }: TableSelector) {
  return (
    <>
      <td>
        <input
          className="form-check-input"
          type="checkbox"
          checked={
            selectedRows &&
            selectedRows.some(
              (row: any) =>
                keyColumns &&
                keyColumns.every((keyColumn: string) => row[keyColumn] === item[keyColumn])
            )
          }
          onChange={(ev) => onSelectChange && onSelectChange(ev.target.checked, item)}
        />
      </td>
    </>
  );
}

export default TableSelector;
