import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { verifyEmail as verifyEmailAPI } from '../../services/apiAuth';

export function useVerifyEmail() {
  const navigate = useNavigate();

  const {
    mutate: verifyEmail,
    isPending,
    isError,
    isSuccess,
  } = useMutation({
    mutationFn: ({ token }) => verifyEmailAPI({ token }),
    onSuccess: (response) => {
      setTimeout(() => {
        navigate('/');
      }, 5000);
    },

    onError: (err) => console.log('ERROR'),
  });

  return { verifyEmail, isPending, isError, isSuccess };
}
