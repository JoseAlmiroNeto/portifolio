"use client";

import React, { useState } from "react";

interface PaginationProps {
  items: JSX.Element[];
  itemsPerPage: number;
}

export function Pagination ({ items, itemsPerPage }: PaginationProps) {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(items.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = items.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div>
      <div className="flex flex-wrap justify-between gap-4 lg:gap-8 py-4">
        {currentItems}
      </div>
      <nav className="flex justify-center">
        <ul className="flex space-x-4">
          {Array.from({ length: totalPages }, (_, index) => (
            <li
              key={index}
              className={`px-2 py-1 cursor-pointer rounded ${
                currentPage === index + 1
                  ? "bg-blue-500 text-white"
                  : "bg-gray-300 text-gray-800"
              }`}
              onClick={() => handlePageChange(index + 1)}
            >
              {index + 1}
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};
