import React from 'react';

import '../styles/pages.css'

const maxItems = 9;
const maxLeft = (maxItems - 1) / 2;

export function Pages ({ limit, total, offset, setOffset })  {

  const currentPage = offset ? (offset / limit) + 1 : 1;
  const pages = Math.ceil(total / limit);
  const first = Math.max(currentPage - maxLeft, 1);

  return (
    <ul className="pages">
      {Array.from({ length: Math.min(maxItems, pages) })
        .map((_, index) => index + first) //Transfomar o array de underfined em um array de páginas
        .map((page) => (
          <li key={page}>
            <button className={page === currentPage ? 'pages__item--active' : null}  
            onClick={() => setOffset((page - 1) * limit)}>
              {page}
            </button>
          </li>
        ))}
      </ul>
    );
}

export default Pages;