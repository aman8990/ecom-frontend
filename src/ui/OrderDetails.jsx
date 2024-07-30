import { useState, useEffect } from 'react';
import { useUpdateOrder } from '../features/orders/useUpdateOrder';
import Spinner from './Spinner';
import styled from 'styled-components';
import { formatIndianCurrency } from '../services/formatCurrency';

const Container = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 5rem;
  width: 100%;
`;

const Container1 = styled.div`
  display: flex;
  justify-content: center;
  background-color: #fff;
  padding: 1.5rem;
  border-width: 2px;
  border-style: solid;
  border-radius: 0.5rem;
  box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);

  @media (min-width: 300px) {
    width: 90%;
  }

  @media (min-width: 540px) {
    width: 80%;
  }

  @media (min-width: 768px) {
    width: 85%;
  }

  @media (min-width: 1024px) {
    width: 75%;
  }

  @media (min-width: 1280px) {
    width: 66.666667%;
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

const H1 = styled.h1`
  font-weight: 600;

  @media (min-width: 300px) {
    font-size: 0.8rem;
    line-height: 1.75rem;
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

const H2 = styled.h1`
  /* margin-top: 0.25rem; */
  color: rgb(120 113 108);

  @media (min-width: 300px) {
    font-size: 0.8rem;
    /* line-height: 1.75rem; */
  }

  @media (min-width: 540px) {
    font-size: 1rem;
    /* line-height: 1.75rem; */
  }

  @media (min-width: 768px) {
    font-size: 1rem;
    /* line-height: 1.75rem; */
  }

  @media (min-width: 1024px) {
    font-size: 1.125rem;
    line-height: 1.75rem;
  }
`;

const Li = styled.li`
  display: flex;
  flex-direction: column;
  gap: -1rem;
`;

const Span = styled.span`
  font-weight: 600;
  color: rgb(28 25 23);
`;

const Label = styled.label`
  font-weight: 600;

  @media (min-width: 300px) {
    font-size: 0.8rem;
    /* line-height: 1.75rem; */
  }

  @media (min-width: 540px) {
    font-size: 1rem;
    /* line-height: 1.75rem; */
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

const Select = styled.select`
  margin-left: ${(props) => (props.margin ? '0.9rem' : '2.25rem')};
  outline: 2px solid transparent;
  outline-offset: 2px;
  color: rgb(87 83 78);
  border-width: 2px;
  border-style: solid;
  border-radius: 0.125rem;

  @media (min-width: 300px) {
    font-size: 0.8rem;
    /* line-height: 1.75rem; */
  }

  @media (min-width: 540px) {
    font-size: 1rem;
    /* line-height: 1.75rem; */
  }

  @media (min-width: 768px) {
    font-size: 1rem;
    line-height: 1.75rem;
  }

  @media (min-width: 1024px) {
    font-size: 1.125rem;
    line-height: 1.75rem;
  }
`;

const Button = styled.button`
  margin-left: auto;
  margin-right: auto;
  margin-top: 1rem;
  background-color: rgb(185 28 28);
  font-weight: 600;
  color: #fff;
  border-radius: 0.125rem;

  @media (min-width: 300px) {
    font-size: 0.8rem;
    padding-left: 0.7rem;
    padding-right: 0.7rem;
    padding-top: 0.45rem;
    padding-bottom: 0.45rem;
  }

  @media (min-width: 540px) {
    font-size: 1rem;
    padding-left: 0.75rem;
    padding-right: 0.75rem;
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
  }
`;

function OrderDetails({ order }) {
  const [currentOrder, setCurrentOrder] = useState(order);

  const address = `${currentOrder?.address.locality}, ${currentOrder?.address.city}, ${currentOrder?.address.district}, ${currentOrder?.address.state}, ${currentOrder?.address.pincode}`;

  const { updateOrder, isPending, newOrder } = useUpdateOrder();

  const [status, setStatus] = useState(currentOrder?.status || '');
  const [deliveryStatus, setDeliveryStatus] = useState(
    currentOrder?.deliveryStatus || '',
  );

  useEffect(() => {
    if (newOrder && newOrder._id === currentOrder._id) {
      setCurrentOrder(newOrder);
      setStatus(newOrder.status);
      setDeliveryStatus(newOrder.deliveryStatus);
    }
  }, [newOrder, currentOrder._id]);

  function handleClick(e) {
    e.preventDefault();
    const data = {
      id: currentOrder._id,
      status: status,
      deliveryStatus: deliveryStatus,
    };
    updateOrder(data);
  }

  if (isPending) return <Spinner />;

  return (
    <Container>
      <Container1>
        <Wrapper>
          <Content>
            <H1>Order id :</H1>
            <H2>{currentOrder?._id}</H2>
          </Content>

          <Content>
            <H1>Name :</H1>
            <H2>{currentOrder?.name}</H2>
          </Content>

          <Content>
            <H1>Phone :</H1>
            <H2>{currentOrder?.phone}</H2>
          </Content>

          <Content>
            <H1>Email :</H1>
            <H2>{currentOrder?.email}</H2>
          </Content>

          <Content1>
            <H1>Address :</H1>
            <H2>{address}</H2>
          </Content1>

          <Content1>
            <H1>Items : </H1>
            <H2>
              <ul>
                {currentOrder?.items.map((item) => (
                  <Li key={item._id}>
                    <span>
                      {item.quantity} x {item.productId.name}
                    </span>
                    <Span>
                      ({formatIndianCurrency(item.quantity * item.price)})
                    </Span>
                  </Li>
                ))}
              </ul>
            </H2>
          </Content1>

          <Content>
            <H1>Amount :</H1>
            <H2>{formatIndianCurrency(currentOrder?.amount)}</H2>
          </Content>

          <Content>
            <H1>Payment Status :</H1>
            <H2>{currentOrder?.paymentStatus}</H2>
          </Content>

          <Content>
            <H1>Order Status :</H1>
            <H2>{currentOrder?.status}</H2>
          </Content>

          <Content>
            <H1>Delivery Status :</H1>
            <H2>{currentOrder?.deliveryStatus}</H2>
          </Content>

          <div>
            <Label htmlFor="status">Change order status :</Label>
            <Select
              id="status"
              value={status}
              onChange={(e) => setStatus(e.target.value)}
            >
              <option value="" disabled>
                Select an option
              </option>
              <option value="pending">Pending</option>
              <option value="accepted">Accepted</option>
              <option value="cancelled">Rejected</option>
            </Select>
          </div>

          <div>
            <Label htmlFor="deliveryStatus">Change delivery status :</Label>
            <Select
              margin="rem"
              id="deliveryStatus"
              value={deliveryStatus}
              onChange={(e) => setDeliveryStatus(e.target.value)}
            >
              <option value="" disabled>
                Select an option
              </option>
              <option value="processing">Processing</option>
              <option value="inTransit">InTransit</option>
              <option value="delivered">Delivered</option>
            </Select>
          </div>

          <Button onClick={handleClick}>Save order</Button>
        </Wrapper>
      </Container1>
    </Container>
  );
}

export default OrderDetails;
