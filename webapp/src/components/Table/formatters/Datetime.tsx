import React from 'react';
import { FormatterComponentProps } from '.';

export interface DatetimeFormatterProps {
  inputFormat: string;
  outputFormat: string;
  invalidPlaceholder: string;
  timezone: string;
}

function DatetimeFormatter({ params, value }: FormatterComponentProps<DatetimeFormatterProps>) {
  const options = { timeZone: params.timezone ? params.timezone : 'Europe/Lisbon' };

  if (isNaN(Date.parse(value))) {
    return <label>{params.invalidPlaceholder}</label>;
  }

  let inputDate: Date = new Date(value);
  inputDate.toLocaleString(undefined, options);
  let outputDate;

  switch (params.outputFormat) {
    case 'dd/mm/yyyy':
      outputDate =
        String(inputDate.getDay().toString) +
        '/' +
        String(inputDate.getMonth().toString) +
        '/' +
        String(inputDate.getFullYear());
      break;
    case 'mm/yyyy':
      outputDate = String(inputDate.getMonth()) + '/' + String(inputDate.getFullYear());
      break;
    case 'hh:mm':
      outputDate = String(inputDate.getHours()) + ':' + String(inputDate.getMinutes());
      break;
    case 'dd/mm/yyyyThh:mm':
      outputDate =
        String(inputDate.getDay()) +
        '/' +
        String(inputDate.getMonth()) +
        '/' +
        String(inputDate.getFullYear()) +
        ' ' +
        String(inputDate.getHours()) +
        ':' +
        String(inputDate.getMinutes());
      break;
    case 'yyyy/mm/dd':
      outputDate =
        String(inputDate.getFullYear()) +
        '/' +
        String(inputDate.getMonth()) +
        '/' +
        String(inputDate.getDay());
      break;
    case 'yyyy/mm':
      outputDate = String(inputDate.getFullYear()) + '/' + String(inputDate.getMonth());
      break;
    default:
      outputDate = inputDate.toLocaleString;
  }

  return (
    <>
      <label>{outputDate}</label>
    </>
  );
}

export default DatetimeFormatter;
