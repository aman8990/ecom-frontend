import { useMutation, useQueryClient } from '@tanstack/react-query';
import { deleteCartItem as deleteCartItemAPI } from '../../services/apiCart';
import toast from 'react-hot-toast';

export function useDeleteCartItem() {
  const queryClient = useQueryClient();

  const { isPending, mutate: deleteCartItem } = useMutation({
    mutationFn: ({ productId }) => deleteCartItemAPI({ productId }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['cart'] });

      toast.dismiss();
      toast.success('Item removed successfully');
    },

    onError: () => {
      toast.dismiss();
      toast.error('No able to remove item');
    },
  });

  return { deleteCartItem, isPending };
}
