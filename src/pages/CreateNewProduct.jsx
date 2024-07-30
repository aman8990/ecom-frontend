import styled from 'styled-components';
import CreateNewProductForm from '../ui/CreateNewProductForm';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 5rem;
  margin-top: 2.5rem;
`;

function CreateNewProduct() {
  return (
    <Container>
      <CreateNewProductForm />
    </Container>
  );
}

export default CreateNewProduct;
