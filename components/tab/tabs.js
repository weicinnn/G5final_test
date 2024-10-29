import React from 'react';

export default function Pagination({ currentPage, totalPages, onPageChange }) {
  const pages = [];

  for (let i = 1; i <= totalPages; i++) {
    pages.push(
      <li key={i} className={`page-item ${currentPage === i ? 'active' : ''}`}>
        <a
          className="page-link"
          href="#"
          onClick={() => onPageChange((i - 1) * 5)}
        >
          {i}
        </a>
      </li>
    );
  }

  return (
    <nav aria-label="Page navigation">
      <ul className="pagination m-0">
        <li className="page-item">
          <a
            className="page-link"
            href="#"
            onClick={() => onPageChange((currentPage - 2) * 5)}
            aria-label="Previous"
            disabled={currentPage === 1}
          >
            <span aria-hidden="true">‹</span>
          </a>
        </li>
        {pages}
        <li className="page-item">
          <a
            className="page-link"
            href="#"
            onClick={() => onPageChange(currentPage * 5)}
            aria-label="Next"
            disabled={currentPage === totalPages}
          >
            <span aria-hidden="true">›</span>
          </a>
        </li>
      </ul>
    </nav>
  );
}
