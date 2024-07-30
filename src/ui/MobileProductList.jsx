import { useNavigate } from 'react-router-dom';
import { useAddItemToCart } from '../features/products/useAddItemToCart';
import { useAddItemToLocalCart } from '../features/products/useAddItemToLocalCart';
import { useAuth } from '../features/authentication/useAuth';
import { formatIndianCurrency } from '../services/formatCurrency';
import SpinnerMini from './SpinnerMini';
import styled from 'styled-components';

const Container = styled.div`
  border-width: 2px;
  border-color: rgb(231 229 228);
  border-radius: 0.375rem;
  display: flex;
`;

const Container1 = styled.div`
  cursor: pointer;
`;

const StyledDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-right: 2px solid rgb(231 229 228);

  @media (min-width: 0px) {
    height: 5rem;
    width: 5rem;
  }

  @media (min-width: 400px) {
    height: 8rem;
    width: 8rem;
  }

  @media (min-width: 600px) {
    height: 10rem;
    width: 10rem;
  }
`;

const H1 = styled.h1`
  text-align: start;
  font-size: 1rem;
  font-weight: 600;
  color: #92816e;
  transition: color 0.3s ease;

  ${Container1}:hover & {
    color: #473e37;
    font-weight: 500;
  }

  @media (min-width: 0px) {
    font-size: 0.7rem;
    font-weight: 500;
    margin-bottom: 0.2rem;
  }

  @media (min-width: 400px) {
    font-size: 0.8rem;
    font-weight: 500;
    margin-bottom: 1rem;
  }

  @media (min-width: 600px) {
    font-size: 1rem;
    font-weight: 600;
  }
`;

const H2 = styled.h2`
  color: #92816e;
  transition: color 0.3s ease;

  ${Container1}:hover & {
    color: #473e37;
    font-weight: 500;
  }

  @media (min-width: 0px) {
    font-size: 0.7rem;
    font-weight: 500;
    margin-bottom: 0.1rem;
  }

  @media (min-width: 400px) {
    font-size: 0.8rem;
    font-weight: 500;
    margin-bottom: 0.5rem;
  }

  @media (min-width: 600px) {
    font-size: 1rem;
    font-weight: 600;
  }
`;

const Img = styled.img`
  object-fit: contain;
  transition: transform 0.3s ease;

  ${Container1}:hover & {
    transform: scale(1.17);
  }

  @media (min-width: 0px) {
    height: 100%;
    width: 100%;
  }

  @media (min-width: 400px) {
    height: 100%;
    width: 100%;
  }

  @media (min-width: 600px) {
    height: 83.33%;
    width: 83.33%;
  }
`;

const Container2 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  @media (min-width: 0px) {
    margin: 0.1rem;
  }

  @media (min-width: 400px) {
    margin-left: 0.5rem;
    margin-right: 0.5rem;
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
  }

  @media (min-width: 600px) {
    margin-left: 2rem;
    margin-right: 2rem;
    margin-top: 1rem;
    margin-bottom: 1rem;
  }
`;

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  background-color: rgb(22 163 74);
  line-height: 1.5rem;
  font-weight: 600;
  border-radius: 0.375rem;

  @media (min-width: 0px) {
    font-size: 0.4rem;
    height: 1rem;
    width: 3rem;
  }

  @media (min-width: 400px) {
    font-size: 0.7rem;
    height: 1.7rem;
    width: 4.4rem;
  }

  @media (min-width: 600px) {
    font-size: 0.9rem;
    height: 2.1rem;
    width: 5.8rem;
  }
`;

function MobileProductList({ product }) {
  const quantity = 1;
  const { isPending, addItemToCart } = useAddItemToCart();
  const { addItemToLocalCart } = useAddItemToLocalCart();
  const { isAuthenticated } = useAuth();

  const productDetails = {
    _id: product?._id,
    name: product?.name,
    photo: product?.photo,
    price: product?.price,
    quantity,
  };

  function handleAddToCart() {
    if (isAuthenticated) {
      addItemToCart({ id, quantity });
    } else {
      addItemToLocalCart(productDetails);
    }
  }

  const navigate = useNavigate();
  const id = product._id;

  return (
    <Container onClick={() => navigate(`/product?id=${id}`)}>
      <Container1>
        <StyledDiv>
          <Img src={product.photo} alt="productImage" />
        </StyledDiv>
      </Container1>

      <Container2>
        <H1>{product.name}</H1>
        <H2>Price : {formatIndianCurrency(product.price)}</H2>
        <Button
          onClick={(e) => {
            e.stopPropagation();
            handleAddToCart();
          }}
        >
          {isPending ? <SpinnerMini size="1.5rem" /> : 'Add to cart'}
        </Button>
      </Container2>
    </Container>
  );
}

export default MobileProductList;
