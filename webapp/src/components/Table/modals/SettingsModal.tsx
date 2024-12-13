import React, { useEffect } from 'react';
import { Form, Modal } from 'react-bootstrap';
import { Column } from '../TableRoot';
import useLocalStorage from '@/hooks/useLocalStorage';

interface SettingsModalProps {
  show: boolean;
  columns: Column[];
  setShow: (value: boolean) => void;
  uuid?: string;
}

function SettingsModal({ columns, show, setShow, uuid }: SettingsModalProps) {
  const [columnsVisibilityMapper, setColumnsVisibilityMapper] = useLocalStorage('columnsVisibility'+uuid);

  useEffect(() => {
    const storageHiddenColumns = localStorage.getItem('columnsVisibility'+uuid);

    if (!storageHiddenColumns) {
      const defaultColumnsVisibility = makeShowAndHiddenColumnsArray(columns);
      setColumnsVisibilityMapper(defaultColumnsVisibility);
    }
  }, []);

  function makeShowAndHiddenColumnsArray(columns: Column[]): { [key: string]: boolean } {
    const showColumnsObject: { [key: string]: boolean } = {};
    columns.forEach((column: Column) => {
      const isHidden = column.hidden === undefined ? false : column.hidden;
      showColumnsObject[column.title + column.field] = !isHidden;
    });
    return showColumnsObject;
  }

  return (
    <Modal show={show} onHide={() => setShow(!show)}>
      <Modal.Header closeButton>
        <Modal.Title>Preferences</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div>
          <div className="mb-4">
            <h6 style={{ fontWeight: 'bold' }}>Column Preferences</h6>
            <h6>Customize the columns visibility</h6>
          </div>
          <div
            className="d-flex flex-column"
            style={{ width: '300px', maxHeight: '50vh', overflow: 'auto', minHeight: '200px' }}
          >
            {columns.map((column) => {
              return (
                <span key={column.title + column.title} className="p-2 border-top d-flex justify-content-between">
                  {column.title}
                  <Form.Check // prettier-ignore
                    type="switch"
                    id="custom-switch"
                    label={''}
                    checked={
                      columnsVisibilityMapper &&
                      JSON.parse(columnsVisibilityMapper) &&
                      JSON.parse(columnsVisibilityMapper)[column.title + column.field]
                    }
                    onChange={() => {
                      const parsedHiddenColumns = JSON.parse(columnsVisibilityMapper);
                      const updatedColumnsVisibility = {
                        ...parsedHiddenColumns,
                        [column.title + column.field]: !parsedHiddenColumns[column.title + column.field]
                      };
                      setColumnsVisibilityMapper(updatedColumnsVisibility);
                    }}
                  />
                </span>
              );
            })}
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer></Modal.Footer>
    </Modal>
  );
}

export default SettingsModal;
