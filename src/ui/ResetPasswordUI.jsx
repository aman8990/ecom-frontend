import { useSearchParams } from 'react-router-dom';
import Spinner from '../ui/Spinner';
import { useEffect } from 'react';
import { useVerifyToken } from '../features/authentication/useVerifyToken';
import ResetPasswordForm from './ResetPasswordForm';
import styled from 'styled-components';

const H1 = styled.h1`
  display: flex;
  justify-content: center;
  line-height: 1;
  font-weight: 600;
  color: rgb(87 83 78);

  @media (min-width: 0px) {
    margin-top: 2.5rem;
    font-size: 2rem;
  }

  @media (min-width: 500px) {
    margin-top: 2.5rem;
    font-size: 3rem;
  }
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 5rem;
`;

function ResetPasswordUI() {
  const [searchParams] = useSearchParams();
  const token = searchParams.get('token');

  const { verifyToken, isPending, isError, isSuccess } = useVerifyToken();

  useEffect(
    function () {
      if (token) {
        verifyToken({ token });
      }
    },
    [token, verifyToken],
  );

  if (!token) {
    return <H1>No token found</H1>;
  }

  if (isPending) {
    return (
      <Container>
        <Spinner />
      </Container>
    );
  }

  if (isSuccess) {
    return (
      <div>
        <ResetPasswordForm token={token} />
      </div>
    );
  }

  if (isError) {
    return <H1>Token is Invalid or Expired</H1>;
  }
}

export default ResetPasswordUI;
