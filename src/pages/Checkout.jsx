import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from '../ui/CheckoutForm';

const stripePromise = loadStripe(
  'pk_test_51OdJU4SG7m4hPidsGQlz2nraWLKAuYNilxDA35DYRFqnjHTpC63qZZv067MMqV8fvWZipqOLMxdPPkPJGPvZc1aW00tKeLB25M',
);

function Checkout() {
  return (
    <Elements stripe={stripePromise}>
      <CheckoutForm />
    </Elements>
  );
}

export default Checkout;
