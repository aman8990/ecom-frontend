import { useQuery } from '@tanstack/react-query';
import { checkAuth } from '../../services/apiAuth';

export function useAuth() {
  const {
    data: user,
    isLoading,
    error,
    isSuccess,
  } = useQuery({
    queryKey: ['user'],
    queryFn: checkAuth,
    staleTime: 5 * 60 * 1000,
    retry: false,
    retryOnMount: false,
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
  });

  const isAuthenticated = isSuccess
    ? user?.role === 'user' || user?.role === 'admin'
    : false;

  return {
    user,
    isLoading,
    error,
    isAuthenticated,
  };
}
