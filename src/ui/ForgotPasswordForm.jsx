import { useState } from 'react';
import styled from 'styled-components';
import SpinnerMini from './SpinnerMini';
import { useForgotPassword } from '../features/authentication/useForgotPassword';

const StyledForm = styled.form`
  margin-top: 2.5rem;

  @media (min-width: 0px) {
    width: 15rem;
  }

  @media (min-width: 400px) {
    width: 19rem;
  }

  @media (min-width: 600px) {
    width: 25rem;
  }

  @media (min-width: 768px) {
    width: 30rem;
  }
`;

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  line-height: 1.75rem;

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

  @media (min-width: 400px) {
    padding: 0.15rem 0;
    font-size: 1.1rem;
  }

  @media (min-width: 600px) {
    padding: 0.25rem 0;
    font-size: 1.25rem;
  }
`;

function ForgotPasswordForm() {
  const [email, setEmail] = useState('');
  const { forgotPassword, isPending } = useForgotPassword();

  function handleSubmit(e) {
    e.preventDefault();
    if (!email) return;

    forgotPassword(
      { email },
      {
        onSettled: () => {
          setEmail('');
        },
      },
    );
  }

  return (
    <StyledForm onSubmit={handleSubmit}>
      <StyledDiv>
        <Label htmlFor="email">Enter your email</Label>
        <StyledInput
          type="email"
          id="email"
          autoComplete="new-email"
          placeholder="abc@xyz.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </StyledDiv>

      <StyledButton>
        {isPending ? <SpinnerMini size="1.9rem" /> : 'Submit'}
      </StyledButton>
    </StyledForm>
  );
}

export default ForgotPasswordForm;
