import { useSearchParams } from 'react-router-dom';
import Spinner from '../ui/Spinner';
import { useVerifyEmail } from '../features/authentication/useVerifyEmail';
import { useEffect } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 5rem;
`;

const Container1 = styled.div`
  display: flex;
  justify-content: center;
  line-height: 1;
  font-weight: 600;
  color: rgb(87 83 78);

  @media (min-width: 0px) {
    padding-top: 5rem;
    font-size: 1.5rem;
  }

  @media (min-width: 500px) {
    padding-top: 5rem;
    font-size: 2rem;
  }

  @media (min-width: 768px) {
    padding-top: 5rem;
    font-size: 3rem;
  }
`;

const Container2 = styled.div`
  display: flex;
  justify-content: center;
  line-height: 1;
  font-weight: 600;
  color: rgb(87 83 78);

  @media (min-width: 0px) {
    padding-top: 5rem;
    font-size: 0.8rem;
  }

  @media (min-width: 400px) {
    padding-top: 5rem;
    font-size: 1.2rem;
  }

  @media (min-width: 500px) {
    padding-top: 5rem;
    font-size: 1.5rem;
  }

  @media (min-width: 768px) {
    padding-top: 5rem;
    font-size: 3rem;
  }
`;

function VerifyEmailUI() {
  const [searchParams] = useSearchParams();
  const token = searchParams.get('token');

  const { verifyEmail, isPending, isError, isSuccess } = useVerifyEmail();

  useEffect(
    function () {
      if (token) {
        verifyEmail({ token });
      }
    },
    [token, verifyEmail],
  );

  if (isPending) {
    return (
      <Container>
        <Spinner />
      </Container>
    );
  }

  if (isSuccess) {
    return <Container2>Email Verified, Redirecting you to website</Container2>;
  }

  if (isError) {
    return <Container1>Token is Invalid or Expired</Container1>;
  }
}

export default VerifyEmailUI;
