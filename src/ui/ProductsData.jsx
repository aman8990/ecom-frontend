import ProductsList from './ProductsList';
import Spinner from './Spinner';
import styled from 'styled-components';
import { useProducts } from '../features/products/useProducts';

const H1 = styled.h1`
  text-align: center;
  font-weight: 600;
  color: #78716c;

  @media (min-width: 0px) {
    margin-top: 2rem;
    font-size: 1.8rem;
  }

  @media (min-width: 400px) {
    margin-top: 2rem;
    font-size: 2rem;
  }

  @media (min-width: 600px) {
    margin-top: 2rem;
    font-size: 2rem;
  }

  @media (min-width: 768px) {
    margin-top: 2rem;
    font-size: 3rem;
  }
`;

const H2 = styled.h1`
  text-align: center;
  font-size: 4rem;
  font-weight: 600;
  color: #78716c;

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

const Container = styled.div`
  margin-top: 1rem;
  margin-bottom: 2rem;
  display: flex;
  min-height: 100vh;
  align-items: center;
  justify-content: center;
`;

const StyledGrid = styled.div`
  display: grid;
  min-height: 100%;
  overflow: auto;

  @media (min-width: 0px) {
    grid-template-columns: repeat(1, 1fr);
    row-gap: 2rem;
    padding: 1rem 0.5rem;
  }

  @media (min-width: 400px) {
    grid-template-columns: repeat(1, 1fr);
    row-gap: 2rem;
    padding: 1rem 0.5rem;
  }

  @media (min-width: 600px) {
    grid-template-columns: repeat(1, 1fr);
    row-gap: 2rem;
    padding: 1rem 2rem;
  }

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    column-gap: 8rem;
    row-gap: 5rem;
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
    column-gap: 5rem;
  }

  @media (min-width: 1280px) {
    grid-template-columns: repeat(3, 1fr);
    column-gap: 10rem;
  }
`;

function ProductsData({ title = 'Products List' }) {
  const { products, isLoading, error } = useProducts();

  const homePageTitle = Boolean(title === 'Products');

  if (error) return <H3>Error in Fetching Products</H3>;

  if (isLoading) return <Spinner />;

  return (
    <div>
      {homePageTitle ? <H2>{title}</H2> : <H1>{title}</H1>}

      <Container>
        <StyledGrid>
          {products.map((product) => (
            <ProductsList product={product} key={product._id} />
          ))}
        </StyledGrid>
      </Container>
    </div>
  );
}

export default ProductsData;
