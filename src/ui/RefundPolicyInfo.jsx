import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  @media (min-width: 0px) {
    margin-left: 0.5rem;
    margin-right: 0.5rem;
  }

  @media (min-width: 400px) {
    margin-left: 1.5rem;
    margin-right: 1.5rem;
  }

  @media (min-width: 600px) {
    margin-left: 3rem;
    margin-right: 3rem;
  }

  @media (min-width: 748px) {
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

const P1 = styled.p`
  margin-top: 1rem;
  font-size: 1.125rem;
  line-height: 1.75rem;
  font-weight: 400;
  color: rgb(120 113 108);
`;

const H1 = styled.h1`
  margin-top: 2rem;
  line-height: 1.75rem;
  font-weight: 500;
  color: rgb(87 83 78);

  @media (min-width: 0px) {
    font-size: 1rem;
  }

  @media (min-width: 600px) {
    font-size: 1.25rem;
  }
`;

function RefundPolicyInfo() {
  return (
    <Container>
      <P>
        We have a 5-day exchange/return policy, which means you have 5 days
        after receiving your item to request a replacement or a return. For
        exchange/return, you can contact us at aman@gmail.com.
      </P>

      <H1>Exchanges and Returns</H1>
      <P1>
        To be eligible for an exchange/return, your item must be in the same
        condition that you received it, unused and in its original packaging. To
        complete your exchange/return, the invoice must be provided at the time
        of return pickup. Once used, products will be ineligible for exchange or
        return.
      </P1>

      <H1>
        Exchanges/Returns are only allowed in the following unlikely cases:
      </H1>

      <P1>
        <h1>
          &bull; The product is damaged or if you received the wrong item.
        </h1>
        <h1>
          &bull; The product is not sealed properly at the time of delivery.
        </h1>
        <h1>&bull; The product has expired by the time of delivery.</h1>
      </P1>

      <P1>
        If your return is accepted, we will pick up the item ordered from the
        same address, and you will be notified of the expected pick-up date.
      </P1>

      <P1>
        In case of an exchange, the product will be delivered to you within 3-5
        days after the return pick-up is done.
      </P1>

      <P1>
        In case of any delivery related discrepancy, please reach out to us
        within 48 hours after the order been marked as delivered.
      </P1>

      <H1>Cancellation:</H1>

      <P1>
        <h1>
          &bull; An order cancellation request will be accepted only if we have
          not yet shipped the product.
        </h1>
        <h1>
          &bull; If a cancellation request is accepted, you are entitled to get
          a refund of the entire amount.
        </h1>
        <h1>
          &bull; App reserves the right to cancel or refuse to accept any order
          placed for various reasons, including but not limited to the
          non-availability of stock, pricing errors, informational errors or
          problems identified with the personal/financial details provided by
          the customer.
        </h1>
      </P1>

      <H1>Refunds:</H1>
      <P1>
        Once your return is received and inspected, we will notify you that we
        have received your returned item. We will also notify you if the refund
        was approved or not. If approved, you'll be automatically refunded on
        your original payment method. Please note that it generally takes around
        5-7 days to reflect this amount.
      </P1>
    </Container>
  );
}

export default RefundPolicyInfo;
