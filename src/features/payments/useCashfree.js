import { useMutation } from '@tanstack/react-query';
import { getCashfree as getCashfreeAPI } from '../../services/apiPayments';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

export function useCashfree() {
  const navigate = useNavigate();
  const { isPending, mutate: getCashfree } = useMutation({
    mutationFn: () => getCashfreeAPI(),
    onSuccess: (response) => {
      if (response.data.paymentData.payment_session_id) {
        navigate('/cashfreeCheckout', {
          state: {
            paymentSessionId: response.data.paymentData.payment_session_id,
          },
        });
      } else {
        toast.error('Failed to get payment session ID');
      }
    },

    onError: () => {
      toast.dismiss();
      toast.error('Not able to process your request');
    },
  });

  return { isPending, getCashfree };
}
