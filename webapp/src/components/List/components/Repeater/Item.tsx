import React, { useRef } from 'react';
import ActionsBar from '@/components/List/components/Repeater/ActionsBar';
import { ListItemProps } from '@/components/List/types/ListItemProps';
import ContextMenu from '@/components/ContextMenu';
import { ContextMenuOption } from '@/types';
import ContextMenuItem from '@/components/ContextMenu/ContextMenuItem';

function Item({
  styles,
  item,
  actions = [],
  children,
  selectable,
  selectedItems,
  onSelectChange,
  keyAttributes,
  contextMenu
}: ListItemProps) {
  const itemRef = useRef(null);
  return (
    <>
      <div
        className={'p-2 gap-2 border rounded'}
        style={{ flex: '1', ...styles }}
        ref={itemRef}
      >
        {/* @ts-ignore */}
        {React.isValidElement(children) && React.cloneElement(children, { item })}
        <ActionsBar
          actions={actions}
          item={item}
          selectable={selectable}
          selectedItems={selectedItems}
          onSelectChange={onSelectChange}
          keyAttributes={keyAttributes}
        />
      </div>
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

export default Item;