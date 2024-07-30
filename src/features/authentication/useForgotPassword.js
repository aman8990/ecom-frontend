import { useMutation } from '@tanstack/react-query';

import { forgotPassword as forgotPasswordAPI } from '../../services/apiAuth';
import toast from 'react-hot-toast';

export function useForgotPassword() {
  const { isPending, mutate: forgotPassword } = useMutation({
    mutationFn: ({ email }) => forgotPasswordAPI({ email }),
    onSuccess: (response) => {
      toast.dismiss();
      const successMessage = response?.data?.message;
      toast.success(successMessage);
    },

    onError: (error) => {
      toast.dismiss();
      const errorMessage = error.response?.data?.message;
      toast.error(errorMessage);
    },
  });

  return { forgotPassword, isPending };
}
