import { HiAnnotation, HiBadgeCheck, HiTruck } from 'react-icons/hi';
import { HiMiniRectangleStack } from 'react-icons/hi2';
import { useNavigate } from 'react-router-dom';
import { usePendingOrders } from '../features/orders/usePendingOrders';
import { useAcceptedOrders } from '../features/orders/useAcceptedOrders';
import { useInTransitOrders } from '../features/orders/useInTransitOrders';
import { useUsersQueries } from '../features/user/useUsersQueries';
import styled from 'styled-components';

const Container = styled.div`
  display: grid;

  @media (min-width: 300px) {
    grid-template-columns: repeat(1, 1fr);
    row-gap: 1rem;
    column-gap: 2rem;
    margin-left: 3rem;
    margin-right: 3rem;
    margin-top: 2rem;
  }

  @media (min-width: 540px) {
    grid-template-columns: repeat(2, 1fr);
    row-gap: 2rem;
    column-gap: 2rem;
    margin-left: 3rem;
    margin-right: 3rem;
    margin-top: 3rem;
  }

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    row-gap: 2rem;
    column-gap: 2rem;
    margin-left: 3rem;
    margin-right: 3rem;
    margin-top: 3rem;
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
    row-gap: 3rem;
    column-gap: 8rem;
    margin-left: 6rem;
    margin-right: 6rem;
    margin-top: 3rem;
  }

  @media (min-width: 1280px) {
    grid-template-columns: repeat(4, 1fr);
    gap: 2rem;
    margin-left: 2rem;
    margin-right: 2rem;
    margin-top: 5rem;
  }
`;

const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 1rem;
  background-color: #fff;
  cursor: pointer;
  border-radius: 0.5rem;
`;

const Icon = styled.div`
  color: #fff;
  padding: 0.5rem;
  background-color: rgb(22 163 74);
  border-radius: 9999px;
  line-height: 1;

  @media (min-width: 300px) {
    font-size: 2.2rem;
  }

  @media (min-width: 540px) {
    font-size: 1.9rem;
  }

  @media (min-width: 768px) {
    font-size: 1.9rem;
  }

  @media (min-width: 1024px) {
    font-size: 3rem;
  }
`;

const H1 = styled.h1`
  margin-left: 0.5rem;
  font-weight: ${(props) => (props.size ? 700 : 600)};
  color: rgb(120 113 108);

  @media (min-width: 300px) {
    font-size: ${(props) => (props.size ? '1.6rem' : '1.4rem')};
    line-height: 1.75rem;
  }

  @media (min-width: 540px) {
    font-size: ${(props) => (props.size ? '1.5rem' : '1.125rem')};
    line-height: 1.75rem;
  }
`;

function DashboardUI() {
  const navigate = useNavigate();

  const { pendingOrders } = usePendingOrders();
  const { acceptedOrders } = useAcceptedOrders();
  const { inTransitOrders } = useInTransitOrders();
  const { usersQueries } = useUsersQueries();

  return (
    <Container>
      <Content onClick={() => navigate('/admin/newOrders')}>
        <Icon>
          <HiMiniRectangleStack />
        </Icon>
        <div>
          <H1>New Orders</H1>
          <H1 size="large">{pendingOrders?.length}</H1>
        </div>
      </Content>

      <Content onClick={() => navigate('/admin/acceptedOrders')}>
        <Icon>
          <HiBadgeCheck />
        </Icon>
        <div>
          <H1>Accepted</H1>
          <H1 size="large">{acceptedOrders?.length}</H1>
        </div>
      </Content>

      <Content onClick={() => navigate('/admin/inTransitOrders')}>
        <Icon>
          <HiTruck />
        </Icon>
        <div>
          <H1>InTransit</H1>
          <H1 size="large">{inTransitOrders?.length}</H1>
        </div>
      </Content>

      <Content onClick={() => navigate('/admin/userQueries')}>
        <Icon>
          <HiAnnotation />
        </Icon>
        <div>
          <H1>Queries</H1>
          <H1 size="large">{usersQueries?.length}</H1>
        </div>
      </Content>
    </Container>
  );
}

export default DashboardUI;
