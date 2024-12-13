import React, { useEffect } from 'react';
import { FormatterComponentProps } from '.';

export interface BadgeFormatterProps {
  values: { [key: string]: string };
}

function BadgeFormatter({ params, value }: FormatterComponentProps<BadgeFormatterProps>) {
  const values = params.values || {};
  const backgroundColor = typeof values[value] === 'string' ? values[value] : 'none';
  const style: React.CSSProperties = {
    padding: '0.2rem',
    borderRadius: '0.375rem',
    backgroundColor,
  };

  return <label style={values[value] ? style : {}}>{value}</label>;
}

export default BadgeFormatter;
