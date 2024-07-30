import { useQuery } from '@tanstack/react-query';
import { getAllUsers } from '../../services/apiUser';
import React from 'react';

export function useAllUsers() {
  const [interval, setInterval] = React.useState(false);

  const {
    data: allUsers,
    isLoading,
    error,
  } = useQuery({
    queryFn: (page, limit) => getAllUsers(page, limit),
    queryKey: ['allUsers'],
    staleTime: 5 * 60 * 1000,
    refetchInterval: interval ? 10000 : false,
    retry: false,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
  });

  React.useEffect(() => {
    if (error) {
      console.error('Error in fetching users');
      setInterval(true);
    } else if (!isLoading) {
      setInterval(false);
    }
  }, [isLoading, error]);

  return { allUsers, isLoading, error };
}
