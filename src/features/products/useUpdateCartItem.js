import { useMutation, useQueryClient } from '@tanstack/react-query';
import { updateCartItem as updateCartItemAPI } from '../../services/apiCart';
import toast from 'react-hot-toast';

export function useUpdateCartItem() {
  const queryClient = useQueryClient();

  const { isPending, mutate: updateCartItem } = useMutation({
    mutationFn: ({ productId, quantity }) =>
      updateCartItemAPI({ productId, quantity }),
    onSuccess: (response) => {
      queryClient.setQueryData(['cart'], response);

      toast.dismiss();
      toast.success('Product quantity updated successfully');
    },

    onError: () => {
      toast.dismiss();
      toast.error('Not able to update quantity');
    },
  });

  return { isPending, updateCartItem };
}
