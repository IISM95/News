import React from "react";
import { IFilters } from "../../interfaces";

export const useFilter = (initialFilters:IFilters) => {
    const [filters, setFilters] = React.useState<IFilters>(initialFilters);

      const changeFilter = (key:string, value:number | string | null) => {
        setFilters((prev) => ({ ...prev, [key]: value }));
      };
    return {filters, changeFilter}
}