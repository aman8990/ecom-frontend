import { useMutation } from '@tanstack/react-query';
import { verifyCashfree as verifyCashfreeAPI } from '../../services/apiPayments';
import { useNavigate } from 'react-router-dom';

export function useVerifyCashfree() {
  const navigate = useNavigate();

  const { isPending, mutate: verifyCashfree } = useMutation({
    mutationFn: ({ cashfreeOrderId, userOrderId }) =>
      verifyCashfreeAPI({ cashfreeOrderId, userOrderId }),
    onSuccess: () => {
      navigate('/success');
    },

    onError: () => {
      navigate('/failure');
    },
  });

  return { isPending, verifyCashfree };
}
