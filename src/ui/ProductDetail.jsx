import { useSearchParams } from 'react-router-dom';
import styled from 'styled-components';
import { useProduct } from '../features/products/useProduct';
import Spinner from './Spinner';
import SpinnerMini from './SpinnerMini';
import { useAddItemToCart } from '../features/products/useAddItemToCart';
import ProductDescription from './ProductDescription';
import { formatIndianCurrency } from '../services/formatCurrency';
import { useAuth } from '../features/authentication/useAuth';
import { useAddItemToLocalCart } from '../features/products/useAddItemToLocalCart';

const Container = styled.div`
  display: flex;
  justify-content: space-between;

  @media (min-width: 0px) {
    align-items: center;
    flex-direction: column;
    margin: 2rem 1rem;
    gap: 1rem;
  }

  @media (min-width: 400px) {
    align-items: center;
    flex-direction: column;
    margin: 2rem 1rem;
    gap: 1rem;
  }

  @media (min-width: 600px) {
    align-items: center;
    flex-direction: column;
    margin: 3rem 2rem;
    gap: 2rem;
  }

  @media (min-width: 768px) {
    flex-direction: row;
    margin: 3rem 2rem;
    gap: 2rem;
  }

  @media (min-width: 1024px) {
    margin: 3rem 2rem;
    gap: 2rem;
  }

  @media (min-width: 1280px) {
    margin: 4rem 6rem;
    gap: 2rem;
  }
`;

const ImageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 0.125rem;
  border: 2px solid rgb(245 245 244);

  @media (min-width: 0px) {
    height: 12rem;
    width: 12rem;
  }

  @media (min-width: 400px) {
    height: 15rem;
    width: 15rem;
  }

  @media (min-width: 600px) {
    height: 15rem;
    width: 25rem;
  }

  @media (min-width: 768px) {
    height: 20rem;
    width: 20rem;
  }

  @media (min-width: 1024px) {
    height: 24rem;
    width: 24rem;
  }

  @media (min-width: 1280px) {
    height: 28rem;
    width: 28rem;
  }
`;

const ImgContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 0.125rem;

  @media (min-width: 0px) {
    height: 10rem;
    width: 10rem;
  }

  @media (min-width: 400px) {
    height: 13rem;
    width: 13rem;
  }

  @media (min-width: 600px) {
    height: 15rem;
    width: 25rem;
  }

  @media (min-width: 768px) {
    height: 20rem;
    width: 20rem;
  }

  @media (min-width: 1024px) {
    height: 24rem;
    width: 24rem;
  }

  @media (min-width: 1280px) {
    height: 28rem;
    width: 28rem;
  }
`;

const Img = styled.img`
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.5);
  }

  @media (min-width: 600px) {
    height: 99%;
    width: 99%;
    object-fit: contain;
  }

  @media (min-width: 768px) {
    height: 83.33%;
    width: 83.33%;
    object-fit: contain;
  }
`;

const DetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  @media (min-width: 768px) {
    padding: 1rem;
  }

  @media (min-width: 1024px) {
    padding: 1.4rem;
  }

  @media (min-width: 1280px) {
    padding: 2rem;
  }
`;

const H1 = styled.h1`
  margin-bottom: 1rem;
  margin-top: -1rem;
  font-size: 2rem;
  color: rgb(12 10 9);

  @media (min-width: 0px) {
    font-size: 1rem;
    line-height: 1.7rem;
    font-weight: 600;
    margin-bottom: 0.5rem;
    margin-top: 0;
  }

  @media (min-width: 400px) {
    font-size: 1.2rem;
    line-height: 1.7rem;
    font-weight: 600;
    margin-bottom: 0.5rem;
    margin-top: 0;
  }

  @media (min-width: 600px) {
    font-size: 1.2rem;
    line-height: 1.7rem;
    font-weight: 600;
    margin-bottom: 0.5rem;
    margin-top: 0;
  }

  @media (min-width: 768px) {
    font-size: 1.2rem;
    line-height: 1.7rem;
    font-weight: 600;
    margin-bottom: 0.5rem;
    margin-top: 0;
  }

  @media (min-width: 1024px) {
    font-size: 1.7rem;
    line-height: 2.4rem;
  }

  @media (min-width: 1280px) {
    font-size: 2rem;
    line-height: 3rem;
  }
