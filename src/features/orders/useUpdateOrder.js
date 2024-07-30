import { useMutation, useQueryClient } from '@tanstack/react-query';
import { updateOrder as updateOrderAPI } from '../../services/apiOrders';

export function useUpdateOrder() {
  const queryClient = useQueryClient();

  const {
    mutate: updateOrder,
    data: newOrder,
    isPending,
    isSuccess,
  } = useMutation({
    mutationFn: (data) => updateOrderAPI(data),
    onSuccess: (response) => {
      queryClient.invalidateQueries();
      queryClient.setQueryData(['order'], response);
    },
  });

  return { updateOrder, isPending, isSuccess, newOrder };
}
