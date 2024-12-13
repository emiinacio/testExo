import React from 'react';
import { FormatterComponentProps } from '.';

export interface ImageFormatterProps {
  width: string;
  height: string;
  urlPrefix: string;
  urlSufix: string;
}

function ImageFormatter({ params, value }: FormatterComponentProps<ImageFormatterProps>) {
  return (
    <img
      src={params.urlPrefix + value + params.urlSufix}
      style={{ width: params.width + 'px', height: params.height + 'px' }}
      alt={value}
    />
  );
}

export default ImageFormatter;
