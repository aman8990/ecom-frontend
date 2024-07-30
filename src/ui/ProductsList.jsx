import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { formatIndianCurrency } from '../services/formatCurrency';
import { useAddItemToCart } from '../features/products/useAddItemToCart';
import { useAddItemToLocalCart } from '../features/products/useAddItemToLocalCart';
import { useAuth } from '../features/authentication/useAuth';
import SpinnerMini from './SpinnerMini';
import MobileProductList from './MobileProductList';

const Container = styled.div`
  border-width: 2px;
  border-color: rgb(231 229 228);
  border-radius: 0.375rem;

  @media (min-width: 0px) {
    display: none;
  }

  @media (min-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 18rem;
  }

  @media (min-width: 1024px) {
    width: 16rem;
  }

  @media (min-width: 1280px) {
    width: 18rem;
  }
`;

const Container1 = styled.div`
  cursor: pointer;
`;

const StyledDiv = styled.div`
  display: flex;
  height: 14rem;
  align-items: center;
  justify-content: center;
  border-bottom: 2px solid rgb(231 229 228);

  @media (min-width: 768px) {
    width: 18rem;
  }

  @media (min-width: 1024px) {
    width: 16rem;
  }

  @media (min-width: 1280px) {
    width: 18rem;
  }
`;

const H1 = styled.h1`
  padding: 0 0.5rem;
  margin-top: 0.5rem;
  width: 18rem;
  text-align: center;
  font-weight: 600;
  color: #92816e;
  transition: color 0.3s ease;

  ${Container1}:hover & {
    color: #473e37;
    font-weight: 500;
  }

  @media (min-width: 768px) {
    font-size: 1.1rem;
    width: 18rem;
  }

  @media (min-width: 1024px) {
    font-size: 1.1rem;
    width: 16rem;
  }

  @media (min-width: 1280px) {
    width: 18rem;
    font-size: 1.25rem;
  }
`;

const H2 = styled.h2`
  text-align: center;
  font-size: 1rem;
  font-weight: 600;
  color: #92816e;
  transition: color 0.3s ease;

  ${Container1}:hover & {
    color: #473e37;
    font-weight: 500;
  }
`;

const Img = styled.img`
  height: 83.33%;
  width: 83.33%;
  object-fit: contain;
  transition: transform 0.3s ease;

  ${Container1}:hover & {
    transform: scale(1.17);
  }
`;

const Container2 = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 1rem;
  margin-bottom: 1rem;

  @media (min-width: 768px) {
    margin-left: 1rem;
    margin-right: 1rem;
  }

  @media (min-width: 1024px) {
    margin-left: 1rem;
    margin-right: 1rem;
  }

  @media (min-width: 1280px) {
    margin-left: 1.25rem;
    margin-right: 1.25rem;
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

  &:hover {
    background-color: rgb(20, 145, 66);
  }

  @media (min-width: 768px) {
    height: 3rem;
    width: 7rem;
    font-size: 1rem;
    padding: 0.5rem;
  }

  @media (min-width: 1024px) {
    height: 2.6rem;
    width: 5rem;
    font-size: 0.8rem;
    padding: 0;
  }

  @media (min-width: 1280px) {
    height: 3rem;
    width: 7rem;
    font-size: 1rem;
    padding: 0.5rem;
  }
`;

const Mobile = styled.div`
  @media (min-width: 40px) {
    display: block;
  }

  @media (min-width: 768px) {
    display: none;
  }
`;

function ProductsList({ product }) {
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

  function handleAddToCart(e) {
    e.preventDefault();

    if (isAuthenticated) {
      addItemToCart({ id, quantity });
    } else {
      addItemToLocalCart(productDetails);
    }
  }

  const navigate = useNavigate();
  const id = product._id;

  return (
    <>
      <Container>
        <Container1 onClick={() => navigate(`/product?id=${id}`)}>
          <StyledDiv>
            <Img src={product.photo} alt="productImage" />
          </StyledDiv>

          <H1>{product.name}</H1>
        </Container1>

        <Container2>
          <H2>Price : {formatIndianCurrency(product.price)}</H2>
          <Button onClick={handleAddToCart}>
            {isPending ? <SpinnerMini size="1.5rem" /> : 'Add to cart'}
          </Button>
        </Container2>
      </Container>

      <Mobile>
        <MobileProductList product={product} />
      </Mobile>
    </>
  );
}

export default ProductsList;
