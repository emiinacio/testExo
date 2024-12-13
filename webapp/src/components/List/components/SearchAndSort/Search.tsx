import React, { useEffect, useState } from 'react';
import { Button, Form, InputGroup } from 'react-bootstrap';

type FilterProps = {
  searchable?: boolean;
  searchValue?: string;
  onChangeSearch?: (search: string) => void;
};

function Search({ searchable, searchValue, onChangeSearch }: FilterProps) {
  const [search, setSearch] = useState('');

  useEffect(() => {
    if (searchValue === undefined) return;
    setSearch(searchValue);
  }, [searchValue]);

  if (!searchable) return null;
  if (searchValue === undefined) return null;
  if (onChangeSearch === undefined) return null;

  return (
    <InputGroup className={'float-start'} style={{ width: '20%', minWidth: '140px' }}>
      <Form.Control
        type="text"
        placeholder="Search..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <Button variant={'light'} onClick={() => onChangeSearch(search)}>
        <span className={'fa fa-magnifying-glass text-primary'} />
      </Button>
    </InputGroup>
  );
}

export default Search;