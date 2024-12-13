import React, { useEffect } from 'react';
import { EditComponentProps } from '.';
import { Form } from 'react-bootstrap';

export interface DateEditorProps {}

function DateEditor({ value, field, onBlur, onChange }: EditComponentProps<DateEditorProps>) {
  const ref = React.useRef<HTMLInputElement>(null);
  React.useEffect(() => {
    ref.current?.focus();
  }, []);

  return (
    <Form.Group className="mb-3 w-100" controlId="GenericTextInput">
      <Form.Control
        ref={ref}
        value={value}
        onBlur={(ev) => {
          onBlur(field, String(ev.target.value));
        }}
        onChange={onChange}
        type="date"
        placeholder=""
      />
    </Form.Group>
  );
}

export default DateEditor;
