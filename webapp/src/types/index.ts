import * as Icons from 'react-icons/fa';

export type FaIconName = keyof typeof Icons | '';

export type ApiError = {
  message: string;
  status?: number;
};

export enum RequestStatus {
  SUCCESS,
  ERROR
}

export type Page<T> = {
  totalPages: number;
  currentPage: number;
  totalItems: number;
  items: T[];
};

export type ObjectList = {
  [key: string]: boolean;
};

export type Filter = {
  field?: string;
  comparisonType?: string;
  value?: string;
};

export type Sorter = {
  field: string;
  direction: 'asc' | 'desc';
};

export type Action = {
  function: (item: any) => void;
  title?: string;
  icon?: FaIconName;
  variant?: string;
};

export type ContextMenuOption = {
  function: (selectedRows?: any[]) => void;
  useSelectedRows?: boolean;
  title?: string;
  icon?: FaIconName;
};


