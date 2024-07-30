import { useQuery } from '@tanstack/react-query';
import { getPendingOrders } from '../../services/apiOrders';
import React from 'react';

export function usePendingOrders() {
  const [interval, setInterval] = React.useState(false);

  const {
    data: pendingOrders,
    isLoading,
    error,
  } = useQuery({
    queryFn: () => getPendingOrders(),
    queryKey: ['pendingOrders'],
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

  return { pendingOrders, isLoading, error };
}
