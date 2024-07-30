import mongoose from 'mongoose';
import { useState } from 'react';
import styled from 'styled-components';
import SpinnerMini from './SpinnerMini';
import { useGetProduct } from '../features/products/useGetProduct';
import DeleteProduct from './DeleteProduct';
import toast from 'react-hot-toast';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-width: 2px;
  border-style: solid;
  border-radius: 0.5rem;
  background-color: #fff;
  box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);

  @media (min-width: 300px) {
    width: 90%;
    margin-top: 2rem;
  }

  @media (min-width: 540px) {
    width: 80%;
    margin-top: 2rem;
  }

  @media (min-width: 768px) {
    width: 85%;
    margin-top: 2rem;
  }

  @media (min-width: 1024px) {
    width: 75%;
    margin-top: 3rem;
  }

  @media (min-width: 1280px) {
    width: 66.666667%;
    margin-top: 5rem;
  }
`;

const H1 = styled.h1`
  display: flex;
  justify-content: center;
  font-weight: 600;
  color: rgb(87 83 78);

  @media (min-width: 300px) {
    margin-bottom: 1rem;
    margin-top: 1rem;
    font-size: 1.3rem;
    line-height: 2.5rem;
  }

  @media (min-width: 540px) {
    margin-bottom: 1rem;
    margin-top: 1rem;
    font-size: 1.5rem;
    line-height: 2.5rem;
  }

  @media (min-width: 768px) {
    margin-bottom: 1.5rem;
    margin-top: 1rem;
    font-size: 1.5rem;
    line-height: 2.5rem;
  }

  @media (min-width: 1024px) {
    margin-bottom: 2rem;
    margin-top: 2rem;
    font-size: 2rem;
    line-height: 2.5rem;
  }

  @media (min-width: 1280px) {
    margin-bottom: 3.5rem;
    margin-top: 2.5rem;
    font-size: 2.25rem;
    line-height: 2.5rem;
  }
`;

const StyledForm = styled.form`
  @media (min-width: 300px) {
    width: 15rem;
  }

  @media (min-width: 540px) {
    width: 20rem;
  }

  @media (min-width: 768px) {
    width: 23rem;
  }

  @media (min-width: 1024px) {
    width: 30rem;
  }
`;

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 300px) {
    font-size: 1rem;
    line-height: 1.75rem;
  }

  @media (min-width: 540px) {
    font-size: 1rem;
    line-height: 1.75rem;
  }

  @media (min-width: 768px) {
    font-size: 1.1rem;
    line-height: 1.75rem;
  }

  @media (min-width: 1024px) {
    font-size: 1.25rem;
    line-height: 1.75rem;
  }
`;

const Label = styled.label`
  font-weight: 600;
  color: rgb(87 83 78);
`;

const StyledInput = styled.input`
  margin-bottom: 1rem;
  margin-top: 0.5rem;
  width: 100%;
  border-radius: 0.125rem;
  border-width: 2px;
  border-color: rgb(168 162 158);
  outline: none;

  &:focus {
    border-color: #16a32a;
  }

  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus,
  &:-webkit-autofill:active {
    -webkit-text-fill-color: #000;
    -webkit-box-shadow: 0 0 0px 1000px #fff inset;
    font-size: 1.25rem !important;
    line-height: 1.75rem !important;
  }

  @media (min-width: 300px) {
    padding: 0.05rem 0.4rem;
  }

  @media (min-width: 540px) {
    padding: 0.05rem 0.4rem;
  }

  @media (min-width: 768px) {
    padding: 0.15rem 0.4rem;
  }

  @media (min-width: 1024px) {
    padding: 0.25rem 0.5rem;
  }
`;

const StyledButton = styled.button`
  display: flex;
  justify-content: center;
  width: 100%;
  font-weight: 600;
  margin-top: 0.4rem;
  border-radius: 0.125rem;
  background-color: #16a32a;
  color: #fff;

  @media (min-width: 300px) {
    font-size: 1rem;
    padding: 0.2rem 0;
    margin-bottom: 2rem;
  }

  @media (min-width: 540px) {
    font-size: 1rem;
    padding: 0.2rem 0;
    margin-bottom: 2rem;
  }

  @media (min-width: 768px) {
    font-size: 1.25rem;
    padding: 0.2rem 0;
    margin-bottom: 3rem;
  }

  @media (min-width: 1024px) {
    font-size: 1.25rem;
    margin-bottom: 4rem;
    padding: 0.25rem 0;
  }

  @media (min-width: 1280px) {
    font-size: 1.25rem;
    margin-bottom: 5rem;
    padding: 0.25rem 0;
  }
`;

function DeleteProductForm() {
  const [id, setId] = useState('');

  const { isPending, getProduct, product } = useGetProduct();

  const isValidObject = (id) => mongoose.Types.ObjectId.isValid(id);

  function handleSubmit(e) {
    e.preventDefault();

    if (!isValidObject(id)) {
      toast.dismiss();
      toast.error('Invalid ProductId');
      return;
    }

    getProduct({ id });
  }

  return (
    <>
      <Container>
        <H1>Delete Product</H1>

        <StyledForm onSubmit={handleSubmit}>
          <StyledDiv>
            <Label htmlFor="id">Enter Product ID</Label>
            <StyledInput
              type="text"
              id="id"
              autoComplete="id"
              placeholder="productId"
              value={id}
              onChange={(e) => setId(e.target.value)}
            />
          </StyledDiv>

          <StyledButton>
            {isPending ? <SpinnerMini size="1.9rem" /> : 'Submit'}
          </StyledButton>
        </StyledForm>
      </Container>

      {product && <DeleteProduct product={product} />}
    </>
  );
}

export default DeleteProductForm;
