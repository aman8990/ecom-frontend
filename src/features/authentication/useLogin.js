import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { login as loginAPI } from '../../services/apiAuth';
import toast from 'react-hot-toast';
import { useAddItemToCart } from '../products/useAddItemToCart';

export function useLogin() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { addItemToCart } = useAddItemToCart();

  const { mutate: login, isPending } = useMutation({
    mutationFn: ({ email, password }) => loginAPI({ email, password }),
    onSuccess: (response) => {
      queryClient.setQueryData(['user'], response.data.data.user);
      navigate('/account', { replace: true });

      const localCart = JSON.parse(localStorage.getItem('cart')) || [];

      localCart.forEach((item) => {
        addItemToCart({ id: item.productId._id, quantity: item.quantity });
      });

      localStorage.removeItem('cart');
    },

    onError: (error) => {
      toast.dismiss();
      const errorMessage = error.response?.data?.message;

      toast.error(errorMessage);
    },
  });

  return { login, isPending };
}
