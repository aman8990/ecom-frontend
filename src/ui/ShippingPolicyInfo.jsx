import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (min-width: 0px) {
    margin-left: 1rem;
    margin-right: 1rem;
  }

  @media (min-width: 600px) {
    margin-left: 4rem;
    margin-right: 4rem;
  }

  @media (min-width: 1024px) {
    margin-left: 8rem;
    margin-right: 8rem;
  }
`;

const P = styled.p`
  margin-top: 2.5rem;
  font-size: 1.125rem;
  line-height: 1.75rem;
  font-weight: 400;
  color: rgb(120 113 108);
`;

function ShippingPolicyInfo() {
  return (
    <Container>
      <P>
        App collaborates with multiple courier partners for shipping across
        India. We only have standard shipping available at the moment. Depending
        on the location, it takes 2-9 days to be delivered. We accept orders
        only from India. App reserves the right to cancel an order within 48
        hours from the time of order.
      </P>
    </Container>
  );
}

export default ShippingPolicyInfo;
