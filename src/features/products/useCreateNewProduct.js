import toast from 'react-hot-toast';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { createNewProduct as createNewProductAPI } from '../../services/apiProducts';

export function useCreateNewProduct() {
  const queryClient = useQueryClient();

  const {
    data: newProduct,
    isPending,
    mutate: createNewProduct,
  } = useMutation({
    mutationFn: (data) => createNewProductAPI(data),
    onSuccess: (response) => {
      queryClient.setQueryData(['newProduct'], response);

      toast.dismiss();
      toast.success(`New Product Added with Id(${response._id})`);
    },

    onError: () => {
      toast.error('Error in creating product');
    },
  });

  return { isPending, createNewProduct, newProduct };
}
