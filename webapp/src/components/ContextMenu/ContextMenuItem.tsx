import React from 'react';
import { FaIconName } from '@/types';
import * as Icons from 'react-icons/fa';

export type ContextMenuOption = {
  label: string;
  icon: string;

  onClick: (
    e?: any,
    currentScale?: number,
    currentPosition?: { posX: number; posY: number },
    type?: string
  ) => void;
};

type ContextMenuItemProps = {
  label: string;
  icon: FaIconName;
  disabled?: boolean;
  onClick: (e?: any) => void;
};

function ContextMenuItem({ label, icon, disabled, onClick }: ContextMenuItemProps) {
  const Icon = icon ? Icons[icon] : null;

  return (
    <li
      className="p-0"
      style={disabled ? { cursor: 'default', opacity: 0.5 } : { cursor: 'pointer' }}
    >
      <div className="dropdown-item" onClick={disabled ? undefined : onClick}>
        {Icon && (
          <span className="me-3">
            <Icon />
          </span>
        )}
        {label}
      </div>
    </li>
  );
}

export default ContextMenuItem;
