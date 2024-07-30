import { toast } from 'react-hot-toast';
import { useMutation } from '@tanstack/react-query';
import { verifyToken as verifyTokenAPI } from '../../services/apiAuth';

export function useVerifyToken() {
  const {
    mutate: verifyToken,
    isPending,
    isError,
    isSuccess,
  } = useMutation({
    mutationFn: ({ token }) => verifyTokenAPI({ token }),
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

  return { verifyToken, isPending, isError, isSuccess };
}
