import { useMutation, useQueryClient } from '@tanstack/react-query';
import { getProduct as getProductAPI } from '../../services/apiProducts';
import toast from 'react-hot-toast';

export function useGetProduct() {
  const queryClient = useQueryClient();

  const {
    data: product,
    isPending,
    mutate: getProduct,
  } = useMutation({
    mutationFn: ({ id }) => getProductAPI({ id }),
    onSuccess: (response) => {
      queryClient.setQueryData(['product'], response);
      console.log('Product Fetched');
    },

    onError: () => {
      toast.dismiss();
      toast.error('No product found');
    },
  });

  return { isPending, getProduct, product };
}
