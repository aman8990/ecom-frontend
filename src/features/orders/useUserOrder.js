import { useQuery } from '@tanstack/react-query';
import { getUserOrder } from '../../services/apiOrders';
import React from 'react';

export function useUserOrder({ id }) {
  const [interval, setInterval] = React.useState(false);

  const {
    data: userOrder,
    isLoading,
    error,
  } = useQuery({
    queryFn: () => getUserOrder({ id }),
    queryKey: ['userOrder', id],
    staleTime: 5 * 60 * 1000,
    refetchInterval: interval ? 10000 : false,
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

  return { userOrder, isLoading, error };
}
