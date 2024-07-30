import { useForm } from 'react-hook-form';
import styled from 'styled-components';
import { useUpdateProduct } from '../features/products/useUpdateProduct';
import { useEffect, useState } from 'react';
import SpinnerMini from '../ui/SpinnerMini';
import Spinner from './Spinner';

const StyledForm = styled.form`
  margin-bottom: 5rem;
  border-width: 2px;
  border-style: solid;
  border-radius: 0.125rem;
  background-color: #fff;

  @media (min-width: 300px) {
    width: 90%;
    padding: 1rem 1rem;
  }

  @media (min-width: 540px) {
    width: 80%;
    padding: 3rem 3rem;
  }

  @media (min-width: 768px) {
    width: 85%;
    padding: 3rem 3rem;
  }

  @media (min-width: 1024px) {
    width: 75%;
    padding: 3rem 5rem;
  }

  @media (min-width: 1280px) {
    width: 66.666667%;
    padding: 3rem 7rem;
  }
`;

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 300px) {
    font-size: 0.9rem;
    line-height: 1.5rem;
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
  font-weight: 600;
  color: rgb(87 83 78);
`;

const StyledTextarea = styled.textarea`
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

const TextAreaContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  width: 107%;
`;

const TextAreaContainer1 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 0.5rem;
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
    padding: 0.2rem 0;
    font-size: 0.9rem;
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

  @media (min-width: 768px) {
    font-size: 0.9rem;
  }

  @media (min-width: 1024px) {
    font-size: 1rem;
  }
`;

function UpdateProduct({ product }) {
  const [imagesData, setImagesData] = useState(product?.images || []);
  const [fullDescriptions, setFullDescriptions] = useState(
    product?.fullDescription || [],
  );

  const { register, formState, handleSubmit } = useForm({
    defaultValues: {
      name: product?.name,
      price: product?.price,
      photo: product?.photo,
      description: product?.description,
    },
  });

  const { errors } = formState;
  const { updateProduct, updatedProduct, isPending } = useUpdateProduct();

  useEffect(() => {
    if (updatedProduct && updatedProduct._id === product._id) {
      setImagesData(updatedProduct.images);
      setFullDescriptions(updatedProduct.fullDescription);
    }
  }, [updatedProduct, product._id]);

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

  function onSubmit({ name, price, photo, description }) {
    const data = {
      name,
      price,
      photo,
      description,
      images: imagesData.filter((url) => url.trim() !== ''),
      fullDescription: fullDescriptions.filter((desc) => desc.trim() !== ''),
    };

    updateProduct({ id: product._id, data });
  }

  if (isPending) return <Spinner />;

  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
      <StyledDiv>
        <Label htmlFor="name">
          Product Name &nbsp;
          <Span>{errors?.name?.message}</Span>
        </Label>
        <StyledInput
          type="text"
          id="name"
          placeholder="Samsung s24"
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
          placeholder="https://i.ibb.co/1nTnPfV/download.jpg"
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
        <StyledInput
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
          <TextAreaContainer key={index}>
            <StyledTextarea
              type="url"
              placeholder={`Image ${index + 1}`}
              value={image}
              onChange={(e) => handleImageDataChange(index, e)}
            />
            <TextAreaContainer1>
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
            </TextAreaContainer1>
          </TextAreaContainer>
        ))}
      </StyledDiv>

      <StyledDiv>
        <Label>Full Description &nbsp;</Label>
        {fullDescriptions.map((fullDescription, index) => (
          <TextAreaContainer key={index}>
            <StyledTextarea
              type="text"
              placeholder={`Description ${index + 1}`}
              value={fullDescription}
              onChange={(e) => handleFullDescriptionChange(index, e)}
            />
            <TextAreaContainer1>
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
            </TextAreaContainer1>
          </TextAreaContainer>
        ))}
      </StyledDiv>

      <StyledButton type="submit">
        {isPending ? <SpinnerMini size="1.9rem" /> : 'Update Product'}
      </StyledButton>
    </StyledForm>
  );
}

export default UpdateProduct;
