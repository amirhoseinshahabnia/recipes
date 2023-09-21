import useSWR from 'swr';

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export const useFetch = (url: string) => {
  const { data, error, isLoading } = useSWR(url, fetcher);

  return {
    data,
    error,
    isLoading,
  };
};
