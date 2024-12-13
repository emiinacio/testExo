import { ComponentType, ReactNode } from 'react';
import ColorFormatter, { ColorFormatterProps } from './ColorFormatter';
import ImageFormatter, { ImageFormatterProps } from './ImageFormatter';
import TickCrossFormatter, { TickCrossFormatterProps } from './TickCrossFormatter';
import ButtonTickFormatter, { ButtonTickFormatterProps } from './ButtonTickFormatter';
import ProgressBarFormatter, { ProgressBarFormatterProps } from './ProgressBarFormatter';
import StarsFormatter, { StarsFormatterProps } from './StarsFormatter';
import TrafficLightsFormatter, { TrafficLightsFormatterProps } from './TrafficLights';
import LookupFormatter, { LookupFormatterProps } from './LookupFormatter';
import LinkFormatter, { LinkFormatterProps } from './LinkFormatter';
import DatetimeFormatter, { DatetimeFormatterProps } from './Datetime';
import BadgeFormatter, { BadgeFormatterProps } from './BadgeFormatter';

export interface FormatterComponentProps<E> {
  params: E;
  value: string;
}

export enum FormatterTypes {
  TICKCROSS = 'TICKCROSS',
  BUTTONTICK = 'BUTTONTICK',
  TRAFFICLIGHT = 'TRAFFICLIGHT',
  STARS = 'STARS',
  PROGRESSBAR = 'PROGRESSBAR',
  DATETIME = 'DATETIME',
  LINK = 'LINK',
  IMAGE = 'IMAGE',
  COLOR = 'COLOR',
  LOOKUP = 'LOOKUP',
  BADGE = 'BADGE'
}

export type FormatterProps = {
  [key: string]: string;
};

export const FORMATTER_LIST: { [key: string]: ReactNode } = {
  [FormatterTypes.BUTTONTICK]: ButtonTickFormatter as ComponentType<
    FormatterComponentProps<ButtonTickFormatterProps>
  >,
  [FormatterTypes.TICKCROSS]: TickCrossFormatter as ComponentType<
    FormatterComponentProps<TickCrossFormatterProps>
  >,
  [FormatterTypes.STARS]: StarsFormatter as ComponentType<
    FormatterComponentProps<StarsFormatterProps>
  >,
  [FormatterTypes.TRAFFICLIGHT]: TrafficLightsFormatter as ComponentType<
    FormatterComponentProps<TrafficLightsFormatterProps>
  >,
  [FormatterTypes.PROGRESSBAR]: ProgressBarFormatter as ComponentType<
    FormatterComponentProps<ProgressBarFormatterProps>
  >,
  [FormatterTypes.DATETIME]: DatetimeFormatter as ComponentType<
    FormatterComponentProps<DatetimeFormatterProps>
  >,
  [FormatterTypes.LINK]: LinkFormatter as ComponentType<
    FormatterComponentProps<LinkFormatterProps>
  >,
  [FormatterTypes.COLOR]: ColorFormatter as ComponentType<
    FormatterComponentProps<ColorFormatterProps>
  >,
  [FormatterTypes.IMAGE]: ImageFormatter as ComponentType<
    FormatterComponentProps<ImageFormatterProps>
  >,
  [FormatterTypes.LOOKUP]: LookupFormatter as ComponentType<
    FormatterComponentProps<LookupFormatterProps>
  >,
  [FormatterTypes.BADGE]: BadgeFormatter as ComponentType<
    FormatterComponentProps<BadgeFormatterProps>
  >
};
