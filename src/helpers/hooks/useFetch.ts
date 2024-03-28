import React from "react";

interface FetchFunction<P, T> {
  (params?: P): Promise<T>;
}

interface UseFetchResult<T> {
  data: T | null | undefined;
  isLoading: boolean;
  error: Error | null;
}

export const useFetch = <T, P>(fetchFunction: FetchFunction<P, T>,params?: P): UseFetchResult<T> => {
  const [data, setData] = React.useState<T | null>(null);
  const [isLoading, setIsLoading] = React.useState(true);
  const [error, setError] = React.useState<Error | null>(null);

  const paramsToString = params ? new URLSearchParams(params).toString() : ""; // params это объект и так как строки сравнивать легче

  React.useEffect(() => {
    (async () => {
      try {
        setIsLoading(true);
        const res = await fetchFunction(params);
        setData(res);
      } catch (error) {
        setError(error as Error);
      } finally {
        setIsLoading(false);
      }
    })();
  }, [fetchFunction, paramsToString]);
  return { data, isLoading, error };
};
