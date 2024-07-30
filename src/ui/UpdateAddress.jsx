import { useForm } from 'react-hook-form';
import styled from 'styled-components';
import { useUpdateUser } from '../features/user/useUpdateUser';
import Spinner from './Spinner';

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
  margin-bottom: 4rem;
  margin-top: 2.5rem;
  width: 98.9vw;
`;

const StyledDiv = styled.div`
  display: flex;

  @media (min-width: 0px) {
    flex-direction: column;
    font-size: 0.7rem;
    line-height: 1.75rem;
  }

  @media (min-width: 400px) {
    font-size: 0.9rem;
    line-height: 1.75rem;
  }

  @media (min-width: 600px) {
    flex-direction: row;
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
    width: 14rem;
  }

  @media (min-width: 400px) {
    width: 20rem;
  }

  @media (min-width: 600px) {
    width: 13rem;
  }

  @media (min-width: 768px) {
    width: 8rem;
  }

  @media (min-width: 1024px) {
    width: 10rem;
  }

  @media (min-width: 1280px) {
    width: 10rem;
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
  border-color: rgb(168 162 158);
  border-width: 2px;
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

  @media (min-width: 600px) {
    /* width: 16rem; */
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
  top: -1.2rem;
  left: 0;
  font-size: 0.875rem;
  color: rgb(248 113 113);
`;

const StyledButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 0.25rem;

  @media (min-width: 400px) {
    /* margin-right: -6rem; */
  }

  @media (min-width: 600px) {
    margin-right: -7.5rem;
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

function UpdateAddress({ user }) {
  const locality = user.address?.locality || '';
  const city = user.address?.city || '';
  const district = user.address?.district || '';
  const state = user.address?.state || '';
  const pincode = user.address?.pincode || '';

  const { register, formState, handleSubmit } = useForm({
    defaultValues: {
      locality: locality,
      city: city,
      district: district,
      state: state,
      pincode: pincode,
    },
  });
  const { errors } = formState;

  const { updateMe, isPending } = useUpdateUser();

  function onSubmit(userData) {
    updateMe(userData);
  }

  if (isPending) return <Spinner />;

  return (
    <Container>
      <Wrapper>
        <H1>Update your address</H1>

        <StyledForm onSubmit={handleSubmit(onSubmit)}>
          <StyledDiv>
            <StyledLabel htmlFor="locality">Locality</StyledLabel>
            <InputWrapper>
              <Span>{errors?.locality?.message}</Span>
              <StyledInput
                type="text"
                id="locality"
                placeholder="Khatla"
                {...register('locality', {
                  required: '* This field is required',
                })}
              />
            </InputWrapper>
          </StyledDiv>

          <StyledDiv>
            <StyledLabel htmlFor="city">City</StyledLabel>
            <InputWrapper>
              <Span>{errors?.city?.message}</Span>
              <StyledInput
                type="text"
                id="city"
                placeholder="Safidon"
                {...register('city', {
                  required: '* This field is required',
                })}
              />
            </InputWrapper>
          </StyledDiv>

          <StyledDiv>
            <StyledLabel htmlFor="district">District</StyledLabel>
            <InputWrapper>
              <Span>{errors?.district?.message}</Span>
              <StyledInput
                type="text"
                id="district"
                placeholder="Jind"
                {...register('district', {
                  required: '* This field is required',
                })}
              />
            </InputWrapper>
          </StyledDiv>

          <StyledDiv>
            <StyledLabel htmlFor="state">State</StyledLabel>
            <InputWrapper>
              <Span>{errors?.state?.message}</Span>
              <StyledInput
                type="text"
                id="state"
                placeholder="Haryana"
                {...register('state', {
                  required: '* This field is required',
                })}
              />
            </InputWrapper>
          </StyledDiv>

          <StyledDiv>
            <StyledLabel htmlFor="pincode">Pincode</StyledLabel>
            <InputWrapper>
              <Span>{errors?.pincode?.message}</Span>
              <StyledInput
                type="number"
                id="pincode"
                placeholder="126112"
                {...register('pincode', {
                  required: '* This field is required',
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

export default UpdateAddress;
