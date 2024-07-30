import { useQuery } from '@tanstack/react-query';
import { getCancelledOrders } from '../../services/apiOrders';
import React from 'react';

export function useCancelledOrders() {
  const [interval, setInterval] = React.useState(false);

  const {
    data: cancelledOrders,
    isLoading,
    error,
  } = useQuery({
    queryFn: () => getCancelledOrders(),
    queryKey: ['cancelledOrders'],
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

  return { cancelledOrders, isLoading, error };
}
