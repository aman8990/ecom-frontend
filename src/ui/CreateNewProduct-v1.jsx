import { useForm } from 'react-hook-form';
import styled from 'styled-components';
import { useCreateNewProduct } from '../features/products/useCreateNewProduct';
import SpinnerMini from '../ui/SpinnerMini';

const StyledForm = styled.form`
  margin-top: 2rem;
  width: 30rem;
`;

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 1.25rem;
  line-height: 1.75rem;
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
`;

const StyledButton = styled.button`
  display: flex;
  justify-content: center;
  width: 100%;
  font-weight: 600;
  margin-top: 0.4rem;
  border-radius: 0.125rem;
  background-color: #16a32a;
  padding: 0.25rem 0;
  font-size: 1.25rem;
  color: #fff;
`;

const Span = styled.span`
  font-size: 1rem;
  line-height: 1.5rem;
  color: rgb(248 113 113);
`;

function CreateNewProductForm() {
  const { register, formState, getValues, handleSubmit, reset } = useForm();
  const { errors } = formState;

  const { createNewProduct, isPending, newProduct } = useCreateNewProduct();

  function onSubmit({
    name,
    price,
    photo,
    description,
    imagesData,
    fullDescriptionData,
  }) {
    const images = imagesData.split(',').map((url) => url);

    const fullDescription = fullDescriptionData.split(';').map((e) => e);

    const data = { name, price, photo, description, images, fullDescription };

    // console.log(data);
    createNewProduct(data);

    // reset();
  }

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
        <StyledTextarea
          type="text"
          id="description"
          placeholder="Meet Galaxy S24, the ultimate device"
          {...register('description', {
            required: '* This fiels is required',
          })}
        />
      </StyledDiv>

      <StyledDiv>
        <Label htmlFor="images">
          Product Images &nbsp;
          <Span>{errors?.images?.message}</Span>
        </Label>
        <StyledTextarea
          type="url"
          id="images"
          placeholder="https://i.co/1nTnPfV.jpg,https://i.co/1nFa6fV.jpg,. . ."
          {...register('imagesData', {
            required: '* This filed is required',
          })}
        />
      </StyledDiv>

      <StyledDiv>
        <Label htmlFor="fullDescription">
          Full Description &nbsp;
          <Span>{errors?.fullDescription?.message}</Span>
        </Label>
        <StyledTextarea
          type="text"
          id="fullDescription"
          placeholder="The legacy of Galaxy Note;With the most megapixels;. . . ."
          {...register('fullDescriptionData', {
            required: '* This filed is required',
          })}
        />
      </StyledDiv>

      <StyledButton>
        {isPending ? <SpinnerMini size="1.9rem" /> : 'Create new product'}
      </StyledButton>
    </StyledForm>
  );
}

export default CreateNewProductForm;
