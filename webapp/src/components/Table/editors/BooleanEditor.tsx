import React, { useEffect } from 'react';
import { EditComponentProps } from '.';
import { Form } from 'react-bootstrap';

export interface BooleanEditorProps {}

function BooleanEditor({ value, field, onBlur, onChange }: EditComponentProps<BooleanEditorProps>) {
  const ref = React.useRef<HTMLInputElement>(null);
  React.useEffect(() => {
    ref.current?.focus();
  }, []);

  return (
    <Form.Check
      type="checkbox"
      id="GenericSwitchInput"
      ref={ref}
      value={value}
      onBlur={(ev) => {
        onBlur(field, String(ev.target.checked));
      }}
      onChange={onChange}
    />
  );
}

export default BooleanEditor;
