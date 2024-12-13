import React from 'react';
import { FormatterComponentProps } from '.';
import * as Icons from 'react-icons/fa';

type FaIconName = keyof typeof Icons | '';

export interface ButtonTickFormatterProps {
  icon: FaIconName;
}

function ButtonTickFormatter({ params, value }: FormatterComponentProps<ButtonTickFormatterProps>) {
  const Icon = params.icon ? Icons[params.icon] : null;
  return Icon && (value ? <Icon style={{ color: '#0d6efd' }} /> : <Icon />);
}

export default ButtonTickFormatter;
