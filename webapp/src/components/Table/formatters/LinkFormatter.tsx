import React from 'react';
import { FormatterComponentProps } from '.';

export interface LinkFormatterProps {
  urlPrefix: string;
  label: string;
  target: string;
}

function LinkFormatter({ params, value }: FormatterComponentProps<LinkFormatterProps>) {
  return (
    <a href={(params.urlPrefix ? params.urlPrefix : '') + value} target={params.urlPrefix}>
      {params.label ? params.label : value}
    </a>
  );
}

export default LinkFormatter;
