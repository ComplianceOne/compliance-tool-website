'use client';

import { useEffect, useState } from 'react';

type PaginationResult<T> = {
  currentItems: T[]; // The currently visible items
  pageCount: number; // Total number of pages
  handlePageClick: (event: { selected: number }) => void; // Handler for pagination
};

function usePagination<T>(
  items: T[],
  itemsPerPage: number
): PaginationResult<T> {
  const [itemOffset, setItemOffset] = useState(0);

  // Safeguard for itemsPerPage to avoid division-by-zero errors
  const safeItemsPerPage = Math.max(itemsPerPage, 1);

  // Calculate the current slice of items and total pages
  const endOffset = itemOffset + safeItemsPerPage;
  const currentItems = items.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(items.length / safeItemsPerPage);

  // Update itemOffset based on selected page
  const handlePageClick = (event: { selected: number }) => {
    const newOffset = (event.selected * safeItemsPerPage) % items.length;
    setItemOffset(newOffset);
  };

  // Scroll to the top when page changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [itemOffset]);

  return {
    currentItems,
    pageCount,
    handlePageClick,
  };
}

export default usePagination;
