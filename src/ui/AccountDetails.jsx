import styled from 'styled-components';
import { useAuth } from '../features/authentication/useAuth';
import Spinner from './Spinner';
import UserInfo from './UserInfo';
import UserSettings from './UserSettings';

const H1 = styled.h1`
  display: flex;
  justify-content: center;
  margin-top: 5rem;
  font-size: 3rem;
  line-height: 1;
  font-weight: 600;
  color: rgb(87 83 78);
`;

function AccountDetails() {
  const { user, isLoading, isAuthenticated, error } = useAuth();

  if (isLoading) return <Spinner />;
  if (error) return <H1>Error in Fetching User Data</H1>;
  if (!isAuthenticated) return <H1>Please login first</H1>;

  return (
    <div>
      <UserInfo user={user} />
      <UserSettings user={user} />
    </div>
  );
}

export default AccountDetails;
