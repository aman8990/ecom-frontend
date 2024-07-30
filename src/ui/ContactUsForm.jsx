import { useForm } from 'react-hook-form';
import styled from 'styled-components';
import { useContactUs } from '../features/user/useContactUs';
import SpinnerMini from './SpinnerMini';

const StyledForm = styled.form`
  @media (min-width: 0px) {
    width: 15rem;
    margin-top: 1.2rem;
    margin-bottom: 2.5rem;
  }

  @media (min-width: 400px) {
    width: 19rem;
    margin-top: 1.2rem;
    margin-bottom: 2.5rem;
  }

  @media (min-width: 600px) {
    width: 25rem;
    margin-top: 3.2rem;
    margin-bottom: 5rem;
  }

  @media (min-width: 768px) {
    width: 30rem;
  }
`;

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  line-height: 1.75rem;

  @media (min-width: 0px) {
    font-size: 1.1rem;
  }

  @media (min-width: 400px) {
    font-size: 1.1rem;
  }

  @media (min-width: 600px) {
    font-size: 1.25rem;
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

  @media (min-width: 0px) {
    font-size: 1rem;
    line-height: 1.75rem;
    padding: 0.15rem 0.3rem;
  }

  @media (min-width: 400px) {
    font-size: 1rem;
    line-height: 1.75rem;
    padding: 0.15rem 0.3rem;
  }

  @media (min-width: 600px) {
    font-size: 1.25rem;
    line-height: 1.75rem;
    padding: 0.25rem 0.5rem;
  }
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

  @media (min-width: 0px) {
    font-size: 1rem;
    line-height: 1.75rem;
    padding: 0.15rem 0.3rem;
  }

  @media (min-width: 400px) {
    font-size: 1rem;
    line-height: 1.75rem;
    padding: 0.15rem 0.3rem;
  }

  @media (min-width: 600px) {
    font-size: 1.25rem;
    line-height: 1.75rem;
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

  @media (min-width: 0px) {
    padding: 0.15rem 0;
    font-size: 1.1rem;
  }

  @media (min-width: 400px) {
    padding: 0.15rem 0;
    font-size: 1.1rem;
  }

  @media (min-width: 600px) {
    padding: 0.25rem 0;
    font-size: 1.25rem;
  }
`;

const Span = styled.span`
  font-size: 1rem;
  line-height: 1.5rem;
  color: rgb(248 113 113);
`;

function ContactUsForm() {
  const { register, formState, handleSubmit, reset } = useForm();
  const { errors } = formState;

  const { contactUs, isPending } = useContactUs();

  function onSubmit(data) {
    contactUs(data);
    reset();
  }

  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
      <StyledDiv>
        <Label htmlFor="name">
          Full Name &nbsp;
          <Span>{errors?.name?.message}</Span>
        </Label>
        <StyledInput
          type="text"
          id="name"
          placeholder="Aman kumar"
          {...register('name', { required: '* This field is required' })}
        />
      </StyledDiv>

      <StyledDiv>
        <Label htmlFor="email">
          Email &nbsp;
          <Span>{errors?.email?.message}</Span>
        </Label>
        <StyledInput
          type="email"
          id="email"
          placeholder="abc@xyz.com"
          autoComplete="new-email"
          {...register('email', {
            required: '* This field is required',
            pattern: {
              value: /\S+@\S+\.\S+/,
              message: '* Please provide a valid email address',
            },
          })}
        />
      </StyledDiv>

      <StyledDiv>
        <Label htmlFor="phone">
          Phone &nbsp;
          <Span>{errors?.phone?.message}</Span>
        </Label>
        <StyledInput
          type="tel"
          id="phone"
          placeholder="9876543210"
          maxLength="10"
          onInput={(e) => {
            e.target.value = e.target.value.replace(/[^0-9]/g, '');
          }}
          {...register('phone', {
            required: '* This field is required',
            minLength: {
              value: 10,
              message: '* Phone must have 10 digits',
            },
            pattern: {
              value: /^[0-9]+$/,
              message: '* Only digits are allowed',
            },
          })}
        />
      </StyledDiv>

      <StyledDiv>
        <Label htmlFor="subject">
          Subject &nbsp;
          <Span>{errors?.subject?.message}</Span>
        </Label>
        <StyledTextarea
          type="text"
          id="subject"
          maxLength="30"
          placeholder="Why you are contacting us"
          autoComplete="new-subject"
          {...register('subject', {
            required: '* This fiels is required',
          })}
        />
      </StyledDiv>

      <StyledDiv>
        <Label htmlFor="description">
          Description &nbsp;
          <Span>{errors?.description?.message}</Span>
        </Label>
        <StyledTextarea
          type="text"
          id="description"
          placeholder="Explain your problem"
          {...register('description', {
            required: '* This filed is required',
            minLength: {
              value: 60,
              message: '* Description must have more than 25 letters',
            },
          })}
        />
      </StyledDiv>

      <StyledButton>
        {isPending ? <SpinnerMini size="1.9rem" /> : 'Send'}
      </StyledButton>
    </StyledForm>
  );
}

export default ContactUsForm;
