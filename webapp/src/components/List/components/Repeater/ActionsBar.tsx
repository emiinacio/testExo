import React from 'react';
import { Action } from '@/types';
import ActionInstance from '@/components/Action/ActionInstance';

type ActionsBarProps = {
  actions: Action[];
  item: any;

  selectable?: boolean;
  selectedItems?: any[];
  onSelectChange?: (value: boolean, selectedItem: any) => void;
  keyAttributes?: string[];
};

function ActionsBar({
  actions,
  item,
  selectable,
  selectedItems,
  onSelectChange,
  keyAttributes
}: ActionsBarProps) {
  const existsInSelectedItems = () => {
    if (!selectedItems || selectedItems.length < 1) return false;
    return selectedItems.some(matchesKeyAttributes);
  }

  const matchesKeyAttributes = (selectedItem: any) => {
    if (!keyAttributes || keyAttributes.length < 1) return false;
    return keyAttributes.every((keyAttribute: string) => {
      return selectedItem[keyAttribute] === item[keyAttribute];
    })
  }

  return (
    <div id={'actions-and-select'} className={'w-100 d-flex gap-1'}>
      <div
        id={'select-box'}
        className={
          'rounded bg-secondary-subtle shadow-sm p-1 d-flex flex-column justify-content-center'
        }
      >
        {selectable &&
          selectedItems !== undefined &&
          onSelectChange !== undefined &&
          keyAttributes !== undefined && (
            <input
              type="checkbox"
              checked={existsInSelectedItems()}
              onChange={(ev) => {
                onSelectChange && onSelectChange(ev.target.checked, item);
              }}
            />
          )
        }
      </div>
      <div id={'actions-bar'} className={'w-100 d-flex justify-content-end gap-1'}>
        {actions.map((action: Action) => <ActionInstance action={action} item={item} />)}
      </div>
    </div>

  );
}

export default ActionsBar;