import { useNavigate } from 'react-router-dom';
import LoginForm from '../ui/LoginForm';
import { useAuth } from '../features/authentication/useAuth';
import Spinner from '../ui/Spinner';
import styled from 'styled-components';

const Div = styled.div`
  display: flex;
  justify-content: center;
  font-size: 3rem /* 48px */;
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
  padding-bottom: 2.5rem;
  padding-top: 2.5rem;
  border-width: 2px;
  border-style: solid;
  box-shadow:
    0 10px 15px -3px rgb(0 0 0 / 0.1),
    0 4px 6px -4px rgb(0 0 0 / 0.1);

  @media (min-width: 0px) {
    width: 95%;
  }

  @media (min-width: 400px) {
    width: 85%;
  }

  @media (min-width: 768px) {
    width: 80%;
  }

  @media (min-width: 1024px) {
    width: 70%;
  }

  @media (min-width: 1280px) {
    width: 66.666667%;
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

const P = styled.p`
  cursor: pointer;
  margin-top: 1rem;
  line-height: 1.75rem;
  font-weight: 500;
  color: rgb(22 163 74);

  @media (min-width: 0px) {
    font-size: 0.9rem;
  }

  @media (min-width: 400px) {
    font-size: 1rem;
  }

  @media (min-width: 600px) {
    font-size: 1.125rem;
  }
`;

const P1 = styled.p`
  display: flex;
  gap: 0.5rem;
  margin-top: 0.5rem;
  line-height: 1.75rem;
  font-weight: 500;

  @media (min-width: 0px) {
    font-size: 0.9rem;
  }

  @media (min-width: 400px) {
    font-size: 1rem;
  }

  @media (min-width: 600px) {
    font-size: 1.125rem;
  }
`;

const Span = styled.span`
  color: rgb(120 113 108);
`;

const Span1 = styled.span`
  cursor: pointer;
  color: rgb(22 163 74);
`;

function Login() {
  const navigate = useNavigate();
  const { isAuthenticated, isLoading } = useAuth();

  if (isLoading) return <Spinner />;
  if (isAuthenticated) return <Div>Please logout first</Div>;

  return (
    <Container>
      <Div1>
        <H1>Log in to your account</H1>
        <LoginForm />
        <P onClick={() => navigate('/forgotPassword')}>Forgot Password</P>
        <P1>
          <Span>Didn't have an account -</Span>
          <Span1 onClick={() => navigate('/signup')}>Sign up</Span1>
        </P1>
      </Div1>
    </Container>
  );
}

export default Login;
