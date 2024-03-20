import React from "react";

export const useFetch = (fetchFunction, params) => {
  const [data, setData] = React.useState(null);
  const [isLoading,setIsLoading] = React.useState(true)
  const [error, setError] = React.useState(null)

  const paramsToString = params ? new URLSearchParams(params).toString() : ''  // params это объект и так как строки сравнивать легче

  React.useEffect(() => {
    ( async() => {
        try {
            setIsLoading(true)
            const res = await fetchFunction(params);
            setData(res)
        } catch (error) {
            setError(error)
        }finally{
            setIsLoading(false)
        }
    })()
  },[fetchFunction, paramsToString])
  return {data, isLoading, error}
};

