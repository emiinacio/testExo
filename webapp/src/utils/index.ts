import { Column } from '@/components/Table/TableRoot';
import { Filter, Sorter } from '@/types';

export function buildFilterParam(filters: Filter[]) {
  return filters
    .filter((filter) => filter.value && filter.value !== '')
    .map((filter) => `${filter.field} ${filter.comparisonType} ${filter.value}`)
    .join(' and ');
}

export function buildSortParam(sorters: Sorter[]) {
  return sorters.map((sorter) => `${sorter.field} ${sorter.direction}`).join(',');
}

export function updateNestedProperty<T>(state: T, path: string, value: any): T {
  const keys: string[] = path.split('.');
  const newState = { ...state };
  let currentState: any = newState;

  for (let key of keys.slice(0, -1)) {
      currentState[key] = { ...currentState[key] } || {};
      currentState = currentState[key];
  }

  currentState[keys[keys.length - 1]] = value;

  return newState;
}

export function handleGetVarObjectNestedValue<O>(varRef: O, path: string): any {
  const arrayPath = path.split('.');
  let currentValue: any = varRef;

  try {
    for (const item of arrayPath) {
      currentValue = currentValue[item];
    }
    return currentValue;
  } catch (error) {
    return null;
  }
}

export function handleGetColumnVisible(column: Column, tableUuid: string | undefined) {
  if(!column || !tableUuid) return true;
  const columnsVisibility = JSON.parse(localStorage.getItem('columnsVisibility'+tableUuid) || '{}');
  return columnsVisibility[column.title + column.field] === null || columnsVisibility[column.title + column.field] === undefined ? null : columnsVisibility[column.title + column.field];
}
