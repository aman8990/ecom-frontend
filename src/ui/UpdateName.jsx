import { useState } from 'react';
import styled, { css } from 'styled-components';
import { useUpdateUser } from '../features/user/useUpdateUser';

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
  margin-top: 2.5rem;
  width: 98.9vw;
  margin-bottom: 4rem;
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
    width: 14rem;
  }

  @media (min-width: 1024px) {
    width: 24rem;
  }

  @media (min-width: 1280px) {
    width: 24rem;
  }
`;

const StyledInput = styled.input`
  flex: 2;
  margin-bottom: 1rem;
  margin-top: 0.5rem;
  width: 100%;
  border-radius: 0.125rem;
  border-width: 2px;
  border-color: rgb(168 162 158);
  padding: 0.25rem 0.5rem;
  outline: none;

  ${({ disabled }) =>
    disabled &&
    css`
      cursor: not-allowed;
      background-color: #e4e4e4;
      color: #ffffff;
    `}

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

const StyledButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 0.25rem;

  @media (min-width: 0px) {
    /* margin-right: -5rem; */
  }

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

function UpdateName({ user }) {
  const { updateMe, isPending } = useUpdateUser();
  const [name, setName] = useState('');
  const [photo, setPhoto] = useState('');
  const [phone, setPhone] = useState('');

  function handleSubmit(e) {
    console.log(name);
    e.preventDefault();
    const userData = {};
    if (name) userData.name = name;
    if (photo) userData.photo = photo;
    if (phone) userData.phone = phone;
    // console.log(updatedData);

    if (Object.keys(userData).length > 0) {
      updateMe(userData);
      setName('');
      setPhoto('');
      setPhone('');
    }
  }

  return (
    <Container>
      <Wrapper>
        <H1>Update your info</H1>

        <StyledForm onSubmit={handleSubmit}>
          <StyledDiv>
            <StyledLabel htmlFor="email">Email Address</StyledLabel>
            <StyledInput type="email" disabled placeholder={user.email} />
          </StyledDiv>

          <StyledDiv>
            <StyledLabel htmlFor="name">Full Name</StyledLabel>
            <StyledInput
              type="name"
              id="name"
              value={name}
              placeholder="Aman"
              onChange={(e) => setName(e.target.value)}
            />
          </StyledDiv>

          <StyledDiv>
            <StyledLabel htmlFor="phone">Phone No.</StyledLabel>
            <StyledInput
              type="tel"
              id="phone"
              value={phone}
              maxLength="10"
              placeholder="9876543210"
              onChange={(e) => setPhone(e.target.value)}
            />
          </StyledDiv>

          <StyledDiv>
            <StyledLabel htmlFor="photo">User Photo</StyledLabel>
            <StyledInput
              type="text"
              id="photo"
              value={photo}
              placeholder="Enter your photo link here"
              onChange={(e) => setPhoto(e.target.value)}
            />
          </StyledDiv>

          <StyledButtonContainer>
            <StyledButton $variation="green" type="submit">
              {isPending ? 'Updating...' : 'Submit'}
            </StyledButton>
          </StyledButtonContainer>
        </StyledForm>
      </Wrapper>
    </Container>
  );
}

export default UpdateName;
