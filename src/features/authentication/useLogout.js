import { useMutation, useQueryClient } from '@tanstack/react-query';
import { logout as logoutAPI } from '../../services/apiAuth';

export function useLogout() {
  const queryClient = useQueryClient();

  const { mutate: logout } = useMutation({
    mutationFn: logoutAPI,
    onSuccess: () => {
      queryClient.invalidateQueries(['user'], { exact: true });
      queryClient.refetchQueries(['user']);
      // window.location.reload();
    },
  });
  return { logout };
}
