import { toast } from 'react-hot-toast';
import { useMutation } from '@tanstack/react-query';
import { contactUs as contactUsAPI } from '../../services/apiUser';

export function useContactUs() {
  const {
    isPending,
    mutate: contactUs,
    onSuccess,
  } = useMutation({
    mutationFn: (data) => contactUsAPI(data),
    onSuccess: (response) => {
      toast.dismiss();
      toast.success('Info sent, We will contact you');
    },

    onError: () => {
      toast.dismiss();
      toast.error('Error in sending info');
    },
  });

  return { contactUs, isPending, onSuccess };
}