`;

const H2 = styled.h2`
  margin-bottom: 1rem;
  /* font-size: 1.875rem; */
  color: rgb(41 37 36);

  @media (min-width: 0px) {
    margin-bottom: 0.7rem;
    font-size: 1rem;
    font-weight: 600;
  }

  @media (min-width: 400px) {
    margin-bottom: 0.7rem;
    font-size: 1rem;
    font-weight: 600;
  }

  @media (min-width: 600px) {
    margin-bottom: 0.7rem;
    font-size: 1rem;
    font-weight: 600;
  }

  @media (min-width: 768px) {
    margin-bottom: 0.7rem;
    font-size: 1rem;
    font-weight: 600;
  }

  @media (min-width: 1024px) {
    font-size: 1.5rem;
  }

  @media (min-width: 1280px) {
    font-size: 1.875rem;
  }
`;

const H3 = styled.h1`
  text-align: center;
  font-size: 4rem;
  font-weight: 600;
  color: #78716c;
  margin-top: 2rem;

  @media (min-width: 0px) {
    margin-bottom: 1rem;
    font-size: 1.8rem;
  }

  @media (min-width: 400px) {
    margin-bottom: 1rem;
    font-size: 2rem;
  }

  @media (min-width: 600px) {
    margin-bottom: 1rem;
    font-size: 2.4rem;
  }

  @media (min-width: 768px) {
    margin-bottom: 2rem;
    font-size: 3rem;
  }

  @media (min-width: 1024px) {
    font-size: 3rem;
  }

  @media (min-width: 1280px) {
    font-size: 4rem;
  }
`;

const P = styled.p`
  color: rgb(87 83 78);

  @media (min-width: 0px) {
    margin-bottom: 0.7rem;
    font-size: 0.8rem;
  }

  @media (min-width: 400px) {
    margin-bottom: 0.7rem;
    font-size: 0.8rem;
  }

  @media (min-width: 600px) {
    margin-bottom: 0.7rem;
    font-size: 1rem;
  }

  @media (min-width: 768px) {
    margin-bottom: 0.7rem;
    font-size: 1rem;
  }

  @media (min-width: 1024px) {
    margin-bottom: 1rem;
    font-size: 1.2rem;
  }

  @media (min-width: 1280px) {
    font-size: 1.5rem;
    margin-bottom: 1.2rem;
  }
`;

const StyledButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;
  border-radius: 0.375rem;

  font-weight: 400;
  color: #fff;
  background-color: rgb(22 163 74);
  transition: background-color 0 3s ease;

  &:hover {
    background-color: rgb(20, 145, 66);
  }

  @media (min-width: 0px) {
    font-size: 0.9rem;
    width: 95px;
    height: 40px;
  }

  @media (min-width: 400px) {
    font-size: 1rem;
    width: 95px;
    height: 40px;
  }

  @media (min-width: 600px) {
    font-size: 1rem;
    width: 95px;
    height: 40px;
  }

  @media (min-width: 768px) {
    font-size: 1rem;
    width: 95px;
    height: 40px;
  }

  @media (min-width: 1024px) {
    font-size: 1.2rem;
    width: 120px;
    height: 55px;
  }

  @media (min-width: 1280px) {
    font-size: 1.5rem;
    width: 150px;
    height: 60px;
  }
`;

function ProductDetail() {
  const [searchParams] = useSearchParams();
  const id = searchParams.get('id');
  const quantity = 1;
  const { product, isLoading, error } = useProduct({ id });
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

  if (isLoading) return <Spinner />;
  if (error) return <H3>Error in Fetching Product</H3>;

  return (
    <>
      <Container>
        <ImageContainer>
          <ImgContainer>
            <Img src={product.photo} alt={product.name} />
          </ImgContainer>
        </ImageContainer>

        <>
          <DetailsContainer>
            <H1>{product.name}</H1>
            <P>{product.description}</P>
            <H2>Price : {formatIndianCurrency(product?.price)}</H2>

            <StyledButton onClick={handleAddToCart}>
              {isPending ? <SpinnerMini /> : 'Add to cart'}
            </StyledButton>
          </DetailsContainer>
        </>
      </Container>

      <ProductDescription product={product} />
    </>
  );
}

export default ProductDetail;
