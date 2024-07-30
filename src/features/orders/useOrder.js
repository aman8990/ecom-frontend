import toast from 'react-hot-toast';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { getOrder as getOrderAPI } from '../../services/apiOrders';

export function useOrder() {
  const queryClient = useQueryClient();

  const {
    mutate: getOrder,
    data: order,
    isPending,
    isSuccess,
  } = useMutation({
    mutationFn: (data) => getOrderAPI(data),
    onSuccess: (response) => {
      queryClient.setQueryData(['getOrder'], response);
    },

    onError: () => {
      toast.dismiss();
      toast.error('No Order Found');
      console.log('ERROR Use');
    },
  });

  return { getOrder, order, isPending, isSuccess };
}
