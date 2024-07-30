import { useForm } from 'react-hook-form';
import styled from 'styled-components';
import { useUpdatePassword } from '../features/user/useUpdatePassword';

const Container = styled.div`
  display: flex;
  justify-content: center;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-width: 2px;
  border-style: solid;
  border-radius: 0.5rem;
  background-color: #fff;
  box-shadow:
    0 10px 15px -3px rgb(0 0 0 / 0.1),
    0 4px 6px -4px rgb(0 0 0 / 0.1);

  @media (min-width: 0px) {
    width: 95%;
  }

  @media (min-width: 400px) {
    width: 90%;
  }

  @media (min-width: 600px) {
    width: 80%;
  }

  @media (min-width: 768px) {
    width: 70%;
  }

  @media (min-width: 1024px) {
    width: 70%;
  }

  @media (min-width: 1280px) {
    width: 66.666667%;
  }
`;

const H1 = styled.h1`
  margin-bottom: 3rem;
  margin-top: 2.5rem;
  font-size: 3rem;
  line-height: 1;
  color: rgb(87 83 78);
  text-decoration-line: underline;
  text-underline-offset: 5px;

  @media (min-width: 0px) {
    margin-bottom: 1rem;
    margin-top: 2rem;
    font-size: 1.3rem;
    line-height: 1;
  }

  @media (min-width: 400px) {
    margin-bottom: 1rem;
    margin-top: 2rem;
    font-size: 1.5rem;
    line-height: 1;
  }

  @media (min-width: 600px) {
    margin-bottom: 1rem;
    margin-top: 2rem;
    font-size: 2rem;
    line-height: 1;
  }

  @media (min-width: 768px) {
    margin-bottom: 1rem;
    margin-top: 2rem;
    font-size: 2rem;
    line-height: 1;
  }

  @media (min-width: 1024px) {
    margin-bottom: 3rem;
    margin-top: 2.5rem;
    font-size: 3rem;
    line-height: 1;
  }
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 2.5rem;
  margin-bottom: 4rem;

  @media (min-width: 0px) {
    /* margin-left: 3rem; */
  }

  @media (min-width: 400px) {
    /* margin-left: 3rem; */
  }

  @media (min-width: 600px) {
    margin-left: 0;
  }
`;

const StyledDiv = styled.div`
  display: flex;

  @media (min-width: 0px) {
    flex-direction: column;
    font-size: 0.8rem;
    line-height: 1.75rem;
  }

  @media (min-width: 400px) {
    font-size: 0.9rem;
    line-height: 1.75rem;
  }

  @media (min-width: 600px) {
    flex-direction: row;
    gap: 1rem;
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

const StyledLabel = styled.label`
  display: flex;
  flex: 1;
  align-items: center;
  text-align: right;
  font-weight: 600;
  color: rgb(87 83 78);

  @media (min-width: 0px) {
    width: 12rem;
  }

  @media (min-width: 400px) {
    width: 12rem;
  }

  @media (min-width: 600px) {
    width: 13rem;
  }

  @media (min-width: 768px) {
    width: 10rem;
  }

  @media (min-width: 1024px) {
    width: 14rem;
  }

  @media (min-width: 1280px) {
    width: 14rem;
  }
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
    width: 20rem;
  }

  @media (min-width: 600px) {
    width: 14rem;
  }

  @media (min-width: 768px) {
    width: 20rem;
  }

  @media (min-width: 1024px) {
    width: 26rem;
  }
`;

const Span = styled.span`
  position: absolute;

  color: rgb(248 113 113);

  @media (min-width: 0px) {
    top: -1.2rem;
    right: 0;
    font-size: 0.6rem;
  }

  @media (min-width: 600px) {
    top: -1.2rem;
    left: 0;
    font-size: 0.875rem;
  }
`;

const StyledButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 0.25rem;

  @media (min-width: 400px) {
    /* margin-right: -6rem; */
  }

  @media (min-width: 600px) {
    margin-right: -7rem;
  }

  @media (min-width: 768px) {
    margin-right: -8.5rem;
  }

  @media (min-width: 1024px) {
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
  color: #fff;

  @media (min-width: 0px) {
    padding: 0.4rem 2rem;
    font-size: 0.9rem;
  }

  @media (min-width: 400px) {
    padding: 0.4rem 2rem;
    font-size: 0.9rem;
  }

  @media (min-width: 600px) {
    padding: 0.4rem 3rem;
    font-size: 1rem;
  }

  @media (min-width: 768px) {
    padding: 0.4rem 3rem;
    font-size: 1rem;
  }

  @media (min-width: 1024px) {
    padding: 0.4rem 5rem;
    font-size: 1.25rem;
  }
`;

function UpdatePassword() {
  const { register, formState, getValues, handleSubmit, reset } = useForm();
  const { errors } = formState;

  const { updatePassword, isPending } = useUpdatePassword();

  function onSubmit({ passwordCurrent, password }) {
    console.log(passwordCurrent, password);

    if (!passwordCurrent || !password) return;

    updatePassword({ passwordCurrent, password });
    reset();
  }

  return (
    <Container>
      <Wrapper>
        <H1>Update your password</H1>

        <StyledForm onSubmit={handleSubmit(onSubmit)}>
          <StyledDiv>
            <StyledLabel htmlFor="passwordCurrent">
              Current Password
            </StyledLabel>
            <InputWrapper>
              <Span>{errors?.passwordCurrent?.message}</Span>
              <StyledInput
                type="password"
                id="passwordCurrent"
                placeholder="password"
                {...register('passwordCurrent', {
                  required: '* This field is required',
                  minLength: {
                    value: 8,
                    message: '* Please enter your current password',
                  },
                })}
              />
            </InputWrapper>
          </StyledDiv>

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
            <StyledLabel htmlFor="passwordConfirm">
              Confirm Password
            </StyledLabel>
            <InputWrapper>
              <Span>{errors?.passwordConfirm?.message}</Span>
              <StyledInput
                type="password"
                id="passwordConfirm"
                placeholder="xxxxxxxx"
                {...register('passwordConfirm', {
                  required: '* This field is required',
                  validate: (value) =>
                    value === getValues().password ||
                    '* Password need to match',
                })}
              />
            </InputWrapper>
          </StyledDiv>

          <StyledButtonContainer>
            <StyledButton>{isPending ? 'Updating...' : 'Submit'}</StyledButton>
          </StyledButtonContainer>
        </StyledForm>
      </Wrapper>
    </Container>
  );
}

export default UpdatePassword;
