import React from 'react';
import { FormatterComponentProps, FormatterTypes } from '.';

export interface ColorFormatterProps {
  type: FormatterTypes;
  color: string;
  value: string;
}

function ColorFormatter({ params, value }: FormatterComponentProps<ColorFormatterProps>) {
  return <div style={{ width: '25px', height: '25px', backgroundColor: value }}></div>;
}

export default ColorFormatter;
