import { useMutation } from '@tanstack/react-query';
import { getPayment as getPaymentAPI } from '../../services/apiPayments';
import { useNavigate } from 'react-router-dom';

export function useStripe() {
  const navigate = useNavigate();

  const { isPending, mutate: getPayment } = useMutation({
    mutationFn: () => getPaymentAPI(),
    onSuccess: (response, cart) => {
      navigate('/checkout', {
        state: {
          clientSecret: response.clientSecret,
          cart,
          orderAddress: response.address,
        },
      });
    },
  });

  return { isPending, getPayment };
}
