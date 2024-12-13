import { ComponentType, ReactNode } from 'react';
import TextEditor, { TextEditorProps } from './TextEditor';
import NumberEditor, { NumberEditorProps } from './NumberEditor';
import BooleanEditor, { BooleanEditorProps } from './BooleanEditor';
import DateEditor, { DateEditorProps } from './DateEditor';

export interface EditComponentProps<E> {
  params: E;
  value: string;
  item?: any;
  field: string;
  onBlur: (field: string, value: string) => void;
  onChange?: (ev: React.ChangeEvent<any>) => void;
}

export enum EditorTypes {
  TEXT = 'TEXT',
  VARCHAR = 'VARCHAR',
  NUMBER = 'NUMBER',
  INTEGER = 'INTEGER',
  DATE = 'DATE',
  BOOLEAN = 'BOOLEAN'
}

export const EDITOR_LIST: { [key: string]: ReactNode } = {
  [EditorTypes.TEXT]: TextEditor as ComponentType<EditComponentProps<TextEditorProps>>,
  [EditorTypes.VARCHAR]: TextEditor as ComponentType<EditComponentProps<TextEditorProps>>,
  [EditorTypes.NUMBER]: NumberEditor as ComponentType<EditComponentProps<NumberEditorProps>>,
  [EditorTypes.INTEGER]: NumberEditor as ComponentType<EditComponentProps<NumberEditorProps>>,
  [EditorTypes.BOOLEAN]: BooleanEditor as ComponentType<EditComponentProps<BooleanEditorProps>>,
  [EditorTypes.DATE]: DateEditor as ComponentType<EditComponentProps<DateEditorProps>>
};
