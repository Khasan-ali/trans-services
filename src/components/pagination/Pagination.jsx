import './styles.module.css'

import ReactPaginate from "react-paginate";

export default function Pagination({handlePageClick, pageCount}) {
       return (
              <ReactPaginate
                     nextLabel=">"
                     previousLabel="<"
                     breakLabel="..."
                     pageCount={pageCount}
                     className="paginate"
                     activeClassName="active"
                     pageRangeDisplayed={3}
                     onPageChange={handlePageClick}
                     renderOnZeroPageCount={null}
              />
       )
}