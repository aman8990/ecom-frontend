import styled from 'styled-components';
import { formatIndianCurrency } from '../services/formatCurrency';

const Container = styled.div`
  background-color: #fff;
  padding: 1.5rem;
  border-width: 2px;
  border-style: solid;
  border-radius: 0.5rem;
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

function AllOrderList({ order }) {
  const address = `${order?.address.locality}, ${order?.address.city}, ${order?.address.district}, ${order?.address.state}, ${order?.address.pincode}`;

  return (
    <Container>
      <Wrapper>
        <Content>
          <H1>Order id :</H1>
          <H2>{order._id}</H2>
        </Content>

        <Content1>
          <H1>Items : </H1>
          <H2>
            <ul>
              {order.items.map((item) => (
                <li key={item._id}>
                  {item.quantity} x {item.productId.name}
                </li>
              ))}
            </ul>
          </H2>
        </Content1>

        <Content>
          <H1>Amount :</H1>
          <H2>{formatIndianCurrency(order.amount)}</H2>
        </Content>

        <Content1>
          <H1>Address :</H1>
          <H2>{address}</H2>
        </Content1>

        <Content>
          <H1>Phone :</H1>
          <H2>{order.phone}</H2>
        </Content>
      </Wrapper>
    </Container>
  );
}

export default AllOrderList;
