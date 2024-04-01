import { IPaginationProps } from "../../model/types";
import { PaginationButtons } from "../PaginationButtons/PaginationButtons";


interface PaginationWrapperProps {
  top?: boolean;
  bottom?: boolean;
  children: React.ReactNode;
}

export const Pagination = ({
  top,
  bottom,
  children,
  ...paginationProps
}: PaginationWrapperProps & IPaginationProps) => {
  return (
    <>
      {top && <PaginationButtons {...paginationProps} />}
      {children}
      {bottom && <PaginationButtons {...paginationProps} />}
    </>
  );
};
