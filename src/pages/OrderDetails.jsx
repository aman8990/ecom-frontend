import styled from 'styled-components';
import OrderDetailsForm from '../ui/OrderDetailsForm';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

function OrderDetails() {
  return (
    <Container>
      <OrderDetailsForm />
    </Container>
  );
}

export default OrderDetails;
