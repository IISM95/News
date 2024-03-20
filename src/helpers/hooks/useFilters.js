import React from "react";

export const useFilter = (initialFilters) => {
    const [filters, setFilters] = React.useState(initialFilters);
    
      const changeFilter = (key, value) => {
        setFilters((prev) => ({ ...prev, [key]: value }));
      };
    return {filters, changeFilter}
}