import { useEffect, useState } from 'react';
import { HiHome, HiUser, HiLockClosed, HiShoppingBag } from 'react-icons/hi';
import styled, { css } from 'styled-components';
import UpdateName from './UpdateName';
import UpdatePassword from './UpdatePassword';
import UpdateAddress from './UpdateAddress';
import { useLocation } from 'react-router-dom';
import UserOrdersData from './UserOrdersData';

const StyledGrid = styled.div`
  display: grid;
  overflow: auto;
  padding: 0.5rem;

  @media (min-width: 0px) {
    grid-template-columns: repeat(2, 1fr);
    column-gap: 0.5rem;
    row-gap: 1rem;
    margin: 2rem 0.1rem;
  }

  @media (min-width: 400px) {
    grid-template-columns: repeat(2, 1fr);
    column-gap: 2rem;
    row-gap: 1rem;
    margin: 2rem 1rem;
  }

  @media (min-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
    column-gap: 6rem;
    row-gap: 1rem;
    margin: 2rem 3rem;
  }

  @media (min-width: 768px) {
    grid-template-columns: repeat(4, 1fr);
    column-gap: 1rem;
    margin: 2.5rem 1.5rem;
  }

  @media (min-width: 1024px) {
    column-gap: 2rem;
    margin: 2.5rem 3rem;
  }

  @media (min-width: 1280px) {
    column-gap: 3rem;
    margin: 2.5rem 6rem;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  border-width: 2px;
  border-style: solid;
  border-radius: 0.75rem;
  background-color: ${({ $active }) => ($active ? 'rgb(22 163 74)' : '#fff')};
  color: ${({ $active }) => ($active ? '#fff' : 'inherit')};
  transition: background-color 0.3s;

  ${({ $active }) =>
    $active &&
    css`
      & ${StyledDiv} {
        color: #fff;
      }
      & ${StyledH1} {
        color: #fff;
      }
    `}

  @media (min-width: 0px) {
    padding: 0.4rem 0rem;
  }

  @media (min-width: 400px) {
    padding: 0.5rem 0rem;
  }

  @media (min-width: 768px) {
    padding: 1rem 0rem;
  }

  @media (min-width: 1024px) {
    padding: 1rem 0;
  }

  @media (min-width: 1280px) {
    padding: 1.5rem 0;
  }
`;

const StyledDiv = styled.div`
  display: flex;
  gap: 0.5rem;
  color: rgb(68 64 60);

  @media (min-width: 0px) {
    font-size: 0.8rem;
    line-height: 1rem;
  }

  @media (min-width: 400px) {
    font-size: 1rem;
    line-height: 1rem;
  }

  @media (min-width: 600px) {
    font-size: 1.2rem;
    line-height: 1rem;
  }

  @media (min-width: 768px) {
    font-size: 1.2rem;
    line-height: 1rem;
  }

  @media (min-width: 1024px) {
    font-size: 1.6rem;
    line-height: 1.5rem;
  }

  @media (min-width: 1280px) {
    font-size: 1.875rem;
    line-height: 2.25rem;
  }
`;

const StyledSpan = styled.span`
  display: flex;
  align-items: center;
`;

const StyledH1 = styled.h1`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 0.5rem;
  color: rgb(120 113 108);

  @media (min-width: 0px) {
    font-size: 0.7rem;
  }

  @media (min-width: 400px) {
    font-size: 0.8rem;
  }

  @media (min-width: 600px) {
    font-size: 0.8rem;
  }

  @media (min-width: 768px) {
    font-size: 0.8rem;
    line-height: 1.75rem;
  }

  @media (min-width: 1024px) {
    font-size: 1rem;
    line-height: 1.75rem;
  }

  @media (min-width: 1280px) {
    font-size: 1.125rem;
    line-height: 1.75rem;
  }
`;

function UserSettings({ user }) {
  const location = useLocation();
  const [openContainer, setOpenContainer] = useState(null);

  useEffect(() => {
    if (location.state && location.state.openContainer) {
      setOpenContainer(location.state.openContainer);
    }
  }, [location.state]);

  function handleClick(containerId) {
    // e.preventDefault();
    setOpenContainer((id) => (id === containerId ? null : containerId));
  }

  return (
    <>
      <StyledGrid>
        <Container
          $active={openContainer === 'user'}
          onClick={() => handleClick('user')}
        >
          <StyledDiv>
            <StyledSpan>
              <HiUser />
            </StyledSpan>
            <StyledSpan>User</StyledSpan>
          </StyledDiv>
          <StyledH1>Edit your info</StyledH1>
        </Container>

        <Container
          $active={openContainer === 'security'}
          onClick={() => handleClick('security')}
        >
          <StyledDiv>
            <StyledSpan>
              <HiLockClosed />
            </StyledSpan>
            <StyledSpan>Security</StyledSpan>
          </StyledDiv>
          <StyledH1>Change your password</StyledH1>
        </Container>

        <Container
          $active={openContainer === 'address'}
          onClick={() => handleClick('address')}
        >
          <StyledDiv>
            <StyledSpan>
              <HiHome />
            </StyledSpan>
            <StyledSpan>Address</StyledSpan>
          </StyledDiv>
          <StyledH1>Add/Update your address</StyledH1>
        </Container>

        <Container
          $active={openContainer === 'orders'}
          onClick={() => handleClick('orders')}
        >
          <StyledDiv>
            <StyledSpan>
              <HiShoppingBag />
            </StyledSpan>
            <StyledSpan>Orders</StyledSpan>
          </StyledDiv>
          <StyledH1>See your orders</StyledH1>
        </Container>
      </StyledGrid>

      {openContainer === 'user' && <UpdateName user={user} />}
      {openContainer === 'security' && <UpdatePassword />}
      {openContainer === 'address' && <UpdateAddress user={user} />}
      {openContainer === 'orders' && <UserOrdersData />}
    </>
  );
}

export default UserSettings;
