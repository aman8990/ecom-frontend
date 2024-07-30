import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  cursor: pointer;
  padding-left: 1rem;
  padding-right: 1rem;
  padding-top: 1.75rem;
  padding-bottom: 1.75rem;
  border-width: 2px;
  border-style: solid;
  border-radius: 0.75rem;
  box-shadow:
    0 10px 15px -3px rgb(0 0 0 / 0.1),
    0 4px 6px -4px rgb(0 0 0 / 0.1);

  &:hover {
    background-color: rgb(245 245 244);
  }
`;

const H1 = styled.h1`
  color: rgb(87 83 78);

  @media (min-width: 0px) {
    font-weight: 700;
    font-size: 0.7rem;
    line-height: 1.75rem;
  }

  @media (min-width: 400px) {
    font-weight: 700;
    font-size: 0.9rem;
    line-height: 1.75rem;
  }

  @media (min-width: 600px) {
    font-weight: 700;
    font-size: 1rem;
    line-height: 1.75rem;
  }

  @media (min-width: 768px) {
    font-weight: 700;
    font-size: 1.1rem;
    line-height: 1.75rem;
  }

  @media (min-width: 1024px) {
    font-weight: 600;
    font-size: 1.25rem;
    line-height: 1.75rem;
  }
`;

const H2 = styled.h1`
  margin-top: 0.75rem;
  color: rgb(107 114 128);

  @media (min-width: 0px) {
    font-size: 0.8rem;
    line-height: 1.2rem;
    font-weight: 500;
  }

  @media (min-width: 400px) {
    font-size: 0.8rem;
    line-height: 1.2rem;
    font-weight: 500;
  }

  @media (min-width: 600px) {
    font-size: 0.9rem;
    line-height: 1.2rem;
    font-weight: 500;
  }

  @media (min-width: 768px) {
    font-size: 1rem;
    line-height: 1.3rem;
    font-weight: 500;
  }

  @media (min-width: 1024px) {
    font-size: 1.125rem;
    line-height: 1.75rem;
    font-weight: 500;
  }
`;

function UserOrdersList({ order }) {
  const items = order.items.map((item) => item.productId.name).join(' || ');

  const navigate = useNavigate();
  const id = order?._id;

  function handleClick() {
    navigate(`/order?id=${id}`);
  }

  return (
    <Container onClick={handleClick}>
      <H1>Order Id : {order._id}</H1>
      <H2>{items}</H2>
    </Container>
  );
}

export default UserOrdersList;
