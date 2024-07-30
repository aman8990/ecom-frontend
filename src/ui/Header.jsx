import styled from 'styled-components';
import Logo from './Logo';
import Menu from './Menu';

const StyledHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (min-width: 768px) {
    padding: 2rem 1rem;
  }

  @media (min-width: 1024px) {
    padding: 2rem 3rem;
  }

  @media (min-width: 1280px) {
    padding: 2rem 5rem;
  }
`;

function Header() {
  return (
    <StyledHeader>
      <Logo />
      <Menu />
    </StyledHeader>
  );
}

export default Header;
