import { useQuery } from '@tanstack/react-query';
import { getAllOrders } from '../../services/apiOrders';
import React from 'react';

export function useAllOrders() {
  const [interval, setInterval] = React.useState(false);

  const {
    data: allOrders,
    isLoading,
    error,
  } = useQuery({
    queryFn: () => getAllOrders(),
    queryKey: ['allOrders'],
    staleTime: 5 * 60 * 1000,
    refetchInterval: interval ? 10000 : false,
    retry: false,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
  });

  React.useEffect(() => {
    if (error) {
      console.error('Error in fetching products');
      setInterval(true);
    } else if (!isLoading) {
      setInterval(false);
    }
  }, [isLoading, error]);

  return { allOrders, isLoading, error };
}
