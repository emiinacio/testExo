import React, { useEffect } from 'react';
import { FormatterComponentProps } from '.';

export interface LookupFormatterProps {
  values: { [key: string]: string };
}

function LookupFormatter({ params, value }: FormatterComponentProps<LookupFormatterProps>) {
  return <label>{params.values[value] ? params.values[value] : value}</label>;
}

export default LookupFormatter;
