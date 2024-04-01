
export interface IPaginationProps {
    totalPage: number;
    currentPage: number;
    handlenextPage: () => void;
    handlePreviousPage: () => void;
    handlePageClick: (pageNumber: number) => void;
  }