import React from 'react';
import { Table as BsTable } from 'react-bootstrap';
import { Action, ContextMenuOption, Filter, Sorter } from '@/types';
import TableHeader from './TableHeader';
import TableRow from './TableRow';
import TableBody from './TableBody';
import Pagination from '../Pagination/Pagination';
import TableSearch from './TableSearch';
import TableFooter from './TableFooter';
import ContextMenu from '../ContextMenu';
import ContextMenuItem from '@/components/ContextMenu/ContextMenuItem';
import { BsFillGearFill } from 'react-icons/bs';
import SettingsModal from './modals/SettingsModal';
import TableBtnAction from './TableBtnAction';

export type Column = {
  title: string;
  field: string;
  type?: string;
  filterable?: boolean;
  sortable?: boolean;
  formatter?: boolean;
  formatterParams?: { [key: string]: string };
  editable?: boolean;
  footerSum?: boolean;
  order?: number;
  hidden?: boolean;
};

export type TableProps = {
  items: any[];
  columns: Column[];
  filters?: Filter[];
  sorters?: Sorter[];

  currentPage?: number;
  pageItems?: number;
  totalItems?: number;
  totalPages?: number;
  pageable?: boolean;
  formatter?: boolean;
  formatterParams?: { [key: string]: string };

  selectable?: boolean;
  keyColumns?: string[];
  selectedRows?: any[];
  actions?: Action[];
  actionsBtn?: Action[];
  search?: string;
  contextMenu?: ContextMenuOption[];

  setColumns: React.Dispatch<React.SetStateAction<any[]>>;
  onSearch?: (searchText: string) => void;
  onSort?: (sorter: Sorter) => void;
  onFilterChange?: (newFilter: Filter, value: string) => void;
  onPageChange?: (currentPage: number) => void;
  onSelectChange?: (value: boolean, selectedItem: any) => void;
  onUpdate?: (item: any) => void;
  variant?: string;
  uuid?: string;
};

function Table({
  items,
  columns,
  filters,
  sorters,
  currentPage,
  pageItems,
  totalItems,
  totalPages,
  pageable,
  keyColumns,
  selectable,
  selectedRows,
  actions,
  actionsBtn,
  search = '',
  contextMenu,
  setColumns,
  onSearch,
  onSort,
  onFilterChange,
  onPageChange,
  onSelectChange,
  onUpdate,
  variant,
  uuid
}: TableProps) {
  const tableRef = React.useRef<HTMLTableElement>(null);
  const [showSettingsModal, setShowSettingsModal] = React.useState<boolean>(false);
    return (
      <>
        <div className="p-3">
          <div className="d-flex align-items-start justify-content-between">
            {
              <TableSearch
                search={search}
                onSearch={() => {
                  console.log('');
                }}
              />
            }
            <div>
              {actionsBtn && actionsBtn.map((itemBtnAc, index) => (<TableBtnAction key={index} action={itemBtnAc} />))}
              <span
                title="Settings"
                onClick={(e) => setShowSettingsModal(!showSettingsModal)}
                style={{ cursor: 'pointer' }}
              >
                {<BsFillGearFill />}
              </span>
            </div>
          </div>
          <BsTable striped hover ref={tableRef} variant={variant}>
            <TableHeader
              columns={columns}
              setColumns={setColumns}
              sorters={sorters}
              filters={filters}
              selectable={selectable}
              actions={actions ? true : false}
              onSort={onSort}
              onFilter={onFilterChange}
              tableUuid={uuid}
            />

            <TableBody>
              <>
                {items &&
                  items.map((item: any, index: number) => (
                    <TableRow
                      columns={columns}
                      item={item}
                      key={index}
                      selectable={selectable}
                      keyColumns={keyColumns}
                      selectedRows={selectedRows}
                      actions={actions}
                      onSelectChange={onSelectChange}
                      onUpdate={onUpdate}
                      tableUuid={uuid}
                    />
                  ))}
                   {items?.length === 0 && <tr className='bg-body-tertiary'><td colSpan={1000} className='w-100 text-center'>No data</td></tr>}
              </>
            </TableBody>
            <TableFooter
              items={items}
              columns={columns}
              selectable={selectable}
              actions={actions ? true : false}
              pageable={pageable}
              tableUuid={uuid}
            />
            <menu id="contextmenu" />
          </BsTable>

          {pageable &&
            (currentPage || currentPage === 0) &&
            onPageChange &&
            pageItems &&
            totalItems &&
            totalPages && (
              <Pagination
                currentPage={currentPage}
                onPageChange={onPageChange}
                pageItems={pageItems}
                totalItems={totalItems}
                totalPages={totalPages}
              />
            )}

          <ContextMenu elementRef={tableRef} offsetX={96} offsetY={79}>
            {contextMenu &&
              contextMenu.map((menuOption: ContextMenuOption) => {
                const useSelectedRows = menuOption.useSelectedRows;
                const onClickParams = useSelectedRows ? selectedRows : items;
                const isValidOption = useSelectedRows
                  ? selectedRows && selectedRows.length > 0
                  : true;

                return (
                  <ContextMenuItem
                    key={menuOption.title}
                    icon={menuOption.icon ?? ''}
                    label={menuOption.title ?? ''}
                    onClick={(e: React.MouseEventHandler) => menuOption.function(onClickParams)}
                    disabled={useSelectedRows && !isValidOption}
                  />
                );
              })}
          </ContextMenu>
        </div>
        <SettingsModal setShow={setShowSettingsModal} show={showSettingsModal} columns={columns} uuid={uuid}/>
      </>
    );
}

export default Table;
