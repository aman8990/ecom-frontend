import { useForm } from 'react-hook-form';
import styled from 'styled-components';
import { useResetPassword } from '../features/authentication/useResetPassword';

const H1 = styled.h1`
  display: flex;
  justify-content: center;
  line-height: 1;
  font-weight: 600;
  color: rgb(87 83 78);

  @media (min-width: 0px) {
    padding-top: 2rem;
    font-size: 1rem;
  }

  @media (min-width: 400px) {
    padding-top: 3rem;
    font-size: 1.4rem;
  }

  @media (min-width: 500px) {
    padding-top: 3rem;
    font-size: 1.8rem;
  }

  @media (min-width: 768px) {
    padding-top: 5rem;
    font-size: 2rem;
  }

  @media (min-width: 1024px) {
    padding-top: 5rem;
    font-size: 3rem;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 5rem;
  font-size: 3rem;
  line-height: 1;
  font-weight: 600;
  color: rgb(87 83 78);
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 2.5rem;
  margin-bottom: 4rem;
`;

const StyledDiv = styled.div`
  display: flex;
  font-size: 1.25rem;
  line-height: 1.75rem;

  @media (min-width: 0px) {
    flex-direction: column;
  }

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const StyledLabel = styled.label`
  display: flex;
  flex: 1;
  width: 14rem;
  align-items: center;
  text-align: right;
  font-weight: 600;
  color: rgb(87 83 78);
`;

const InputWrapper = styled.div`
  display: flex;
  flex: 2;
  position: relative;
  flex-direction: column;
`;

const StyledInput = styled.input`
  margin-bottom: 1rem;
  margin-top: 0.5rem;
  border-radius: 0.125rem;
  border-width: 2px;
  border-color: rgb(168 162 158);
  padding: 0.25rem 0.5rem;
  outline: none;

  @media (min-width: 400px) {
    width: 16rem;
  }

  @media (min-width: 400px) {
    width: 20rem;
  }

  @media (min-width: 500px) {
    width: 22rem;
  }

  @media (min-width: 600px) {
    width: 26rem;
  }
`;

const Span = styled.span`
  position: absolute;
  top: -1.2rem;
  left: 0;
  font-size: 0.875rem;
  color: rgb(248 113 113);
`;

const StyledButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 0.25rem;
  font-size: 1.25rem;
  line-height: 1.75rem;

  @media (min-width: 0px) {
    margin-right: 0;
  }

  @media (min-width: 768px) {
    margin-right: -13rem;
  }
`;

const StyledButton = styled.button`
  display: flex;
  justify-content: center;
  width: 20%;
  border-radius: 0.125rem;
  background-color: #16a32a;
  font-weight: 600;
  padding: 0.4rem 5rem;
  font-size: 1.25rem;
  color: #fff;
`;

function ResetPasswordForm({ token }) {
  const { register, formState, getValues, handleSubmit, reset } = useForm();
  const { errors } = formState;

  const { resetPassword, isPending, isSuccess } = useResetPassword();

  function onSubmit({ password }) {
    if (!password) return;

    resetPassword({ token, password });
    reset();
  }

  if (isSuccess) return <H1>Redirecting you to website</H1>;

  return (
    <Container>
      <H1>Token Verified, Change Your Password</H1>

      <StyledForm onSubmit={handleSubmit(onSubmit)}>
        <StyledDiv>
          <StyledLabel htmlFor="password">Password</StyledLabel>
          <InputWrapper>
            <Span>{errors?.password?.message}</Span>
            <StyledInput
              type="password"
              id="password"
              placeholder="xxxxxxxx"
              {...register('password', {
                required: '* This field is required',
                minLength: {
                  value: 8,
                  message: '* Password needs a minimum of 8 characters',
                },
              })}
            />
          </InputWrapper>
        </StyledDiv>

        <StyledDiv>
          <StyledLabel htmlFor="passwordConfirm">Confirm Password</StyledLabel>
          <InputWrapper>
            <Span>{errors?.passwordConfirm?.message}</Span>
            <StyledInput
              type="password"
              id="passwordConfirm"
              placeholder="xxxxxxxx"
              {...register('passwordConfirm', {
                required: '* This field is required',
                validate: (value) =>
                  value === getValues().password || '* Password need to match',
              })}
            />
          </InputWrapper>
        </StyledDiv>

        <StyledButtonContainer>
          <StyledButton>{isPending ? 'Updating...' : 'Submit'}</StyledButton>
        </StyledButtonContainer>
      </StyledForm>
    </Container>
  );
}

export default ResetPasswordForm;
