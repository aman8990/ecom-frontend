import { useMutation } from '@tanstack/react-query';
import { signup as signupAPI } from '../../services/apiAuth';
import toast from 'react-hot-toast';

export function useSignup() {
  const {
    isPending,
    mutate: signup,
    onSuccess,
  } = useMutation({
    mutationFn: (userData) => signupAPI(userData),
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

  return { signup, isPending, onSuccess };
}
