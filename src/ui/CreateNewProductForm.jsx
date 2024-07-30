import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';
import { useCreateNewProduct } from '../features/products/useCreateNewProduct';
import SpinnerMini from '../ui/SpinnerMini';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-bottom: 4rem;
  padding-top: 2rem;
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
    width: 80%;
  }

  @media (min-width: 1280px) {
    width: 70%;
  }
`;

const H1 = styled.h1`
  display: flex;
  justify-content: center;
  font-weight: 600;
  color: rgb(87 83 78);

  @media (min-width: 300px) {
    font-size: 1.5rem;
    line-height: 2.5rem;
    margin-bottom: 0.5rem;
  }

  @media (min-width: 540px) {
    font-size: 1.5rem;
    line-height: 2.5rem;
    margin-bottom: 0.5rem;
  }

  @media (min-width: 768px) {
    font-size: 1.7rem;
    line-height: 2.5rem;
    margin-bottom: 1rem;
  }

  @media (min-width: 1024px) {
    font-size: 2.25rem;
    line-height: 2.5rem;
    margin-bottom: 1.25rem;
  }
`;

const StyledForm = styled.form`
  @media (min-width: 300px) {
    width: 15rem;
    margin-top: 1rem;
  }

  @media (min-width: 540px) {
    width: 23rem;
    margin-top: 1rem;
  }

  @media (min-width: 768px) {
    width: 23rem;
    margin-top: 2rem;
  }

  @media (min-width: 1024px) {
    width: 30rem;
    margin-top: 2rem;
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
    font-size: 1rem;
    line-height: 1.75rem;
  }

  @media (min-width: 1024px) {
    font-size: 1.25rem;
    line-height: 1.75rem;
  }
`;

const Label = styled.label`
  position: relative;
  font-weight: 600;
  color: rgb(87 83 78);
`;

const StyledTextarea = styled.textarea`
  flex: 1;
  margin-bottom: 1rem;
  margin-top: 0.5rem;
  width: 100%;
  height: 6rem;
  border-radius: 0.125rem;
  border-width: 2px;
  border-color: rgb(168 162 158);
  padding: 0.25rem 0.5rem;
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
`;

const StyledInput = styled.input`
  margin-bottom: 1rem;
  margin-top: 0.5rem;
  width: 100%;
  border-radius: 0.125rem;
  border-width: 2px;
  border-color: rgb(168 162 158);
  padding: 0.25rem 0.5rem;
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
    padding: 0.3rem 0;
    font-size: 0.8rem;
  }

  @media (min-width: 540px) {
    padding: 0.3rem 0;
    font-size: 1rem;
  }

  @media (min-width: 768px) {
    padding: 0.3rem 0;
    font-size: 1.1rem;
  }

  @media (min-width: 1024px) {
    padding: 0.25rem 0;
    font-size: 1.25rem;
  }
`;

const Span = styled.span`
  line-height: 1.5rem;
  color: rgb(248 113 113);

  @media (min-width: 300px) {
    left: 6rem;
    position: absolute;
    top: 2.5rem;
    font-size: 0.7rem;
  }

  @media (min-width: 540px) {
    top: 0;
    font-size: 0.7rem;
  }

  @media (min-width: 768px) {
    font-size: 0.9rem;
  }

  @media (min-width: 1024px) {
    font-size: 1rem;
  }
