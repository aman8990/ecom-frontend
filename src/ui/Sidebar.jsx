import { NavLink } from 'react-router-dom';
import {
  HiShoppingBag,
  HiCheckCircle,
  HiLockClosed,
  HiServer,
  HiAnnotation,
} from 'react-icons/hi';
import {
  HiMiniRectangleStack,
  HiTruck,
  HiUserGroup,
  HiUser,
  HiDocumentMagnifyingGlass,
  HiMiniDocumentPlus,
  HiMiniDocumentText,
  HiMiniDocumentMinus,
  HiExclamationCircle,
} from 'react-icons/hi2';
import styled from 'styled-components';

const NavList = styled.ul`
  display: flex;
  flex-direction: column;
  padding: 0.75rem 0.5rem;

  @media (min-width: 768px) {
    gap: 1rem;
  }

  @media (min-width: 1024px) {
    gap: 1.2rem;
  }
`;

const StyledNavLink = styled(NavLink)`
  display: flex;
  gap: 0.75rem;
  cursor: pointer;
  padding: 0.5rem 1rem;
  color: #555353;

  &:hover,
  &:active,
  &.active:link,
  &.active:visited {
    color: #000000;
    background-color: #e5e5e5;
    border-radius: 5px;
  }
`;

const StyledSpan1 = styled.span`
  display: flex;
  align-items: center;

  @media (min-width: 768px) {
    font-size: 1.2rem;
    line-height: 1rem;
  }

  @media (min-width: 1024px) {
    font-size: 1.4rem;
    line-height: 2rem;
  }

  @media (min-width: 1280px) {
    font-size: 1.875rem;
    line-height: 2.25rem;
  }
`;

const StyledSpan2 = styled.span`
  display: flex;
  align-items: center;
  font-weight: 600;

  @media (min-width: 768px) {
    font-size: 0.9rem;
    line-height: 1.5rem;
  }

  @media (min-width: 1024px) {
    font-size: 1rem;
    line-height: 1.5rem;
  }

  @media (min-width: 1280px) {
    font-size: 1rem;
    line-height: 1.5rem;
  }
`;

function Sidebar() {
  return (
    <nav>
      <NavList>
        <li>
          <StyledNavLink to="/admin/dashboard">
            <StyledSpan1>
              <HiServer />
            </StyledSpan1>
            <StyledSpan2>Dashboard</StyledSpan2>
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/admin/newOrders">
            <StyledSpan1>
              <HiMiniRectangleStack />
            </StyledSpan1>
            <StyledSpan2>New Orders</StyledSpan2>
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/admin/acceptedOrders">
            <StyledSpan1>
              <HiCheckCircle />
            </StyledSpan1>
            <StyledSpan2>Accepted Orders</StyledSpan2>
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/admin/inTransitOrders">
            <StyledSpan1>
              <HiTruck />
            </StyledSpan1>
            <StyledSpan2>InTransit Orders</StyledSpan2>
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/admin/cancelledOrders">
            <StyledSpan1>
              <HiExclamationCircle />
            </StyledSpan1>
            <StyledSpan2>Cancelled Orders</StyledSpan2>
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/admin/allOrders">
            <StyledSpan1>
              <HiShoppingBag />
            </StyledSpan1>
            <StyledSpan2>All Orders</StyledSpan2>
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/admin/orderDetail">
            <StyledSpan1>
              <HiDocumentMagnifyingGlass />
            </StyledSpan1>
            <StyledSpan2>Order Detail</StyledSpan2>
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/admin/createNewProduct">
            <StyledSpan1>
              <HiMiniDocumentPlus />
            </StyledSpan1>
            <StyledSpan2>Create New Product</StyledSpan2>
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/admin/updateProduct">
            <StyledSpan1>
              <HiMiniDocumentText />
            </StyledSpan1>
            <StyledSpan2>Update Product</StyledSpan2>
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/admin/deleteProduct">
            <StyledSpan1>
              <HiMiniDocumentMinus />
            </StyledSpan1>
            <StyledSpan2>Delete Product</StyledSpan2>
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/admin/allUsers">
            <StyledSpan1>
              <HiUserGroup />
            </StyledSpan1>
            <StyledSpan2>All Users</StyledSpan2>
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/admin/userDetail">
            <StyledSpan1>
              <HiUser />
            </StyledSpan1>
            <StyledSpan2>User Detail</StyledSpan2>
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/admin/userQueries">
            <StyledSpan1>
              <HiAnnotation />
            </StyledSpan1>
            <StyledSpan2>User Queries</StyledSpan2>
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/admin/updateAdminPassword">
            <StyledSpan1>
              <HiLockClosed />
            </StyledSpan1>
            <StyledSpan2>Update Admin Password</StyledSpan2>
          </StyledNavLink>
        </li>
      </NavList>
    </nav>
  );
}

export default Sidebar;

// <Container>
//   <StyledDiv>
//     <StyledSpan1>
//       <HiMiniRectangleStack />
//     </StyledSpan1>
//     <StyledSpan2>New Orders</StyledSpan2>
//   </StyledDiv>

//   <StyledDiv>
//     <StyledSpan1>
//       <HiCheckCircle />
//     </StyledSpan1>
//     <StyledSpan2>Accepted Orders</StyledSpan2>
//   </StyledDiv>

//   <StyledDiv>
//     <StyledSpan1>
//       <HiTruck />
//     </StyledSpan1>
//     <StyledSpan2>InTransit Orders</StyledSpan2>
//   </StyledDiv>

//   <StyledDiv>
//     <StyledSpan1>
//       <HiExclamationCircle />
//     </StyledSpan1>
//     <StyledSpan2>Cancelled Orders</StyledSpan2>
//   </StyledDiv>

//   <StyledDiv>
//     <StyledSpan1>
//       <HiShoppingBag />
//     </StyledSpan1>
//     <StyledSpan2>All Orders</StyledSpan2>
//   </StyledDiv>

//   <StyledDiv>
//     <StyledSpan1>
//       <HiDocumentMagnifyingGlass />
//     </StyledSpan1>
//     <StyledSpan2>Order Details</StyledSpan2>
//   </StyledDiv>

//   <StyledDiv>
//     <StyledSpan1>
//       <HiUserGroup />
//     </StyledSpan1>
//     <StyledSpan2>All Users</StyledSpan2>
//   </StyledDiv>

//   <StyledDiv>
//     <StyledSpan1>
//       <HiUser />
//     </StyledSpan1>
//     <StyledSpan2>User Details</StyledSpan2>
//   </StyledDiv>

//   <StyledDiv>
//     <StyledSpan1>
//       <HiMiniDocumentPlus />
//     </StyledSpan1>
//     <StyledSpan2>Create New Product</StyledSpan2>
//   </StyledDiv>

//   <StyledDiv>
//     <StyledSpan1>
//       <HiMiniDocumentText />
//     </StyledSpan1>
//     <StyledSpan2>Update Product</StyledSpan2>
//   </StyledDiv>

//   <StyledDiv>
//     <StyledSpan1>
//       <HiMiniDocumentMinus />
//     </StyledSpan1>
//     <StyledSpan2>Delete Product</StyledSpan2>
//   </StyledDiv>

//   <StyledDiv>
//     <StyledSpan1>
//       <HiLockClosed />
//     </StyledSpan1>
//     <StyledSpan2>Update Admin Password</StyledSpan2>
//   </StyledDiv>
// </Container>
