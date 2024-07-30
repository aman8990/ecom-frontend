import { useEffect, useState } from 'react';
import { useDeleteProduct } from '../features/products/useDeleteProduct';
import Spinner from './Spinner';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 5rem;
  padding: 1.5rem;
  background-color: #fff;
  border-width: 2px;
  border-style: solid;
  border-radius: 0.5rem;
  box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);

  @media (min-width: 300px) {
    width: 90%;
  }

  @media (min-width: 540px) {
    width: 80%;
  }

  @media (min-width: 768px) {
    width: 85%;
  }

  @media (min-width: 1024px) {
    width: 75%;
  }

  @media (min-width: 1280px) {
    width: 66.666667%;
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.25rem;
  margin-top: 1rem;
`;

const Content = styled.div`
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  margin-top: 0.5rem;
`;

const NameContainer = styled.div`
  display: flex;
  flex-wrap: nowrap;
`;

const H1 = styled.h1`
  font-weight: 600;

  @media (min-width: 300px) {
    font-size: 1rem;
    line-height: 1.75rem;
  }

  @media (min-width: 540px) {
    font-size: 1rem;
    line-height: 1.75rem;
  }

  @media (min-width: 768px) {
    font-size: 1.25rem;
    line-height: 1.75rem;
  }
`;

const H2 = styled.h2`
  font-size: 1.125rem;
  line-height: 1.75rem;
  color: rgb(120 113 108);
  flex: 1;
  word-break: break-word;

  @media (min-width: 300px) {
    font-size: 1rem;
    line-height: 1.75rem;
  }

  @media (min-width: 540px) {
    font-size: 1rem;
    line-height: 1.75rem;
  }

  @media (min-width: 768px) {
    font-size: 1.125rem;
    line-height: 1.75rem;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2.5rem;
  margin-top: 1rem;
`;

const Button = styled.button`
  margin-bottom: 0.75rem;
  background-color: rgb(190 18 60);
  color: #fff;
  border-radius: 0.125rem;
  font-weight: 600;

  @media (min-width: 300px) {
    padding-left: 0.65rem;
    padding-right: 0.65rem;
    padding-top: 0.45rem;
    padding-bottom: 0.45rem;
    font-size: 0.8rem;
  }

  @media (min-width: 540px) {
    padding-left: 0.75rem;
    padding-right: 0.75rem;
    padding-top: 0.5rem;
    font-size: 0.9rem;
    padding-bottom: 0.5rem;
  }

  @media (min-width: 768px) {
    padding-left: 0.75rem;
    padding-right: 0.75rem;
    padding-top: 0.5rem;
    font-size: 1rem;
    padding-bottom: 0.5rem;
  }
`;

function DeleteProduct({ product }) {
  const [currentProduct, setCurrentProduct] = useState(product);
  const { deleteProduct, isPending, isSuccess, isError } = useDeleteProduct();

  const id = currentProduct?._id;

  useEffect(
    function () {
      if (isSuccess) setCurrentProduct(null);
      if (isError) setCurrentProduct(product);
    },
    [isSuccess, isError, product],
  );

  function handleClick() {
    deleteProduct({ id });
  }

  if (isPending) return <Spinner />;
  if (currentProduct === null) return <div></div>;

  return (
    <Container>
      <Wrapper>
        <Content>
          <H1>Product Id :</H1>
          <H2>{currentProduct?._id}</H2>
        </Content>

        <Content>
          <NameContainer>
            <H1>Name :</H1>
          </NameContainer>
          <H2>{currentProduct?.name}</H2>
        </Content>

        <Content>
          <H1>Price :</H1>
          <H2>₹ {currentProduct?.price}</H2>
        </Content>
      </Wrapper>

      <ButtonContainer>
        <Button onClick={handleClick}>Delete Product</Button>
      </ButtonContainer>
    </Container>
  );
}

export default DeleteProduct;
