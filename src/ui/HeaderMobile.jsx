import { useCallback, useEffect, useRef } from 'react';
import MenuMobile from './MenuMobile';
import { HiMenu, HiShoppingCart, HiX } from 'react-icons/hi';
import Logo from './Logo';
import Button from './Button';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: rgb(243 244 246);
  padding-top: 1.25rem;
  padding-bottom: 1.25rem;

  @media (min-width: 300px) {
    padding-left: 1rem;
    padding-right: 1rem;
  }

  @media (min-width: 400px) {
    padding-left: 2rem;
    padding-right: 2rem;
  }
`;

const Menu = styled.div`
  position: fixed;
  background-color: rgb(243 244 246);
  overflow-y: auto;
  transition: transform 0.3s ease-in-out;
  transform: ${({ $isOpen }) =>
    $isOpen ? 'translateX(0)' : 'translateX(-100%)'};
  z-index: 1000;

  @media (min-width: 300px) {
    top: 3.7rem;
    left: 0;
    height: calc(100% - 3.7rem);
    width: 80%;
    max-width: 300px;
  }

  @media (min-width: 540px) {
    top: 4rem;
    left: 0;
    height: calc(100% - 4rem);
    width: 80%;
    max-width: 300px;
  }
`;

function HeaderMobile({ isMenuOpen, setIsMenuOpen }) {
  const navigate = useNavigate();

  const MenuRef = useRef(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleClickOutside = useCallback(
    (event) => {
      if (MenuRef.current && !MenuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    },
    [setIsMenuOpen],
  );

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [handleClickOutside]);

  return (
    <div>
      <Container>
        <div className="text-3xl" onClick={toggleMenu}>
          {isMenuOpen ? <HiX /> : <HiMenu />}
        </div>

        <Logo />

        <Button $variation="green" onClick={() => navigate('/cart')}>
          <span>
            <HiShoppingCart />
          </span>
          <span>Cart</span>
        </Button>
      </Container>

      <Menu $isOpen={isMenuOpen} ref={MenuRef}>
        <MenuMobile />
      </Menu>
    </div>
  );
}

export default HeaderMobile;
