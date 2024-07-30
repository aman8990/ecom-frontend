import { useQuery } from '@tanstack/react-query';
import { getCart } from './../../services/apiCart';
import React from 'react';

export function useCart() {
  const [interval, setInterval] = React.useState(false);

  const {
    data: serverCart,
    isLoading,
    error,
  } = useQuery({
    queryKey: ['cart'],
    queryFn: getCart,
    staleTime: 3 * 60 * 1000,
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

  const localCart = JSON.parse(localStorage.getItem('cart')) || [];

  const cart = serverCart ? serverCart : { cartItems: localCart };

  return { cart, isLoading, error };
}
