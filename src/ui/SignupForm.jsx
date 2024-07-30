import { useForm } from 'react-hook-form';
import styled from 'styled-components';
import { useSignup } from '../features/authentication/useSignup';
import SpinnerMini from './SpinnerMini';

const StyledForm = styled.form`
  @media (min-width: 0px) {
    width: 15rem;
    margin-top: 1.5rem;
    margin-bottom: 2.5rem;
  }

  @media (min-width: 400px) {
    width: 19rem;
    margin-top: 1.5rem;
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

function SignupForm() {
  const { register, formState, getValues, handleSubmit, reset } = useForm();
  const { errors } = formState;

  const { signup, isPending } = useSignup();

  function onSubmit(userData) {
    console.log(userData);
    signup(userData, {
      onSuccess: () => reset(),
    });
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
          maxLength="10"
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
          autoComplete="new-phone"
          {...register('phone', {
            required: '* This field is required',
            minLength: {
              value: 10,
              message: '* Phone must have 10 digits',
            },
          })}
        />
      </StyledDiv>

      <StyledDiv>
        <Label htmlFor="password">
          Password &nbsp;
          <Span>{errors?.password?.message}</Span>
        </Label>
        <StyledInput
          type="password"
          id="password"
          placeholder="xxxxxxxx"
          autoComplete="new-password"
          {...register('password', {
            required: '* This fiels is required',
            minLength: {
              value: 8,
              message: '* Password needs a minimum of 8 characters',
            },
          })}
        />
      </StyledDiv>

      <StyledDiv>
        <Label htmlFor="passwordConfirm">
          Confirm Password &nbsp;
          <Span>{errors?.passwordConfirm?.message}</Span>
        </Label>
        <StyledInput
          type="password"
          id="passwordConfirm"
          placeholder="xxxxxxxx"
          {...register('passwordConfirm', {
            required: '* This filed is required',
            validate: (value) =>
              value === getValues().password || '* Password need to match',
          })}
        />
      </StyledDiv>

      <StyledButton>
        {isPending ? <SpinnerMini size="1.9rem" /> : 'Sign up'}
      </StyledButton>
    </StyledForm>
  );
}

export default SignupForm;
