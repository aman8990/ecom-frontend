import { useSearchParams } from 'react-router-dom';
import { useUserOrder } from '../features/orders/useUserOrder';
import { formatIndianCurrency } from '../services/formatCurrency';
import Spinner from './Spinner';
import styled from 'styled-components';

const H1 = styled.h1`
  display: flex;
  justify-content: center;
  margin-top: 2.5rem;
  line-height: 1;
  font-weight: 600;
  color: rgb(87 83 78);

  @media (min-width: 0px) {
    font-size: 1rem;
  }

  @media (min-width: 400px) {
    font-size: 1.3rem;
  }

  @media (min-width: 600px) {
    font-size: 1.8rem;
  }

  @media (min-width: 768px) {
    font-size: 2rem;
  }

  @media (min-width: 1024px) {
    font-size: 3rem;
  }
`;

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 2.5rem;

  @media (min-width: 0px) {
    margin-top: 1rem;
  }

  @media (min-width: 400px) {
    margin-top: 1rem;
  }

  @media (min-width: 600px) {
    margin-top: 2.5rem;
  }
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  padding: 1.5rem;
  margin-top: 1.5rem;
  border-width: 2px;
  border-radius: 0.5rem;
  box-shadow:
    0 10px 15px -3px rgb(0 0 0 / 0.1),
    0 4px 6px -4px rgb(0 0 0 / 0.1);

  @media (min-width: 0px) {
    width: 95%;
  }

  @media (min-width: 400px) {
    width: 90%;
  }

  @media (min-width: 600px) {
    width: 80%;
  }

  @media (min-width: 768px) {
    width: 80%;
  }

  @media (min-width: 1024px) {
    width: 50%;
  }
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

const H2 = styled.h1`
  font-weight: 600;

  @media (min-width: 0px) {
    font-size: 0.8rem;
    line-height: 1.75rem;
  }

  @media (min-width: 400px) {
    font-size: 0.8rem;
    line-height: 1.75rem;
  }

  @media (min-width: 600px) {
    font-size: 1rem;
    line-height: 1.75rem;
  }

  @media (min-width: 768px) {
    font-size: 1.25rem;
    line-height: 1.75rem;
  }
`;

const H3 = styled.h1`
  margin-top: 0.25rem;
  color: rgb(120 113 108);

  @media (min-width: 0px) {
    font-size: 0.8rem;
  }

  @media (min-width: 400px) {
    font-size: 0.8rem;
  }

  @media (min-width: 600px) {
    font-size: 0.9rem;
    line-height: 1.75rem;
  }

  @media (min-width: 768px) {
    font-size: 1.125rem;
    line-height: 1.75rem;
  }
`;

function UserOrder() {
  const [searchParams] = useSearchParams();
  const id = searchParams.get('id');
  const { userOrder, isLoading, error } = useUserOrder({ id });
  const order = userOrder ? userOrder[0] : {};
  console.log(userOrder);

  const address = `${order?.address?.locality}, ${order?.address?.city}, ${order?.address?.district}, ${order?.address?.state}, ${order?.address?.pincode}`;

  if (isLoading) return <Spinner />;
  if (error) return <H1>Error in Fetching Order</H1>;

  return (
    <>
      <H1>Order #{order?._id}</H1>

      <MainContainer>
        <Container>
          <Wrapper>
            <Content>
              <H2>Name :</H2>
              <H3>{order?.name}</H3>
            </Content>

            <Content>
              <H2>Phone :</H2>
              <H3>{order?.phone}</H3>
            </Content>

            <Content>
              <H2>Email :</H2>
              <H3>{order?.email}</H3>
            </Content>

            <Content>
              <H2>Address :</H2>
              <H3>{address}</H3>
            </Content>

            <Content1>
              <H2>Items : </H2>
              {order?.items.map((item) => (
                <div key={item._id}>
                  <H3>
                    {item.quantity} x {item.productId.name}
                  </H3>
                  <H2>({formatIndianCurrency(item.quantity * item.price)})</H2>
                </div>
              ))}
            </Content1>

            <Content>
              <H2>Amount :</H2>
              <H3>{formatIndianCurrency(order?.amount)}</H3>
            </Content>

            <Content>
              <H2>Payment Status :</H2>
              <H3>{order?.paymentStatus}</H3>
            </Content>

            <Content>
              <H2>Order Status :</H2>
              <H3>{order?.status}</H3>
            </Content>

            <Content>
              <H2>Delivery Status :</H2>
              <H3>{order?.deliveryStatus}</H3>
            </Content>
          </Wrapper>
        </Container>
      </MainContainer>
    </>
  );
}

export default UserOrder;
