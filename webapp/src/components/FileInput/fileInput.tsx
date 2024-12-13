import React from 'react';
import styles from './styles.module.css';
import { FaFileUpload } from 'react-icons/fa';
import { FaWindowClose } from 'react-icons/fa';
import { Button } from 'react-bootstrap';
import * as Icons from 'react-icons/fa';
import { FaIconName } from '@/types';

interface FileInputProps {
  variableValue: any;
  setVariableValue: (file: any) => void;

  icon?: FaIconName;
  label?: string;
  buttonText?: string;

  color?: string;

  refFileInput: React.MutableRefObject<HTMLInputElement | null>;
  dragging: boolean;
}

function FileInput({
  variableValue,
  setVariableValue,
  icon,
  label,
  buttonText,
  color,
  refFileInput,
  dragging
}: FileInputProps) {
  const Icon = icon ? Icons[icon] : FaFileUpload;

  const handleFileInputChange = (e: any) => {
    const files = Array.from(e.target.files);
    if (files.length > 0) {
      setVariableValue(files[0]);
    }
  };

  return (
    <>
      <Icon
        className={styles.uploadIcon}
        style={{ color: color ? color : '#027bff', opacity: variableValue ? 1 : 0.8 }}
      />
      <input
        type="file"
        style={{ display: 'none' }}
        onChange={handleFileInputChange}
        ref={refFileInput}
      />
      {dragging ? (
        <p className={styles.placeholder}>Drop the files here...</p>
      ) : (
        <p className={styles.placeholder}>
          {label ? label : 'Drag and drop the file here, or click to select'}
        </p>
      )}
      <span className={`${styles.fileName} justify-content-center w-100`}>
        <p style={{ textOverflow: 'ellipsis', maxWidth: '98%', overflow: 'hidden' }}>
          {variableValue ? variableValue.name : 'No file chosen...'}
        </p>
        {variableValue && (
          <FaWindowClose
            className={`ms-2 ${styles.closeButton}`}
            onClick={(ev) => {
              ev.stopPropagation();
              setVariableValue(null);
            }}
          />
        )}
      </span>

      <Button
        className={`${styles.uploadButton} border-0`}
        style={{ backgroundColor: color ? color : '#027bff' }}
      >
        {buttonText ? buttonText : 'Upload file'}
      </Button>
    </>
  );
}

export default FileInput;
