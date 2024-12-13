import React, { useRef } from 'react';
import { Card as BSCard } from 'react-bootstrap';
import ActionsBar from '@/components/List/components/Repeater/ActionsBar';
import { ListItemProps } from '@/components/List/types/ListItemProps';
import ContextMenu from '@/components/ContextMenu';
import { ContextMenuOption } from '@/types';
import ContextMenuItem from '@/components/ContextMenu/ContextMenuItem';

function Image({
  styles,
  item,
  actions = [],
  selectable,
  selectedItems,
  onSelectChange,
  keyAttributes,
 contextMenu
}: ListItemProps) {
  const itemRef = useRef(null);
  return (
    <>
      <BSCard
        className={'p-2 gap-2'}
        style={{ flex: '1', ...styles }}
        ref={itemRef}
      >
        <div
          id={'content'}
          className={'bg-secondary d-flex align-items-center justify-content-center'}
        >
            <span
              className={'fa fa-file-image text-secondary-emphasis p-1'}
              style={{ fontSize: '5rem' }}
            />
        </div>
        <ActionsBar
          actions={actions}
          item={item}
          selectable={selectable}
          selectedItems={selectedItems}
          onSelectChange={onSelectChange}
          keyAttributes={keyAttributes}
        />
      </BSCard>
      <ContextMenu elementRef={itemRef} offsetX={96} offsetY={79}>
        {contextMenu &&
          contextMenu.map((menuOption: ContextMenuOption) => {
            const useSelectedRows = menuOption.useSelectedRows;
            const onClickParams = useSelectedRows ? selectedItems : item;
            const isValidOption = useSelectedRows ? selectedItems && selectedItems.length > 0 : true;

            return (
              <ContextMenuItem
                key={menuOption.title}
                icon={menuOption.icon ?? ''}
                label={menuOption.title ?? ''}
                onClick={(e: React.MouseEventHandler) => menuOption.function(onClickParams)}
                disabled={useSelectedRows && !isValidOption}
              />
            );
          })}
      </ContextMenu>
    </>
  );
}

export default Image;