import React from 'react';
import { ListItemProps } from '@/components/List/types/ListItemProps';

type RepeaterProps = {
  items?: any[];
  numberOfColumns?: number;
  gap?: string;
  children?: React.ReactElement<ListItemProps>;
};

function Repeater({ items, numberOfColumns = 1, gap = '1rem', children }: RepeaterProps) {
  if (!items || items.length < 1) return null;
  return (
  <div
    className={'w-100 ps-3 pe-3'}
    style={{
      gap: gap,
      display: 'grid',
      gridTemplateColumns: `repeat(${numberOfColumns}, 1fr)`
    }}
  >
    {items.map((item) => {
      if (React.isValidElement(children)) {
        return React.cloneElement(children, { item })
      }
      return null;
    })}
  </div>
);
}

export default Repeater;