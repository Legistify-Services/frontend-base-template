import React from "react";
import ReactPaginate from "react-paginate";

const CustomPagination = (currentPage, totalPage, handlePagination) => {
  return (
    <ReactPaginate
      previousLabel={""}
      nextLabel={""}
      forcePage={currentPage}
      onPageChange={(page) => handlePagination(page)}
      pageCount={totalPage}
      breakLabel={"..."}
      pageRangeDisplayed={2}
      marginPagesDisplayed={2}
      activeClassName="active"
      pageClassName="page-item"
      breakClassName="page-item"
      nextLinkClassName="page-link"
      pageLinkClassName="page-link"
      breakLinkClassName="page-link"
      previousLinkClassName="page-link"
      nextClassName="page-item next-item"
      previousClassName="page-item prev-item"
      containerClassName={
        "pagination react-paginate separated-pagination pagination-sm justify-content-end pe-1"
      }
    />
  );
};

export default CustomPagination;
