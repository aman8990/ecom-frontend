import styled from 'styled-components';
import { useUpdateOrder } from '../features/orders/useUpdateOrder';
import Spinner from './Spinner';
import { formatIndianCurrency } from '../services/formatCurrency';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-width: 2px;
  border-radius: 0.5rem;
  border-style: solid;
  background-color: #fff;
  padding: 1.5rem;
  box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.25rem;
`;

const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
`;

const Content1 = styled.div`
  display: flex;
  flex-direction: column;
`;

const H1 = styled.h1`
  font-weight: 600;

  @media (min-width: 300px) {
    font-size: 0.8rem;
  }

  @media (min-width: 540px) {
    font-size: 1rem;
    line-height: 1.75rem;
  }

  @media (min-width: 768px) {
    font-size: 1.1rem;
    line-height: 1.75rem;
  }

  @media (min-width: 1024px) {
    font-size: 1.25rem;
    line-height: 1.75rem;
  }
`;

const H2 = styled.h2`
  margin-top: 0.25rem;
  color: rgb(120 113 108);

  @media (min-width: 300px) {
    font-size: 0.8rem;
  }

  @media (min-width: 540px) {
    font-size: 1rem;
    line-height: 1.75rem;
  }

  @media (min-width: 768px) {
    font-size: 1.1rem;
    line-height: 1.75rem;
  }

  @media (min-width: 1024px) {
    font-size: 1.125rem;
    line-height: 1.75rem;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2.5rem;
  margin-top: 1rem;
`;

const Button = styled.button`
  background-color: rgb(22 163 74);
  color: #fff;
  font-weight: 600;
  padding-left: 0.75rem;
  padding-right: 0.75rem;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  border-radius: 0.125rem;

  @media (min-width: 300px) {
    font-size: 0.7rem;
  }

  @media (min-width: 540px) {
    font-size: 1rem;
  }
`;

function AcceptedOrderList({ acceptedOrder }) {
  const { updateOrder, isPending, isSuccess } = useUpdateOrder();

  const id = acceptedOrder._id;

  function handleClick() {
    const data = { id: id, deliveryStatus: 'inTransit' };
    updateOrder(data);
  }

  const address = `${acceptedOrder?.address.locality}, ${acceptedOrder?.address.city}, ${acceptedOrder?.address.district}, ${acceptedOrder?.address.state}, ${acceptedOrder?.address.pincode}`;

  if (isPending || isSuccess) return <Spinner />;

  return (
    <Container className="border-stone-100">
      <Wrapper>
        <Content>
          <H1>Order id :</H1>
          <H2>{acceptedOrder._id}</H2>
        </Content>

        <Content1>
          <H1>Items : </H1>
          <H2>
            <ul>
              {acceptedOrder.items.map((item) => (
                <li key={item._id}>
                  {item.quantity} x {item.productId.name}
                </li>
              ))}
            </ul>
          </H2>
        </Content1>

        <Content>
          <H1>Amount :</H1>
          <H2>{formatIndianCurrency(acceptedOrder.amount)}</H2>
        </Content>

        <Content1>
          <H1>Address :</H1>
          <H2>{address}</H2>
        </Content1>

        <Content>
          <H1>Phone :</H1>
          <H2>{acceptedOrder.phone}</H2>
        </Content>
      </Wrapper>

      <ButtonContainer>
        <Button onClick={handleClick}>Change to InTransit</Button>
      </ButtonContainer>
    </Container>
  );
}

export default AcceptedOrderList;
