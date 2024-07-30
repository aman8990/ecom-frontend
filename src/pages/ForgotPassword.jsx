import styled from 'styled-components';
import ForgotPasswordForm from '../ui/ForgotPasswordForm';

const Container = styled.div`
  display: flex;
  justify-content: center;
`;

const Div = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-width: 2px;
  border-style: solid;
  margin-top: 2.5rem;
  border-radius: 0.5rem;
  box-shadow:
    0 10px 15px -3px rgb(0 0 0 / 0.1),
    0 4px 6px -4px rgb(0 0 0 / 0.1);

  @media (min-width: 0px) {
    padding-bottom: 5rem;
    padding-top: 2.5rem;
    width: 95%;
  }

  @media (min-width: 400px) {
    padding-bottom: 5rem;
    padding-top: 2.5rem;
    width: 85%;
  }

  @media (min-width: 600px) {
    padding-bottom: 5rem;
    padding-top: 2.5rem;
    width: 80%;
  }

  @media (min-width: 768px) {
    padding-bottom: 5rem;
    padding-top: 2.5rem;
    width: 70%;
  }

  @media (min-width: 1024px) {
    padding-bottom: 5rem;
    padding-top: 2.5rem;
    width: 56%;
  }

  @media (min-width: 1280px) {
    padding-bottom: 5rem;
    padding-top: 2.5rem;
    width: 50%;
  }
`;

const H1 = styled.h1`
  display: flex;
  justify-content: center;
  line-height: 2.5rem;
  font-weight: 600;
  color: rgb(87 83 78);

  @media (min-width: 0px) {
    font-size: 1.5rem;
  }

  @media (min-width: 400px) {
    font-size: 1.6rem;
  }

  @media (min-width: 600px) {
    font-size: 1.8rem;
  }

  @media (min-width: 768px) {
    font-size: 2.25rem;
  }
`;

function ForgotPassword() {
  return (
    <Container>
      <Div>
        <H1>Forgot Your Password</H1>
        <ForgotPasswordForm />
      </Div>
    </Container>
  );
}

export default ForgotPassword;
