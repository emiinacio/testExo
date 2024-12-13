import React, { ComponentType, ReactChild } from 'react';
import { Column } from './TableRoot';
import { EDITOR_LIST } from './editors';
import { updateNestedProperty } from '@/utils';

export interface TableEditorProps {
  children: ReactChild;
  column: Column;
  value: string;
  item?: any;
  field?: string;
  onUpdate?: (item: any) => void;
}

function TableEditor({ children, column, field, value, item, onUpdate }: TableEditorProps) {
  const [inputValue, setInputValue] = React.useState(value);
  const [isEditing, setIsEditing] = React.useState(false);
  const ref = React.useRef<HTMLInputElement>(null);
  let EditorComponent: ComponentType<any> | undefined;

  if (column.editable && column.type) {
    EditorComponent = EDITOR_LIST[column.type] as ComponentType<any>;
  }

  function handleDoubleClick() {
    if (column.editable && column.type) {
      setIsEditing(true);
    }
  }

  function handleOnBlur(field: string, value: string) {
    setIsEditing(false);

    if (!onUpdate) return;
    const updatedItem = updateNestedProperty(item, field, value)
    onUpdate(updatedItem);
  }

  function handleOnChange(ev: React.ChangeEvent<HTMLInputElement>) {
    setInputValue(ev.target.value);
  }

  return (
    <div onDoubleClick={handleDoubleClick} tabIndex={0}>
      {!column.editable || !isEditing
        ? children
        : EditorComponent && (
            <EditorComponent
              value={inputValue}
              params={null}
              field={field}
              item={item}
              onBlur={handleOnBlur}
              onChange={handleOnChange}
            />
          )}
    </div>
  );
}

export default TableEditor;
