import { useStripe } from '../features/payments/useStripe';
import { useCart } from './../features/products/useCart';
import CartItem from './CartItem';
import Spinner from './Spinner';
import { HiShoppingCart } from 'react-icons/hi';
import { formatIndianCurrency } from '../services/formatCurrency';
import SpinnerMini from './SpinnerMini';
import styled from 'styled-components';
import { useAuth } from '../features/authentication/useAuth';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { useCashfree } from '../features/payments/useCashfree';

const H1 = styled.h1`
  display: flex;
  justify-content: center;
  font-weight: 600;
  color: rgb(87 83 78);

  @media (min-width: 0px) {
    margin-top: 2rem;
    font-size: 1.3rem;
    line-height: 1;
  }

  @media (min-width: 400px) {
    margin-top: 2rem;
    font-size: 1.3rem;
    line-height: 1;
  }

  @media (min-width: 600px) {
    margin-top: 2rem;
    font-size: 1.3rem;
    line-height: 1;
  }

  @media (min-width: 768px) {
    margin-top: 5rem;
    font-size: 2rem;
    line-height: 1;
  }

  @media (min-width: 1024px) {
    font-size: 2rem;
    line-height: 1;
  }

  @media (min-width: 1280px) {
    font-size: 3rem;
    line-height: 1;
  }
`;

const Container = styled.div`
  margin: 1.25rem 0 2.5rem 0;
  /* flex-grow: 1; */
`;

const PageName = styled.div`
  display: flex;
  justify-content: center;
  line-height: 1;
  color: rgb(87 83 78);

  @media (min-width: 0px) {
    font-size: 1.8rem;
  }

  @media (min-width: 400px) {
    font-size: 2rem;
  }

  @media (min-width: 600px) {
    font-size: 2.5rem;
  }

  @media (min-width: 768px) {
    font-size: 3rem;
  }
`;

const ItemsContainer = styled.div`
  margin-top: 1rem;

  @media (min-width: 0px) {
    padding: 0.1rem 0.1rem;
  }

  @media (min-width: 400px) {
    padding: 1rem 1rem;
  }

  @media (min-width: 600px) {
    padding: 1.5rem 2rem;
  }

  @media (min-width: 768px) {
    padding: 1.5rem 4rem;
  }

  @media (min-width: 1024px) {
    padding: 1.5rem 6rem;
  }

  @media (min-width: 1280px) {
    padding: 1.5rem 13rem;
  }
`;

const PriceContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const PriceContainer1 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.75rem;

  @media (min-width: 0px) {
    padding: 0 1rem;
  }

  @media (min-width: 400px) {
    padding: 0 4rem;
  }

  @media (min-width: 600px) {
    padding: 0 8rem;
  }

  @media (min-width: 768px) {
    padding: 0 13rem;
  }
`;

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  font-weight: 600;
  background-color: rgb(22 163 74);
  border-radius: 0.5rem;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: rgb(18, 147, 67);
  }

  @media (min-width: 0px) {
    height: 2.3rem;
    width: 11.4rem;
    font-size: 1.1rem;
    line-height: 2.25rem;
  }

  @media (min-width: 400px) {
    height: 2.3rem;
    width: 11.4rem;
    font-size: 1.1rem;
    line-height: 2.25rem;
  }

  @media (min-width: 600px) {
    height: 2.5rem;
    width: 13rem;
    font-size: 1.2rem;
    line-height: 2.25rem;
  }

  @media (min-width: 768px) {
    height: 3rem;
    width: 16rem;
    font-size: 1.5rem;
    line-height: 2.25rem;
  }

  @media (min-width: 1024px) {
    height: 3rem;
    width: 16rem;
    font-size: 1.5rem;
    line-height: 2.25rem;
  }

  @media (min-width: 1280px) {
    height: 4rem;
    width: 20rem;
    font-size: 1.875rem;
    line-height: 2.25rem;
  }
`;

function CartDetails() {
  const navigate = useNavigate();
  const { cart, isLoading, error } = useCart();
  const cartItems = cart?.cartItems;

  const { isAuthenticated, user } = useAuth();
  const userAddress = Boolean(user?.address);

  const cartIsEmpty = cartItems?.length === 0;

  const { isPending: isPendingStripe, getPayment } = useStripe();
  const { getCashfree, isPending: isPendingCashfree } = useCashfree();

  function handleCashfree(e) {
    e.preventDefault();

    if (!userAddress) {
      toast.error('Please add your address, redirecting...');

      setTimeout(() => {
        navigate('/account', { state: { openContainer: 'address' } });
      }, 2000);
    } else {
      getCashfree();
    }
  }

  function handleStripe(e) {
    e.preventDefault();

    if (!userAddress) {
      toast.error('Please add your address, redirecting...');

      setTimeout(() => {
        navigate('/account', { state: { openContainer: 'address' } });
      }, 2000);
    } else {
      getPayment(cart);
    }
  }

  if (isLoading) return <Spinner />;
  if (error) return <H1>Error in Fetching Cart</H1>;
  if (!cart || cartIsEmpty) return <H1>Your Cart is Empty</H1>;

  return (
    <Container>
      <PageName>
        <span>Cart</span>
        <span>
          <HiShoppingCart />
        </span>
      </PageName>

      <ItemsContainer>
        {cartItems.map((item) => (
          <CartItem item={item} key={item.productId._id} />
        ))}
      </ItemsContainer>

      {isAuthenticated && (
        <PriceContainer>
          <PriceContainer1>
            <H1>Total Price : {formatIndianCurrency(cart.totalPrice)}</H1>

            <Button onClick={handleStripe}>
              {isPendingStripe ? (
                <SpinnerMini size="3rem" />
              ) : (
                'Checkout at Stripe'
              )}
            </Button>
            <Button onClick={handleCashfree}>
              {isPendingCashfree ? (
                <SpinnerMini size="3rem" />
              ) : (
                'Checkout at Cashfree'
              )}
            </Button>
          </PriceContainer1>
        </PriceContainer>
      )}
    </Container>
  );
}

export default CartDetails;
