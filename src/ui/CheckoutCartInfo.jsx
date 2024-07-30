import { formatIndianCurrency } from '../services/formatCurrency';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  border-width: 2px;
  border-style: solid;
  border-radius: 0.5rem;
  box-shadow:
    0 10px 15px -3px rgb(0 0 0 / 0.1),
    0 4px 6px -4px rgb(0 0 0 / 0.1);

  @media (min-width: 0px) {
    margin: 0.1rem;
    padding-left: 0.5rem;
    padding-right: 0.5rem;
  }

  @media (min-width: 400px) {
    padding-left: 0.5rem;
    padding-right: 0.5rem;
  }

  @media (min-width: 600px) {
    padding-left: 2.5rem;
    padding-right: 2.5rem;
  }
`;

const H1 = styled.h1`
  display: flex;
  justify-content: center;
  font-weight: 600;
  color: rgb(87 83 78);

  @media (min-width: 0px) {
    margin-top: 1.25rem;
    font-size: 2rem;
    line-height: 2.5rem;
  }

  @media (min-width: 400px) {
    margin-top: 1.25rem;
    font-size: 2rem;
    line-height: 2.5rem;
  }

  @media (min-width: 600px) {
    margin-top: 1.25rem;
    font-size: 2.25rem;
    line-height: 2.5rem;
  }
`;

const Content = styled.div`
  display: flex;
  gap: 0.5rem;
  margin-top: 1rem;
  color: rgb(87 83 78);

  @media (min-width: 0px) {
    font-size: 0.8rem;
    line-height: 1.75rem;
  }

  @media (min-width: 400px) {
    font-size: 0.9rem;
    line-height: 1.75rem;
  }

  @media (min-width: 600px) {
    font-size: 1.125rem;
    line-height: 1.75rem;
  }
`;

const H2 = styled.h1`
  font-weight: 600;
  color: rgb(87 83 78);
`;

const H3 = styled.h1`
  display: flex;
  justify-content: center;
  margin-bottom: 1.25rem;
  margin-top: 1.25rem;
  color: rgb(51 65 85);

  @media (min-width: 400px) {
    font-size: 1.4rem;
    line-height: 2.25rem;
    font-weight: 700;
  }

  @media (min-width: 600px) {
    font-size: 1.875rem;
    line-height: 2.25rem;
    font-weight: 700;
  }
`;

function CheckoutCartInfo({ cart }) {
  return (
    <Container>
      <H1>Info</H1>

      {cart.cartItems.map((item) => (
        <Content key={item.productId._id}>
          <H2>
            {item.quantity} x {item.productId.name} &minus;{' '}
            {formatIndianCurrency(item.quantity * item.productId.price)}
          </H2>
        </Content>
      ))}

      <H3>Total Price: {formatIndianCurrency(cart.totalPrice)}</H3>
    </Container>
  );
}

export default CheckoutCartInfo;
