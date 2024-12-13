import React from 'react';
import { usePagination } from '@/hooks/usePagination';
import { Pagination } from 'react-bootstrap';

interface TablePaginationProps {
  currentPage: number;
  totalItems: number;
  pageItems: number;
  totalPages: number;
  onPageChange: (currentPage: number) => void;
}

function TablePagination({
  currentPage,
  totalItems,
  pageItems,
  totalPages,
  onPageChange
}: TablePaginationProps) {
  const paginationRange = usePagination({
    totalCount: totalItems || 1,
    pageSize: pageItems || 1,
    currentPage: currentPage || 0
  });

  const DOTS: '...' = '...';

  return (
    <Pagination className="d-flex justify-content-center">
      <Pagination.Prev style={{ width: '48px', textAlign: 'center' }} disabled={currentPage == 0} onClick={() => onPageChange(currentPage - 1)} />

      {paginationRange &&
        paginationRange.map((pageNumber, index) => {
          if (pageNumber === DOTS) {
            return <Pagination.Ellipsis key={index} />;
          }

          return (
            <Pagination.Item
              key={index}
              active={pageNumber === currentPage}
              onClick={() => onPageChange(pageNumber as number)}
              style={{ width: '48px', textAlign: 'center' }}
            >
              {pageNumber}
            </Pagination.Item>
          );
        })}

      <Pagination.Next
        disabled={currentPage + 1 == totalPages}
        onClick={() => onPageChange(currentPage + 1)}
        style={{ width: '48px', textAlign: 'center' }}
      />
    </Pagination>
  );
}

export default TablePagination;
