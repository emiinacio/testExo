import React from 'react';
import { Column } from './TableRoot';

interface TableDraggerProps {
  dragKey: string;
  children: React.ReactNode[];
  columns: Column[];
  setColumns: React.Dispatch<React.SetStateAction<any[]>>;
}

function TableDragger({ dragKey, children, columns, setColumns }: TableDraggerProps) {
  const [selectedField, setSelectedField] = React.useState('');
  const columnRef = React.useRef<HTMLDivElement>(null);

  const handleDragStart = function (e: React.DragEvent<HTMLElement>, field: string) {
    e.dataTransfer.setData('exocode/dragged-column-id', field);
    e.dataTransfer.dropEffect = 'copy';
    setSelectedField(field);
  };

  const handleDragOver = (e: React.DragEvent<HTMLElement>) => {
    e.preventDefault();
    if (!columnRef?.current) return;
    columnRef.current.style.border = '1px solid #86b7fe';
    columnRef.current.style.boxShadow = '0 0 0 0.25rem rgba(13,110,253,.25)';
  };

  function handleDragleave() {
    if (!columnRef || !columnRef?.current) return;
    columnRef.current.style.border = '';
    columnRef.current.style.boxShadow = '';
  }

  async function handleDrop(e: React.DragEvent<HTMLElement>) {
    if (columnRef && columnRef.current) {
      columnRef.current.style.border = '';
      columnRef.current.style.boxShadow = '';
    }
    const draggedColumnID = e.dataTransfer.getData('exocode/dragged-column-id');
    if (draggedColumnID === dragKey) return;
    handleChangeOrder(draggedColumnID);
  }

  function handleChangeOrder(draggedColumn: string) {
    const originColumn = columns.find((column: Column) => column.field === draggedColumn);
    const targetColumn = columns.find((column: Column) => column.field === dragKey);

    if (
      !targetColumn ||
      targetColumn.order === undefined ||
      !originColumn ||
      originColumn.order === undefined
    ) {
      return;
    }

    const { order: originOrder } = originColumn;
    const { order: targetOrder } = targetColumn;

    const updatedColumns = columns.map((column: Column) => {
      if (!column.order && column.order !== 0) {
        return column;
      }

      if (column.field !== draggedColumn) {
        const isOriginBeforeTarget = originOrder < targetOrder;

        if (
          (isOriginBeforeTarget && column.order > originOrder && column.order <= targetOrder) ||
          (!isOriginBeforeTarget && column.order < originOrder && column.order >= targetOrder)
        ) {
          return { ...column, order: isOriginBeforeTarget ? column.order - 1 : column.order + 1 };
        }
      } else {
        return { ...column, order: targetOrder };
      }

      return column;
    });

    setColumns(updatedColumns);
  }

  return (
    <div
      ref={columnRef}
      draggable={true}
      onDragStart={(e) => handleDragStart(e, dragKey)}
      onDragOver={handleDragOver}
      onDragLeave={handleDragleave}
      onDrop={handleDrop}
    >
      {children}
    </div>
  );
}

export default TableDragger;
