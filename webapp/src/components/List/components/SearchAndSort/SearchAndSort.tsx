import React from 'react';
import Sort from '@/components/List/components/SearchAndSort/Sort';
import Search from '@/components/List/components/SearchAndSort/Search';
import { Sorter } from '@/types';

type FilterAndSortProps = {
  searchable?: boolean;
  search?: string;
  onChangeSearch?: (search: string) => void;
  sortable?: boolean;
  sorters?: Sorter[];
  selectedSorter?: number;
  onChangeSort?: (sorterIndex: number) => void;
};

function SearchAndSort(props: FilterAndSortProps) {
  return (
    <div className={'w-100 ps-3 pe-3'}>
      <Search
        searchable={props.searchable}
        searchValue={props.search}
        onChangeSearch={props.onChangeSearch}
      />
      <Sort
        sortable={props.sortable}
        sorters={props.sorters}
        selectedSorter={props.selectedSorter}
        onChangeSort={props.onChangeSort}
      />
    </div>
  );
}

export default SearchAndSort;