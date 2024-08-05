import { useMutation, useQueryClient } from '@tanstack/react-query';
import { logout as logoutAPI } from '../../services/apiAuth';
import { useNavigate } from 'react-router-dom';

export function useLogout() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { mutate: logout, isSuccess } = useMutation({
    mutationFn: logoutAPI,
    onSuccess: () => {
      // queryClient.invalidateQueries(['user'], { exact: true });
      // queryClient.refetchQueries(['user']);
      queryClient.refetchQueries();
      navigate('/');
    },
  });
  return { logout, isSuccess };
}
