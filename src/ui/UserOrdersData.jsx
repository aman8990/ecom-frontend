import styled from 'styled-components';
import { useUserOrders } from '../features/orders/useUserOrders';
import Spinner from './Spinner';
import UserOrdersList from './UserOrdersList';

const H1 = styled.h1`
  display: flex;
  justify-content: center;
  font-weight: 600;
  color: rgb(87 83 78);

  @media (min-width: 0px) {
    font-size: 1.3rem;
    line-height: 1;
  }

  @media (min-width: 400px) {
    font-size: 1.5rem;
    line-height: 1;
  }

  @media (min-width: 600px) {
    font-size: 2rem;
    line-height: 1;
  }

  @media (min-width: 768px) {
    font-size: 2rem;
    line-height: 1;
  }

  @media (min-width: 1024px) {
    font-size: 3rem;
    line-height: 1;
  }
`;

const Content = styled.div`
  display: grid;
  gap: 1.75rem;
  margin-top: 2.5rem;

  @media (min-width: 300px) {
    margin-left: 0.5rem;
    margin-right: 0.5rem;
  }

  @media (min-width: 400px) {
    margin-left: 1rem;
    margin-right: 1rem;
  }

  @media (min-width: 600px) {
    margin-left: 3rem;
    margin-right: 3rem;
  }

  @media (min-width: 768px) {
    margin-left: 3rem;
    margin-right: 3rem;
  }

  @media (min-width: 1024px) {
    margin-left: 5rem;
    margin-right: 5rem;
  }

  @media (min-width: 1280px) {
    margin-left: 10rem;
    margin-right: 10rem;
  }
`;

function UserOrdersData() {
  const { userOrders, isLoading, error } = useUserOrders();
  console.log(userOrders);

  if (isLoading) return <Spinner />;
  if (error) return <H1>Error in Fetching orders</H1>;
  if (userOrders?.length === 0) return <H1>No orders</H1>;

  return (
    <div>
      <H1>Your Orders</H1>

      <Content>
        {userOrders.map((order) => (
          <UserOrdersList order={order} key={order._id} />
        ))}
      </Content>
    </div>
  );
}

export default UserOrdersData;