`;

function CreateNewProductForm() {
  const { register, formState, handleSubmit } = useForm();
  const { errors } = formState;
  const { createNewProduct, isPending } = useCreateNewProduct();

  const [fullDescriptions, setFullDescriptions] = useState(['']);
  const [imagesData, setImagesData] = useState(['']);

  function handleFullDescriptionChange(index, event) {
    const values = [...fullDescriptions];
    values[index] = event.target.value;
    setFullDescriptions(values);
  }

  function handleAddFullDescription() {
    setFullDescriptions([...fullDescriptions, '']);
  }

  function handleRemoveFullDescription(index) {
    const values = [...fullDescriptions];
    values.splice(index, 1);
    setFullDescriptions(values);
  }

  function handleImageDataChange(index, event) {
    const values = [...imagesData];
    values[index] = event.target.value;
    setImagesData(values);
  }

  function handleAddImageData() {
    setImagesData([...imagesData, '']);
  }

  function handleRemoveImageData(index) {
    const values = [...imagesData];
    values.splice(index, 1);
    setImagesData(values);
  }

  function onSubmit({ name, price, photo, description }) {
    const images = imagesData.filter((url) => url.trim() !== '');

    const data = {
      name,
      price,
      photo,
      description,
      images,
      fullDescription: fullDescriptions.filter((desc) => desc.trim() !== ''),
    };

    createNewProduct(data);
  }

  return (
    <Container>
      <H1>Create New Product</H1>

      <StyledForm onSubmit={handleSubmit(onSubmit)}>
        <StyledDiv>
          <Label htmlFor="name">
            Product Name &nbsp;
            <Span>{errors?.name?.message}</Span>
          </Label>
          <StyledInput
            type="text"
            id="name"
            placeholder="Samsung S24"
            {...register('name', { required: '* This field is required' })}
          />
        </StyledDiv>

        <StyledDiv>
          <Label htmlFor="price">
            Product Price &nbsp;
            <Span>{errors?.price?.message}</Span>
          </Label>
          <StyledInput
            type="number"
            id="price"
            placeholder="₹ 65,999"
            {...register('price', {
              required: '* This field is required',
              min: {
                value: 0,
                message: '* Price must be a positive number',
              },
            })}
          />
        </StyledDiv>

        <StyledDiv>
          <Label htmlFor="photo">
            Product Photo &nbsp;
            <Span>{errors?.photo?.message}</Span>
          </Label>
          <StyledInput
            type="url"
            id="photo"
            placeholder="Cover Image"
            {...register('photo', {
              required: '* This field is required',
            })}
          />
        </StyledDiv>

        <StyledDiv>
          <Label htmlFor="description">
            Product Description &nbsp;
            <Span>{errors?.description?.message}</Span>
          </Label>
          <StyledTextarea
            type="text"
            id="description"
            placeholder="Meet Galaxy S24, the ultimate device"
            {...register('description', {
              required: '* This field is required',
            })}
          />
        </StyledDiv>

        <StyledDiv>
          <Label>Product Images &nbsp;</Label>
          {imagesData.map((image, index) => (
            <div key={index} className="flex w-[107%] items-center gap-4">
              <StyledTextarea
                type="url"
                placeholder={`Image ${index + 1}`}
                value={image}
                onChange={(e) => handleImageDataChange(index, e)}
              />
              <div className="flex flex-col justify-center gap-2">
                {index > 0 && (
                  <button
                    type="button"
                    onClick={() => handleRemoveImageData(index)}
                  >
                    &minus;
                  </button>
                )}
                <button type="button" onClick={handleAddImageData}>
                  &#43;
                </button>
              </div>
            </div>
          ))}
        </StyledDiv>

        <StyledDiv>
          <Label>Full Description &nbsp;</Label>
          {fullDescriptions.map((fullDescription, index) => (
            <div key={index} className="flex w-[107%] items-center gap-4">
              <StyledTextarea
                type="text"
                placeholder={`Description ${index + 1}`}
                value={fullDescription}
                onChange={(e) => handleFullDescriptionChange(index, e)}
              />
              <div className="flex flex-col justify-center gap-2">
                {index > 0 && (
                  <button
                    type="button"
                    onClick={() => handleRemoveFullDescription(index)}
                  >
                    &minus;
                  </button>
                )}
                <button type="button" onClick={handleAddFullDescription}>
                  &#43;
                </button>
              </div>
            </div>
          ))}
        </StyledDiv>

        <StyledButton type="submit">
          {isPending ? <SpinnerMini size="1.9rem" /> : 'Create new product'}
        </StyledButton>
      </StyledForm>
    </Container>
  );
}

export default CreateNewProductForm;
