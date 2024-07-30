import styled from 'styled-components';
import UserDetailForm from '../ui/UserDetailForm';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

function UserDetail() {
  return (
    <Container>
      <UserDetailForm />
    </Container>
  );
}

export default UserDetail;
