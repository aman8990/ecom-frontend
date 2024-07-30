import { toast } from 'react-hot-toast';
import { useMutation } from '@tanstack/react-query';
import { resetPassword as resetPasswordAPI } from '../../services/apiAuth';
import { useNavigate } from 'react-router-dom';

export function useResetPassword() {
  const navigate = useNavigate();

  const {
    mutate: resetPassword,
    isPending,
    isError,
    isSuccess,
  } = useMutation({
    mutationFn: ({ token, password }) => resetPasswordAPI({ token, password }),
    onSuccess: (response) => {
      toast.dismiss();
      toast.success('Password changed successfully');

      setTimeout(() => {
        navigate('/');
      }, 5000);
    },

    onError: (error) => {
      toast.dismiss();
      const errorMessage = error.response?.data?.message;
      toast.error(errorMessage);
    },
  });

  return { resetPassword, isPending, isError, isSuccess };
}
