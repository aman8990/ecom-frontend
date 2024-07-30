import { useMutation, useQueryClient } from '@tanstack/react-query';
import { deleteLocalCartItem as deleteLocalCartItemAPI } from '../../services/apiCart';
import toast from 'react-hot-toast';

export function useDeleteLocalCartItem() {
  const queryClient = useQueryClient();

  const { isPending, mutate: deleteLocalCartItem } = useMutation({
    mutationFn: (productId) => deleteLocalCartItemAPI(productId),
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

  return { deleteLocalCartItem, isPending };
}
