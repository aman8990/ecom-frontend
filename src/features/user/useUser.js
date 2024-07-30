import toast from 'react-hot-toast';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { getUser as getUserAPI } from '../../services/apiUser';

export function useUser() {
  const queryClient = useQueryClient();

  const {
    isPending,
    mutate: getUser,
    data: user,
    onSuccess,
  } = useMutation({
    mutationFn: ({ id }) => getUserAPI({ id }),
    onSuccess: (response) => {
      queryClient.setQueryData(['getUser'], response);
    },

    onError: () => {
      toast.dismiss();
      toast.error('User not found');
    },
  });

  return { getUser, user, isPending, onSuccess };
}
