import { useQuery } from '@tanstack/react-query';
import { getUserOrders } from '../../services/apiOrders';
import React from 'react';

export function useUserOrders() {
  const [interval, setInterval] = React.useState(false);

  const {
    data: userOrders,
    isLoading,
    error,
  } = useQuery({
    queryFn: () => getUserOrders(),
    queryKey: ['userOrders'],
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

  return { userOrders, isLoading, error };
}
