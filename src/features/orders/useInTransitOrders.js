import { useQuery } from '@tanstack/react-query';
import { getInTransitOrders } from '../../services/apiOrders';
import React from 'react';

export function useInTransitOrders() {
  const [interval, setInterval] = React.useState(false);

  const {
    data: inTransitOrders,
    isLoading,
    error,
  } = useQuery({
    queryFn: () => getInTransitOrders(),
    queryKey: ['inTransitOrders'],
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

  return { inTransitOrders, isLoading, error };
}
