import React, { ReactChild } from 'react';

interface TableBodyProps {
  children?: ReactChild;
}

function TableBody({ children }: TableBodyProps) {
  return <tbody>{children}</tbody>;
}

export default TableBody;
