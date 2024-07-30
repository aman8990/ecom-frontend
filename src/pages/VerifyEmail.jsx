import styled from 'styled-components';
import VerifyEmailUI from '../ui/VerifyEmailUI';

const Container = styled.div`
  height: 100vh;
`;

function VerifyEmail() {
  return (
    <Container>
      <VerifyEmailUI />
    </Container>
  );
}

export default VerifyEmail;
