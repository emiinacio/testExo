import React, { useState } from 'react';
import { Sorter } from '@/types';
import { Dropdown } from 'react-bootstrap';

type SortProps = {
  sortable?: boolean;
  sorters?: Sorter[];
  selectedSorter?: number;
  onChangeSort?: (sorterIndex: number) => void;
};

function Sort({ sortable, sorters, selectedSorter, onChangeSort } : SortProps) {
  const [selectOpen, setSelectOpen] = useState(false);
  function capitalFirstLetter(text: string): string {
    if (!text) return '';
    const firtsLetter = text[0];
    const rest = text.substring(1);
    return firtsLetter.toUpperCase() + rest;
  }

  if (!sortable) return null;
  if (sorters === undefined) return null;
  if (onChangeSort === undefined) return null;
  return (
    <Dropdown className={'float-end'}>
      <Dropdown.Toggle variant="light" className={'text-primary'}>
        <span className="fa fa-filter" />
      </Dropdown.Toggle>

      <Dropdown.Menu show={selectOpen} align={'end'}>
        {sorters.map((sorter, index) => (
          <Dropdown.Item
            key={index}
            className={index === selectedSorter ? 'bg-primary text-light' : ''}
            onClick={() => {
              onChangeSort(index);
              setSelectOpen(false); // Close the dropdown after selection
            }}
          >
            {`${capitalFirstLetter(sorter.field)} (${sorter.direction})`}
          </Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Dropdown>

  );
}

export default Sort;