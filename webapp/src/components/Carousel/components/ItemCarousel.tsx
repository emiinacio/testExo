import React from 'react';
import { ItemProps } from '../types/types';

export const ItemCorousel = ({ keyValue, children }: ItemProps) => {
  return <div key={keyValue}>{children}</div>;
};
