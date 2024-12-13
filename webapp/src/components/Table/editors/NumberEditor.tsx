import React from 'react';
import { EditComponentProps } from '.';
import { Form } from 'react-bootstrap';

export interface NumberEditorProps {}

function NumberEditor({ value, field, onBlur, onChange }: EditComponentProps<NumberEditorProps>) {
  const ref = React.useRef<HTMLInputElement>(null);
  React.useEffect(() => {
    ref.current?.focus();
  }, []);

  return (
    <Form.Group className="mb-3 w-100" controlId="GenericTextInput">
      <Form.Control
        ref={ref}
        value={value}
        onBlur={(ev) => onBlur(field, ev.target.value)}
        onChange={onChange}
        type="number"
        placeholder=""
      />
    </Form.Group>
  );
}

export default NumberEditor;
