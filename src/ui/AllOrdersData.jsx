import styled from 'styled-components';
import { useAllOrders } from '../features/orders/useAllOrders';
import AllOrderList from './AllOrderList';
import Spinner from './Spinner';

const H1 = styled.h1`
  display: flex;
  justify-content: center;
  font-weight: 600;
  color: rgb(68 64 60);

  @media (min-width: 300px) {
    padding: 1rem;
    font-size: 1.6rem;
    line-height: 2rem;
  }

  @media (min-width: 540px) {
    padding: 1rem;
    font-size: 1.8rem;
    line-height: 2rem;
  }

  @media (min-width: 768px) {
    padding: 1rem;
    font-size: 1.8rem;
    line-height: 2rem;
  }

  @media (min-width: 1024px) {
    padding: 2rem;
    font-size: 2.25rem;
    line-height: 2.5rem;
  }

  @media (min-width: 1280px) {
    padding: 3rem;
    font-size: 2.25rem;
    line-height: 2.5rem;
  }
`;

const Content = styled.div`
  display: grid;

  @media (min-width: 300px) {
    grid-template-columns: repeat(1, 1fr);
    gap: 1rem;
    margin-bottom: 5rem;
    margin-left: 0.7rem;
    margin-right: 0.7rem;
  }

  @media (min-width: 540px) {
    grid-template-columns: repeat(1, 1fr);
    gap: 1rem;
    margin-bottom: 5rem;
    margin-left: 3rem;
    margin-right: 3rem;
  }

  @media (min-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
    gap: 1rem;
    margin-bottom: 5rem;
    margin-left: 3rem;
    margin-right: 3rem;
  }

  @media (min-width: 1280px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
    margin-bottom: 5rem;
    margin-left: 1.5rem;
    margin-right: 1.5rem;
  }
`;

function AllOrdersData() {
  const { allOrders, isLoading, error } = useAllOrders();

  if (isLoading) return <Spinner />;
  if (error) return <H1>Error in Fetching orders</H1>;
  if (allOrders.length === 0) return <H1>No orders</H1>;

  return (
    <div>
      <H1>All Orders</H1>

      <Content>
        {allOrders.map((order) => (
          <AllOrderList order={order} key={order._id} />
        ))}
      </Content>
    </div>
  );
}

export default AllOrdersData;
