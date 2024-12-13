import React from 'react';
import styles from './styles.module.css';
import FileInput from './fileInput';
import { FaIconName } from '@/types';

interface InputFileDropzoneProps {
  variableValue: any;
  setVariableValue: (file: any) => void;

  width?: string;
  height?: string;
  color?: string;
  background?: string;

  icon?: FaIconName;
  label?: string;
  buttonText?: string;
}

function InputFileDropzone({ variableValue, setVariableValue, width, height, color, background, icon, label, buttonText }: InputFileDropzoneProps) {
  const [dragging, setDragging] = React.useState(false);
  const refFileInput = React.useRef<HTMLInputElement | null>(null);

  const handleOpenFileSelector = () => {
    refFileInput.current?.click();
  };

  const handleDragEnter = (e: any) => {
    e.preventDefault();
    setDragging(true);
  };

  const handleDragLeave = () => {
    setDragging(false);
  };

  const handleDrop = (e: any) => {
    e.preventDefault();
    setDragging(false);
    const file = e.dataTransfer.files[0];
    if (file) {
      setVariableValue(file);
    }
  };

  return (
    <div
      onDragOver={(e) => e.preventDefault()}
      onDragEnter={handleDragEnter}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
      onClick={handleOpenFileSelector}
      className={`${styles.fileContainer} rounded p-4`}
      style={{ borderColor: color ? color : '#027bff', borderWidth: dragging ? '3px' : '2px', width: width ? width : "360px", height: height ? height : "fit-content", backgroundColor: background}}
    >
      <FileInput
        variableValue={variableValue}
        setVariableValue={setVariableValue}
        color={color}
        buttonText={buttonText}
        label={label}
        icon={icon}
        refFileInput={refFileInput}
        dragging={dragging}
      ></FileInput>
    </div>
  );
}

export default InputFileDropzone;
