import { useNavigate } from 'react-router-dom';
import { useAuth } from '../features/authentication/useAuth';
import { useEffect } from 'react';
import styled from 'styled-components';
import Spinner from './Spinner';

const FullPage = styled.div`
  height: 100vh;
  background-color: var(--color-grey-50);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 5rem;
`;

const H1 = styled.h1`
  font-size: 3.75rem;
  line-height: 1;
  font-weight: 600;
  color: rgb(87 83 78);
`;

const Button = styled.button`
  margin-top: 2.5rem;
  border-radius: 0.5rem;
  background-color: rgb(34 197 94);
  padding: 1.5rem;
  font-size: 2.25rem;
  line-height: 2.5rem;
  font-weight: 600;
  color: #fff;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: rgb(22 163 74);
  }
`;

function ProtectedRoute({ children }) {
  const navigate = useNavigate();

  const { isLoading, user } = useAuth();
  const userRole = user?.role === 'admin';

  useEffect(
    function () {
      if (!user && !isLoading) navigate('/login');
    },
    [user, isLoading, navigate],
  );

  if (isLoading)
    return (
      <FullPage>
        <Spinner />
      </FullPage>
    );

  if (userRole) return children;

  return (
    <Container>
      <H1>Access Denied</H1>
      <Button onClick={() => navigate('/')}>Go Back</Button>
    </Container>
  );
}

export default ProtectedRoute;
