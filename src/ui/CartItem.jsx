import styled from 'styled-components';
import { useDeleteCartItem } from '../features/products/useDeleteCartItem';
import SpinnerMini from './SpinnerMini';
import { formatIndianCurrency } from '../services/formatCurrency';
import { useEffect, useState } from 'react';
import { useUpdateCartItem } from '../features/products/useUpdateCartItem';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../features/authentication/useAuth';
import { useAddItemToLocalCart } from '../features/products/useAddItemToLocalCart';
import { useDeleteLocalCartItem } from '../features/products/useDeleteLocalCartItem';

const Container = styled.div`
  display: flex;
  border-width: 2px;
  border-style: solid;
  margin-bottom: 0.5rem;
  border-color: rgb(245 245 244);
`;

const ImageContainer = styled.div`
  @media (min-width: 0px) {
    width: 1rem;
  }

  @media (min-width: 400px) {
    width: 1rem;
  }

  @media (min-width: 600px) {
    width: 5rem;
  }

  @media (min-width: 768px) {
    width: 5rem;
  }

  @media (min-width: 1024px) {
    width: 5rem;
  }

  @media (min-width: 1280px) {
    width: 13rem;
  }
`;

const ImageContainer1 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-width: 2px;
  border-style: solid;
  border-color: rgb(245 245 244);

  @media (min-width: 0px) {
    width: 3rem;
    height: 100%;
  }

  @media (min-width: 400px) {
    width: 5rem;
    height: 100%;
  }

  @media (min-width: 600px) {
    width: 8rem;
    height: 100%;
  }

  @media (min-width: 768px) {
    width: 10rem;
    height: 100%;
  }

  @media (min-width: 1024px) {
    width: 10rem;
    height: 100%;
  }

  @media (min-width: 1280px) {
    width: 13rem;
    height: 100%;
  }
`;

const Img = styled.img`
  height: 83.333333%;
  width: 83.333333%;
  object-fit: contain;
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (min-width: 0px) {
    margin: 0.2rem 0.5rem 0.2rem 2.5rem;
  }

  @media (min-width: 400px) {
    margin: 0.2rem 0.5rem 0.2rem 4.5rem;
  }

  @media (min-width: 600px) {
    margin: 0.5rem 1.25rem 0.5rem 6rem;
  }
`;

const H1 = styled.h1`
  cursor: pointer;

  @media (min-width: 0px) {
    font-size: 0.7rem;
    font-weight: 500;
    line-height: 1.1rem;
    margin-bottom: 0.4rem;
  }

  @media (min-width: 400px) {
    font-size: 0.8rem;
    font-weight: 500;
    line-height: 1.1rem;
    margin-bottom: 0.4rem;
  }

  @media (min-width: 600px) {
    font-size: 1rem;
    font-weight: 500;
    line-height: 1.5rem;
    margin-bottom: 0.75rem;
  }

  @media (min-width: 768px) {
    font-size: 1.2rem;
    font-weight: 500;
    line-height: 2rem;
  }

  @media (min-width: 1024px) {
    font-size: 1.2rem;
    font-weight: 500;
    line-height: 2rem;
  }

  @media (min-width: 1280px) {
    font-size: 1.5rem;
    line-height: 2rem;
  }
`;

const QuantityContainer = styled.div`
  display: flex;
  gap: 1rem;
  color: rgb(87 83 78);
`;

const H2 = styled.h2`
  @media (min-width: 0px) {
    font-size: 0.7rem;
    line-height: 1.75rem;
  }

  @media (min-width: 400px) {
    font-size: 0.8rem;
    line-height: 1.75rem;
  }

  @media (min-width: 600px) {
    font-size: 1rem;
  }

  @media (min-width: 768px) {
    font-size: 1.125rem;
    line-height: 1.75rem;
  }
`;

const QuantityContainer1 = styled.div`
  display: flex;
  gap: 0.75rem;
  font-size: 1.125rem;
  line-height: 1.75rem;

  @media (min-width: 0px) {
    font-size: 0.7rem;
  }

  @media (min-width: 400px) {
    font-size: 0.8rem;
  }

  @media (min-width: 600px) {
    font-size: 1rem;
  }

  @media (min-width: 768px) {
    font-size: 1.125rem;
    line-height: 1.75rem;
  }
`;

const QuantityButton = styled.button`
  border-radius: 9999px;

  font-weight: 800;
  color: rgb(28 25 23);

  @media (min-width: 0px) {
    font-size: 0.7rem;
  }

  @media (min-width: 400px) {
    font-size: 0.9rem;
  }

  @media (min-width: 600px) {
    background-color: rgb(231 229 228);
    padding: 0 0.65rem 0.2rem 0.65rem;
    font-size: 1rem;
  }

  @media (min-width: 768px) {
    font-size: 1.25rem;
    line-height: 1.75rem;
    padding: 0 0.75rem 0.25rem 0.75rem;
  }
