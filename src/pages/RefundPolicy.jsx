import styled from 'styled-components';
import RefundPolicyInfo from '../ui/RefundPolicyInfo';

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

function RefundPolicy() {
  return (
    <div>
      <H1>Refund Policy</H1>
      <RefundPolicyInfo />
    </div>
  );
}

export default RefundPolicy;
