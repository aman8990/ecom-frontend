import styled from 'styled-components';
import ResetPasswordUI from '../ui/ResetPasswordUI';

const Container = styled.div`
  height: 100vh;
`;

function ResetPassword() {
  return (
    <Container>
      <ResetPasswordUI />
    </Container>
  );
}

export default ResetPassword;
