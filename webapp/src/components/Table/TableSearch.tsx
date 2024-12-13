import React from 'react';
import { Form } from 'react-bootstrap';

interface TableSearchProps {
  search: string;
  onSearch: (newSearchText: string) => void;
}
function TableSearch({ search, onSearch }: TableSearchProps) {
  return (
    <div style={{ width: '240px' }}>
      <Form.Group className="mb-3 w-100" controlId="GenericTextInput">
        <Form.Control
          value={search}
          onChange={(ev) => {
            onSearch(ev.target.value);
          }}
          type="text"
          placeholder="Search..."
        />
      </Form.Group>
    </div>
  );
}

export default TableSearch;
