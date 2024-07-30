import { useMutation, useQueryClient } from '@tanstack/react-query';
import { addItemToCart as addItemToCartAPI } from '../../services/apiCart';
import toast from 'react-hot-toast';

export function useAddItemToCart() {
  const queryClient = useQueryClient();

  const { isPending, mutate: addItemToCart } = useMutation({
    mutationFn: ({ id, quantity }) => addItemToCartAPI({ id, quantity }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['cart'] });
      toast.dismiss();
      toast.success('Item added to cart');
    },
    onError: () => {
      toast.dismiss();
      toast.error('Not able to add item to cart');
    },
  });

  return { isPending, addItemToCart };
}
