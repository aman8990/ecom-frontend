import styled from 'styled-components';
import { useAuth } from '../features/authentication/useAuth';
import SignupForm from '../ui/SignupForm';
import Spinner from '../ui/Spinner';

const Div = styled.div`
  display: flex;
  justify-content: center;
  font-size: 3rem;
  line-height: 1;
  font-weight: 600;
  color: rgb(87 83 78);
  margin-top: 2.5rem;
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
`;

const Div1 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 2.5rem;
  border-width: 2px;
  border-style: solid;
  border-radius: 0.5rem;
  box-shadow:
    0 10px 15px -3px rgb(0 0 0 / 0.1),
    0 4px 6px -4px rgb(0 0 0 / 0.1);

  @media (min-width: 0px) {
    padding-bottom: 1.75rem;
    padding-top: 2.5rem;
    width: 95%;
  }

  @media (min-width: 400px) {
    padding-bottom: 1.75rem;
    padding-top: 2.5rem;
    width: 85%;
  }

  @media (min-width: 600px) {
    padding-bottom: 1.75rem;
    padding-top: 2.5rem;
    width: 80%;
  }

  @media (min-width: 768px) {
    padding-bottom: 1.75rem;
    padding-top: 2.5rem;
    width: 75%;
  }

  @media (min-width: 1024px) {
    padding-bottom: 1.75rem;
    padding-top: 2.5rem;
    width: 60%;
  }

  @media (min-width: 1280px) {
    padding-bottom: 1.75rem;
    padding-top: 2.5rem;
    width: 55%;
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
    font-size: 1.5rem;
  }

  @media (min-width: 600px) {
    font-size: 1.8rem;
  }

  @media (min-width: 768px) {
    font-size: 2.25rem;
  }
`;

function Signup() {
  const { isAuthenticated, isLoading } = useAuth();

  if (isLoading) return <Spinner />;

  if (isAuthenticated) return <Div>Please Logout to Signup</Div>;

  return (
    <Container>
      <Div1>
        <H1>Please fill these details</H1>
        <SignupForm />
      </Div1>
    </Container>
  );
}

export default Signup;
