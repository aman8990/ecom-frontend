import styled from 'styled-components';
import UpdateProductForm from '../ui/UpdateProductForm';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

function UpdateProduct() {
  return (
    <Container>
      <UpdateProductForm />
    </Container>
  );
}

export default UpdateProduct;
