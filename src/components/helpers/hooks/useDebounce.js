import { useEffect, useState } from "react";

export const useDebounce = (value, delay) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setDebouncedValue(value);

      return () => clearTimeout(timeout);
    }, delay);
  }, [value, delay]);

  return debouncedValue;
};
