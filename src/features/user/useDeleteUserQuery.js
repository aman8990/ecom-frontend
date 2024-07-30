import { toast } from 'react-hot-toast';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { deleteUserQuery as deleteUserQueryAPI } from '../../services/apiUser';

export function useDeleteUserQuery() {
  const queryClient = useQueryClient();

  const {
    isPending,
    mutate: deleteUserQuery,
    isSuccess,
  } = useMutation({
    mutationFn: ({ id }) => deleteUserQueryAPI({ id }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['usersQueries'] });
    },

    onError: (error) => {
      toast.dismiss();
      const errorMessage = error.response?.data?.message;
      toast.error(errorMessage);
    },
  });

  return { deleteUserQuery, isPending, isSuccess };
}
