import toast from 'react-hot-toast';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { updateProduct as updateProductAPI } from '../../services/apiProducts';

export function useUpdateProduct() {
  const queryClient = useQueryClient();

  const {
    data: updatedProduct,
    isPending,
    mutate: updateProduct,
  } = useMutation({
    mutationFn: ({ id, data }) => updateProductAPI({ id, data }),
    onSuccess: (response) => {
      queryClient.setQueryData(['updatedProduct'], response);

      toast.dismiss();
      toast.success('Product Updated');
    },

    onError: () => {
      toast.dismiss();
      toast.error('No product found');
    },
  });

  return { isPending, updateProduct, updatedProduct };
}
