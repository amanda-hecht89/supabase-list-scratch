import React from 'react';

export default function Pagination({ currentPage, lastPage, setCurrentPage, }) {
  return (
    <div className='pagination'>
      <p>current endagered page is {currentPage + 0}</p>
      <button disabled={currentPage <= 0} onClick={() => setCurrentPage(currentPage - 1)}>Prev Page</button>
      <button disabled={currentPage >= lastPage} onClick={() => setCurrentPage(currentPage + 1)}>Next Page</button>
    </div>
  );
}
