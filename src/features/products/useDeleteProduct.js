import toast from 'react-hot-toast';
import { useMutation } from '@tanstack/react-query';
import { deleteProduct as deleteProductAPI } from '../../services/apiProducts';

export function useDeleteProduct() {
  const {
    isPending,
    mutate: deleteProduct,
    onSuccess,
    isSuccess,
    isError,
  } = useMutation({
    mutationFn: ({ id }) => deleteProductAPI({ id }),
    onSuccess: () => {
      toast.dismiss();
      toast.success('Product deleted successfully');
    },

    onError: () => {
      toast.dismiss();
      toast.error('Error in deleting product');
    },
  });

  return { isPending, deleteProduct, onSuccess, isSuccess, isError };
}
