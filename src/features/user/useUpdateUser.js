import { useMutation, useQueryClient } from '@tanstack/react-query';
import { updateMe as updateMeAPI } from '../../services/apiUser';
import toast from 'react-hot-toast';

export function useUpdateUser() {
  const queryClient = useQueryClient();

  const { isPending, mutate: updateMe } = useMutation({
    mutationFn: (userData) => updateMeAPI(userData),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['user'] });

      toast.dismiss();
      toast.success('User updated');
    },

    onError: (error) => {
      toast.dismiss();
      toast.error('Error in updating user');
    },
  });

  return { updateMe, isPending };
}
