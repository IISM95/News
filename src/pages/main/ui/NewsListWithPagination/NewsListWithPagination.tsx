import NewsList from "@/widgets/news/ui/NewsList/NewsList";
import { TOTAL_PAGE } from "@/shared/constants/constants";
import { Pagination } from "@/features/pagination";
import { IFilters } from "@/shared/interfaces";
import { INews } from "@/entities/news";
import { usePainationNews } from "../../utils/hooks/usePaginationNews";


type NewsListWithPaginationProps = {
  filters: IFilters;
  news: INews[];
  isLoading: boolean;
};

export const NewsListWithPagination = ({
  filters,
  news,
  isLoading,
}: NewsListWithPaginationProps) => {
  const { handleNextPage, handlePreviousPage, handlePageClick } = usePainationNews(filters);

  return (
    <Pagination
      top
      bottom
      handlePageClick={handlePageClick}
      handlePreviousPage={handlePreviousPage}
      handlenextPage={handleNextPage}
      totalPage={TOTAL_PAGE}
      currentPage={filters.page_number}
    >
      <NewsList
        direction="column"
        type="item"
        isLoading={isLoading}
        news={news}
      />
    </Pagination>
  );
};
