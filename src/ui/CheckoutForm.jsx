import React, { useEffect, useState } from 'react';
import {
  CardNumberElement,
  CardExpiryElement,
  CardCvcElement,
  useStripe,
  useElements,
} from '@stripe/react-stripe-js';
import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import CheckoutCartInfo from './CheckoutCartInfo';
import { useAuth } from '../features/authentication/useAuth';
import Spinner from './Spinner';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  @media (min-width: 0px) {
    margin: 0.2rem;
    flex-direction: column;
    gap: 2rem;
  }

  @media (min-width: 1024px) {
    margin-top: 1rem;
    margin-bottom: 2rem;
    margin-right: 2rem;
    margin-left: 2rem;
    flex-direction: row;
    gap: 5rem;
  }
`;

const StyledInput = styled.input`
  border: 1px solid #ccc;
  padding: 10px;
  border-radius: 4px;
  font-size: 16px;
  color: #333;
  background-color: #fff;
  width: 100%;
  outline: none;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  background: #fff;
  padding: 40px;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);

  @media (min-width: 400px) {
    width: 350px;
  }

  @media (min-width: 600px) {
    width: 400px;
  }
`;

const StyledCardElement = styled.div`
  border: 1px solid #ccc;
  padding: 10px;
  border-radius: 4px;
  font-size: 16px;
  color: #333;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  .StripeElement {
    width: 100%;
    background-color: transparent;
  }

  ::placeholder {
    color: #999;
  }

  :-webkit-autofill {
    -webkit-box-shadow: 0 0 0 30px white inset;
    -webkit-text-fill-color: #333;
    transition: background-color 500ms ease-in-out;
  }

  &:focus-within {
    outline: none;
    box-shadow: 0 0 0 3px #007bff;
  }
`;

const Button = styled.button`
  background-color: #007bff;
  color: #fff;
  border: none;
  padding: 12px 20px;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
  &:hover {
    background-color: #0056b3;
  }
  &:disabled {
    background-color: #cccccc;
  }
`;

const CheckoutForm = () => {
  const { isAuthenticated, isLoading: isAuthenticating } = useAuth();
  const [address, setAddress] = useState({
    line1: '',
    city: '',
    state: '',
    postal_code: '',
    country: 'IN',
  });

  const stripe = useStripe();
  const elements = useElements();
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const { clientSecret, cart, orderAddress } = location.state || {};

  useEffect(() => {
    if (orderAddress) {
      setAddress({
        line1: orderAddress.locality || '',
        city: orderAddress.city || '',
        state: orderAddress.state || '',
        postal_code: orderAddress.pincode || '',
        country: orderAddress.country || 'IN',
      });
    }
  }, [orderAddress]);

  async function handleSubmit(e) {
    e.preventDefault();

    if (isLoading) return;

    setIsLoading(true);

    if (!stripe || !elements) {
      setIsLoading(false);
      return;
    }

    const cardNumberElement = elements.getElement(CardNumberElement);
    const billingDetails = {
      name,
      email,
      address,
    };

    try {
      const { error, paymentIntent } = await stripe.confirmCardPayment(
        clientSecret,
        {
          payment_method: {
            card: cardNumberElement,
            billing_details: billingDetails,
          },
        },
      );

      if (error) {
        console.error('Payment failed:', error);
        navigate('/failure');
      } else if (paymentIntent.status === 'succeeded') {
        await axios.post('http://localhost:8000/api/users/stripe/verify', {
          paymentIntentId: paymentIntent.id,
          status: paymentIntent.status,
        });
        console.log('Payment successful!');
        navigate('/success');
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }

  if (isAuthenticating) return <Spinner />;
  if (!isAuthenticated)
    return (
      <h1 className="mt-10 flex justify-center text-5xl font-semibold text-stone-600">
        Please login to complete payment
      </h1>
    );

  return (
    <Container>
      <CheckoutCartInfo cart={cart} />
      <Form onSubmit={handleSubmit}>
        <div>
          <label>Name on card</label>
          <StyledInput
            type="text"
            placeholder="Aman"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div>
          <label>Email</label>
          <StyledInput
            type="email"
            placeholder="abc@xyz.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div>
          <label>Card Number</label>
          <StyledCardElement>
            <CardNumberElement
              options={{ placeholder: '1234 1234 1234 1234' }}
            />
          </StyledCardElement>
        </div>

        <div>
          <label>Expiration Date</label>
          <StyledCardElement>
            <CardExpiryElement options={{ placeholder: 'MM / YY' }} />
          </StyledCardElement>
        </div>

        <div>
          <label>CVC</label>
          <StyledCardElement>
            <CardCvcElement options={{ placeholder: 'CVC' }} />
          </StyledCardElement>
        </div>

        <Button type="submit" disabled={!stripe || isLoading}>
          {isLoading ? 'Processing...' : 'Pay'}
        </Button>
      </Form>
    </Container>
  );
};

export default CheckoutForm;
