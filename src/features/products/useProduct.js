import { useQuery } from '@tanstack/react-query';
import { getProduct } from '../../services/apiProducts';
import React from 'react';

export function useProduct({ id }) {
  const [interval, setInterval] = React.useState(false);

  const {
    data: product,
    isLoading,
    error,
  } = useQuery({
    queryFn: () => getProduct({ id }),
    queryKey: ['product', id],
    staleTime: 30 * 60 * 1000,
    retry: false,
    refetchInterval: interval ? 20000 : false,
    retryOnMount: false,
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
  });

  React.useEffect(() => {
    if (error) {
      console.error('Error in fetching products');
      setInterval(true);
    } else if (!isLoading) {
      setInterval(false);
    }
  }, [isLoading, error]);

  return { product, isLoading, error };
}
