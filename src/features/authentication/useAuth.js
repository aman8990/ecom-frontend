import { useQuery } from '@tanstack/react-query';
import { checkAuth } from '../../services/apiAuth';

export function useAuth() {
  const {
    data: user,
    isLoading,
    error,
    refetch,
  } = useQuery({
    queryKey: ['user'],
    queryFn: checkAuth,
    staleTime: 5 * 60 * 1000,
    retry: false,
    retryOnMount: false,
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
  });

  return {
    user,
    isLoading,
    refetch,
    error,
    isAuthenticated: user
      ? user?.role === 'user' || user?.role === 'admin'
      : false,
  };
}
