import { useMutation, useQueryClient } from '@tanstack/react-query';
import { addItemToLocalCart as addItemToLocalCartAPI } from '../../services/apiCart';
import toast from 'react-hot-toast';

export function useAddItemToLocalCart() {
  const queryClient = useQueryClient();

  const { isPending, mutate: addItemToLocalCart } = useMutation({
    mutationFn: (product) => addItemToLocalCartAPI(product),
    onSuccess: (response) => {
      queryClient.invalidateQueries({ queryKey: ['cart'] });
      toast.dismiss();
      toast.success(response.message);
    },
    onError: () => {
      toast.dismiss();
      toast.error('Not able to add item to cart');
    },
  });

  return { isPending, addItemToLocalCart };
}
