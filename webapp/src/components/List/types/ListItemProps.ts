import { Action, ContextMenuOption } from '@/types';
import React, { ReactNode } from 'react';

export type ListItemProps = {
  item?: any;
  actions?: Action[];
  children?: React.ReactElement<any>;
  styles?: React.CSSProperties;

  selectable?: boolean;
  selectedItems?: any[];
  onSelectChange?: (value: boolean, selectedItem: any) => void;
  keyAttributes?: string[];

  contextMenu?: ContextMenuOption[];
}