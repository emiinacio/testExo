import { Action } from '@/types';
import React from 'react';
import ActionInstance from '@/components/Action/ActionInstance';

interface TableActionProps {
  actions: Action[];
  item: any;
}

function TableAction({ actions, item }: TableActionProps) {
  return (
    <td style={{ whiteSpace: 'nowrap', width: '1%' }}>
      {actions.map((action: Action) => <ActionInstance key={action.title} action={action} item={item} />)}
    </td>
  );
}

export default TableAction;
