import React from 'react';

import style from './styles.module.css';
const TablaPaginacion = ({ onPageChange, currentPage }) => {
  const handlePageChange = (page) => {
    onPageChange(page);
  };

  const pages = [];
  const maxVisiblePages = 5; // Número máximo de páginas visibles

  const totalPages = Math.ceil(100 / 15);

  // Lógica para generar las páginas de la paginación
  for (let i = 1; i <= totalPages; i++) {
    pages.push(
      <li
        key={i}
        className={`${style.pageItem} ${
          i === currentPage ? style.active : ''
        }`}
      >
        <button
          className={style.pageLink}
          onClick={() => handlePageChange(i)}
        >
          {i}
        </button>
      </li>
    );
  }

  return (
    <nav aria-label="...">
      <ul className={style.pagination}>
        <li
          className={`${style.pageItem} ${
            currentPage === 1 ? style.disabled : ''
          }`}
        >
          <button
            className={style.pageLink}
            onClick={() => handlePageChange(currentPage - 1)}
          >
            Previous
          </button>
        </li>
        {pages}
        <li
          className={`${style.pageItem} ${
            currentPage === totalPages ? style.disabled : ''
          }`}
        >
          <button
            className={style.pageLink}
            onClick={() => handlePageChange(currentPage + 1)}
          >
            Next
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default TablaPaginacion;