import React from 'react'

const Pagination = ({perPage , totalresults , paginate , currentPage}) => {
    const pageNumber = [];
for(let i =1; i<=Math.ceil(totalresults /perPage );i++){
pageNumber.push(i);
}


    return (  
        <div className="table-responsive">
       <nav className="Page navigation justify-content-end pagination-sm" aria-label="results">
         <ul className="pagination">
             {
                 pageNumber.map(number => (
                     <li key={number} className={number === currentPage ? "page-item active" : "page-item"}>
                         <a href="#!" className="page-link "
                         onClick={()=> paginate(number)}
                         >
                             {number}
                         </a>
                     </li>
                 ))
             }
         </ul>
       </nav>
       </div>
    );
}
 
export default Pagination;