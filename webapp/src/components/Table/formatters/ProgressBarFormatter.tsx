import React from 'react';
import { FormatterComponentProps } from '.';
import * as Icons from 'react-icons/fa';
import ProgressBar from 'react-bootstrap/ProgressBar';

export interface ProgressBarFormatterProps {
  min?: number;
  max?: number;
  variant?: string;
  label?: boolean;
  animated?: boolean;
  striped: boolean;
}

function ProgressBarFormatter({
  params,
  value
}: FormatterComponentProps<ProgressBarFormatterProps>) {
  return (
    <>
      <ProgressBar
        min={params.min ? params.min : 0}
        max={params.max ? params.max : 0}
        now={Number(value)}
        label={params.label ? `${Number(value)}%` : null}
        variant={params.variant}
        striped={params.striped}
        animated={params.animated}
      />
    </>
  );
}

export default ProgressBarFormatter;
