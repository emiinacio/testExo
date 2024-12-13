import React from 'react';
import { FormatterComponentProps } from '.';
import { FaCheck, FaXmark } from 'react-icons/fa6';

export interface TickCrossFormatterProps {}

function TickCrossFormatter({ params, value }: FormatterComponentProps<TickCrossFormatterProps>) {
  return String(value).toLowerCase() === 'true' ? (
    <FaCheck style={{ color: '#59bb59' }} />
  ) : (
    <FaXmark style={{ color: '#fb5050' }} />
  );
}

export default TickCrossFormatter;
