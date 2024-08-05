import { HiShoppingCart, HiUser } from 'react-icons/hi';
import { HiOutlineArrowRightOnRectangle } from 'react-icons/hi2';
import { useNavigate } from 'react-router-dom';
import styled, { StyleSheetManager } from 'styled-components';
import Button from './Button';
import { useAuth } from '../features/authentication/useAuth';
import { useLogout } from '../features/authentication/useLogout';
import SpinnerMini from './SpinnerMini';
import { useEffect } from 'react';

const Container = styled.div`
  display: flex;
  align-items: center;

  @media (min-width: 768px) {
    gap: 0.75rem;
    font-size: 0.9rem;
    line-height: 1.25rem;
  }

  @media (min-width: 1024px) {
    gap: 1rem;
    font-size: 1.1rem;
    line-height: 1.5rem;
  }

  @media (min-width: 1280px) {
    gap: 1.25rem;
    font-size: 1.25rem;
    line-height: 1.75rem;
  }
`;

function MenuButtons() {
  const { isAuthenticated, isLoading, user, refetch } = useAuth();
  const { logout, isSuccess } = useLogout();
  const navigate = useNavigate();
  const userRole = user?.role;

  useEffect(
    function () {
      if (isSuccess) refetch();
    },
    [isSuccess, refetch],
  );

  function handleLogout(e) {
    e.preventDefault();
    logout();
  }

  return (
    <StyleSheetManager shouldForwardProp={(prop) => prop !== 'variation'}>
      <Container>
        {isLoading ? (
          <SpinnerMini />
        ) : (
          <>
            {isAuthenticated ? (
              <Button $variation="gray" onClick={handleLogout}>
                <span>
                  <HiOutlineArrowRightOnRectangle />
                </span>
                <span className="font-semibold">Logout</span>
              </Button>
            ) : (
              <Button $variation="gray" onClick={() => navigate('/login')}>
                <span>
                  <HiOutlineArrowRightOnRectangle />
                </span>
                <span>Login</span>
              </Button>
            )}
          </>
        )}

        {isLoading ? (
          <SpinnerMini />
        ) : (
          <>
            {userRole === 'admin' ? (
              <Button
                $variation="gray"
                onClick={() => navigate('/admin/dashboard')}
              >
                <span>
                  <HiUser />
                </span>
                <span>Admin</span>
              </Button>
            ) : (
              <Button $variation="gray" onClick={() => navigate('/account')}>
                <span>
                  <HiUser />
                </span>
                <span>Account</span>
              </Button>
            )}
          </>
        )}

        <Button $variation="green" onClick={() => navigate('/cart')}>
          <span>
            <HiShoppingCart />
          </span>
          <span>Cart</span>
        </Button>
      </Container>
    </StyleSheetManager>
  );
}

export default MenuButtons;
