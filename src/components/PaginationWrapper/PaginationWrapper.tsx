import { IPaginationProps } from "../../interfaces";
import { Pagination } from "../Pagination/Pagination";

interface PaginationWrapperProps {
  top?:boolean;
  bottom?:boolean;
  children: React.ReactNode
  
}


export const PaginationWrapper = ({top, bottom, children, ...paginationProps}:PaginationWrapperProps & IPaginationProps) => {
  return (
    <>
      {top && <Pagination {...paginationProps} />}
      {children}
      {bottom && <Pagination {...paginationProps} />}
    </>
  );
};