`;

const SaveButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 0.5rem;
  font-weight: 600;
  color: #fff;
  background-color: rgb(22 163 74);
  transition: background-color 0.3s ease;

  &:hover {
    background-color: rgb(18, 147, 67);
  }

  @media (min-width: 0px) {
    height: 1.5rem;
    width: 2.7rem;
    font-size: 0.7rem;
  }

  @media (min-width: 400px) {
    height: 1.6rem;
    width: 2.8rem;
    font-size: 0.8rem;
  }

  @media (min-width: 600px) {
    height: 1.8rem;
    width: 3rem;
    font-size: 0.9rem;
  }

  @media (min-width: 768px) {
    height: 2rem;
    width: 3.5rem;
    font-size: 1.1rem;
  }
`;

const H3 = styled.h3`
  color: rgb(87 83 78);

  @media (min-width: 0px) {
    font-size: 0.7rem;
    margin-bottom: 0.3rem;
  }

  @media (min-width: 400px) {
    font-size: 0.8rem;
    margin-bottom: 0.3rem;
  }

  @media (min-width: 600px) {
    margin-bottom: 0.75rem;
    font-size: 1rem;
  }

  @media (min-width: 768px) {
    font-size: 1.125rem;
    line-height: 1.75rem;
  }
`;

const StyledButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 0.18rem;
  background-color: #d64e4e;
  font-weight: 600;
  color: #fff;
  transition: background-color 0 3s ease;

  &:hover {
    background-color: #c24545;
  }

  @media (min-width: 0px) {
    width: 2.8rem;
    height: 1.4rem;
    font-size: 0.6rem;
  }

  @media (min-width: 400px) {
    width: 3rem;
    height: 1.5rem;
    font-size: 0.7rem;
  }

  @media (min-width: 600px) {
    width: 4rem;
    height: 2rem;
    font-size: 0.8rem;
  }

  @media (min-width: 768px) {
    width: 6rem;
    height: 2rem;
    font-size: 0.9rem;
  }
`;

function CartItem({ item }) {
  const { deleteCartItem, isPending } = useDeleteCartItem();
  const { updateCartItem, isPending: isUpdating } = useUpdateCartItem();
  const productId = item.productId?._id;
  const [quantity, setQuantity] = useState('');

  useEffect(
    function () {
      setQuantity(item?.quantity);
    },
    [item?.quantity],
  );

  const { addItemToLocalCart } = useAddItemToLocalCart();
  const { deleteLocalCartItem } = useDeleteLocalCartItem();
  const { isAuthenticated } = useAuth();

  const navigate = useNavigate();

  function handleAdd(e) {
    e.preventDefault();
    setQuantity(quantity + 1);
  }

  function handleSub(e) {
    e.preventDefault();
    if (quantity === 1) return;

    setQuantity(quantity - 1);
  }

  function handleUpdateQuantity(e) {
    e.preventDefault();

    const productDetails = {
      _id: productId,
      quantity,
    };

    if (isAuthenticated) {
      updateCartItem({ productId, quantity });
    } else {
      addItemToLocalCart(productDetails);
    }
  }

  function handleRemove(e) {
    e.preventDefault();

    if (!productId) return;

    if (isAuthenticated) {
      deleteCartItem({ productId });
    } else {
      deleteLocalCartItem(productId);
    }
  }

  return (
    <Container>
      <ImageContainer>
        <ImageContainer1>
          <Img
            src={item.productId.photo}
            alt={item.productId.name}
            className="h-5/6 w-5/6 object-contain"
          />
        </ImageContainer1>
      </ImageContainer>

      <InfoContainer>
        <H1 onClick={() => navigate(`/product?id=${productId}`)}>
          {item.productId.name}
        </H1>

        <QuantityContainer>
          <H2>Quantity : {item?.quantity}</H2>

          <QuantityContainer1>
            <QuantityButton onClick={handleSub}>&minus;</QuantityButton>
            <h1>{quantity}</h1>
            <QuantityButton onClick={handleAdd}>&#43;</QuantityButton>

            <SaveButton onClick={handleUpdateQuantity}>
              {isUpdating ? <SpinnerMini size="1.5rem" /> : 'Save'}
            </SaveButton>
          </QuantityContainer1>
        </QuantityContainer>

        <H3>
          Price : {formatIndianCurrency(item.productId.price * item.quantity)}
        </H3>
        <StyledButton onClick={handleRemove}>
          {isPending ? <SpinnerMini size="1.5rem" /> : 'Remove'}
        </StyledButton>
      </InfoContainer>
    </Container>
  );
}

export default CartItem;
