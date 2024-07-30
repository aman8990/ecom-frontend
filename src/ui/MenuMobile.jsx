import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { useAuth } from '../features/authentication/useAuth';
import { useLogout } from '../features/authentication/useLogout';

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

const H1 = styled.h1`
  display: flex;
  gap: 0.75rem;
  cursor: pointer;
  padding: 0.5rem 1rem;
  color: #555353;
`;

function MenuMobile() {
  const { isAuthenticated, user } = useAuth();
  const { logout } = useLogout();
  const admin = user?.role === 'admin';

  function handleLogout(e) {
    e.preventDefault();
    logout();
  }

  return (
    <div className="mt-10">
      <ul className="ml-10 flex flex-col items-start text-stone-600">
        <li className="mb-3 text-xl font-semibold">
          <StyledNavLink to="/">Home</StyledNavLink>
        </li>

        <li className="mb-3 text-xl font-semibold">
          <StyledNavLink to="/products">Products</StyledNavLink>
        </li>

        <li className="mb-3 text-xl font-semibold">
          <StyledNavLink to="/contactUs">Contact us</StyledNavLink>
        </li>

        <li className="mb-3 text-xl font-semibold">
          {isAuthenticated ? (
            <H1 onClick={handleLogout}>Logout</H1>
          ) : (
            <StyledNavLink to="/login">Login</StyledNavLink>
          )}
        </li>

        <li className="mb-3 text-xl font-semibold">
          {admin ? (
            <StyledNavLink to="/admin/dashboard">Admin</StyledNavLink>
          ) : (
            <StyledNavLink to="/account">Account</StyledNavLink>
          )}
        </li>
      </ul>
    </div>
  );
}

export default MenuMobile;
