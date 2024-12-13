import React from 'react';
import { Action } from '@/types';
import * as Icons from 'react-icons/fa';
import { Button, OverlayTrigger, Popover } from 'react-bootstrap';

type ActionInstanceProps = {
  action: Action
  item?: any;
};

function TableBtnAction({ action, item }: ActionInstanceProps) {
  const Icon = action.icon ? Icons[action.icon] : null;
  return (
    <Button
      className="p-0 me-1"
      size="sm"
      onClick={(ev) => action.function(item)}
      style={{ minWidth: '24px', width: 'fit-content', height: '24px' }}
      variant={action.variant}
    >
      {action.icon && Icon ? (
        <OverlayTrigger
          placement="top"
          overlay={
            <Popover>
              <div className="p-2">{action.title}</div>
            </Popover>
          }
          delay={{ show: 300, hide: 0 }}
        >
          <div>
            <Icon />
          </div>
        </OverlayTrigger>
      ) : (
        <p className="ps-1 pe-1">{action.title}</p>
      )}
    </Button>
  );
}

export default TableBtnAction;