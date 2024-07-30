import styled from 'styled-components';
import ShippingPolicyInfo from '../ui/ShippingPolicyInfo';

const H1 = styled.h1`
  display: flex;
  justify-content: center;
  font-size: 2.25rem;
  line-height: 2.5rem;
  font-weight: 600;
  color: rgb(87 83 78);
  margin-top: 2.5rem;

  @media (min-width: 0px) {
    font-size: 2rem;
  }

  @media (min-width: 400px) {
    font-size: 2.25rem;
  }
`;

function ShippingPolicy() {
  return (
    <div>
      <H1>Shipping Policy</H1>
      <ShippingPolicyInfo />
    </div>
  );
}

export default ShippingPolicy;
