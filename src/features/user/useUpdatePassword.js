import toast from 'react-hot-toast';
import { useMutation } from '@tanstack/react-query';
import { updatePassword as updatePasswordAPI } from '../../services/apiUser';

export function useUpdatePassword() {
  const {
    isPending,
    mutate: updatePassword,
    onSuccess,
  } = useMutation({
    mutationFn: ({ passwordCurrent, password }) =>
      updatePasswordAPI({ passwordCurrent, password }),
    onSuccess: () => {
      toast.dismiss();
      toast.success('Password successfully updated');
    },

    onError: () => {
      toast.dismiss();
      toast.error('Error in updating password');
    },
  });

  return { updatePassword, isPending, onSuccess };
}
