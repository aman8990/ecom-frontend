import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledHeader = styled.ul`
  display: flex;
  align-items: center;
  color: rgb(87 83 78);
  font-weight: 600;

  @media (min-width: 768px) {
    font-size: 1.2rem;
    line-height: 1.5rem;
    gap: 2rem;
  }

  @media (min-width: 1024px) {
    font-size: 1.3rem;
    line-height: 1.75rem;
    gap: 3rem;
  }

  @media (min-width: 1280px) {
    font-size: 1.4rem;
    gap: 5rem;
    line-height: 1.75rem;
  }
`;

function MenuList() {
  return (
    <StyledHeader>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="products">Products</Link>
      </li>
      <li>
        <Link to="contactUs">Contact us</Link>
      </li>
    </StyledHeader>
  );
}

export default MenuList;
