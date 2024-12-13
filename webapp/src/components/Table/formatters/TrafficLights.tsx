import React from 'react';
import { FormatterComponentProps } from '.';

export interface TrafficLightsFormatterProps {
  min?: number;
  max?: number;
  colors?: string[];
}

function TrafficLightsFormatter({
  params,
  value
}: FormatterComponentProps<TrafficLightsFormatterProps>) {
  const colorMapper: string[] = [];
  if (params.min && params.max && params.colors)
    for (let i = params.min ? params.min : 0; i <= (params.max ? params.max : 10); i++) {
      colorMapper[i] = params.colors?.[i - params.min!];
    }
  return (
    <>
      {value && (
        <div
          style={{
            width: '20px',
            height: '20px',
            borderRadius: '50px',
            backgroundColor: colorMapper[Number(value)]
          }}
        ></div>
      )}
    </>
  );
}

export default TrafficLightsFormatter;
