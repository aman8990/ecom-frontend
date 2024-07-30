import React from 'react';
import { getProducts } from './../../services/apiProducts';
import { useQuery } from '@tanstack/react-query';

export function useProducts() {
  const [interval, setInterval] = React.useState(false);

  const {
    isLoading,
    data: products,
    error,
  } = useQuery({
    queryFn: getProducts,
    queryKey: ['products'],
    staleTime: 30 * 60 * 1000,
    refetchInterval: interval ? 20000 : false,
    retry: false,
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

  return { isLoading, products, error };
}
