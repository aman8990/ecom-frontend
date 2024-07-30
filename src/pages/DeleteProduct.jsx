import styled from 'styled-components';
import DeleteProductForm from '../ui/DeleteProductForm';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

function DeleteProduct() {
  return (
    <Container>
      <DeleteProductForm />
    </Container>
  );
}

export default DeleteProduct;
