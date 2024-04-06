import { useAppDispatch } from "@/app/appStore";
import { setFilters } from "@/entities/news/model/newsSlice";
import { TOTAL_PAGE } from "@/shared/constants/constants";
import { IFilters } from "@/shared/interfaces";

export const usePainationNews = (filters: IFilters) => {
  const dispath = useAppDispatch();

  const handleNextPage = () => {
    if (filters.page_number < TOTAL_PAGE) {
      dispath(
        setFilters({ key: "page_number", value: filters.page_number + 1 })
      );
    }
  };

  const handlePreviousPage = () => {
    if (filters.page_number > 1) {
      dispath(
        setFilters({ key: "page_number", value: filters.page_number - 1 })
      );
    }
  };

  const handlePageClick = (pageNumber: number) => {
    dispath(setFilters({ key: "page_number", value: pageNumber }));
  };
  return { handleNextPage, handlePreviousPage, handlePageClick };
};
