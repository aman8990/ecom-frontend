import { useQuery } from '@tanstack/react-query';
import { getUsersQueries } from '../../services/apiUser';
import React from 'react';

export function useUsersQueries() {
  const [interval, setInterval] = React.useState(false);

  const {
    data: usersQueries,
    isLoading,
    error,
  } = useQuery({
    queryFn: () => getUsersQueries(),
    queryKey: ['usersQueries'],
    staleTime: 5 * 60 * 1000,
    refetchInterval: interval ? 10000 : false,
    retry: false,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
  });

  React.useEffect(() => {
    if (error) {
      console.error('Error in fetching queries');
      setInterval(true);
    } else if (!isLoading) {
      setInterval(false);
    }
  }, [isLoading, error]);

  return { usersQueries, isLoading, error };
}
