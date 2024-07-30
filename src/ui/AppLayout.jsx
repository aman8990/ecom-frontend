import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import styled from 'styled-components';
import HeaderMobile from './HeaderMobile';
import { useState } from 'react';

const LayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const MainContent = styled.main`
  flex-grow: 1;
`;

const Div1 = styled.div`
  @media (min-width: 0px) {
    display: none;
  }

  @media (min-width: 768px) {
    display: block;
  }
`;

const Div2 = styled.div`
  @media (min-width: 0px) {
    display: block;
  }

  @media (min-width: 768px) {
    display: none;
  }
`;

function AppLayout() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // console.log(isMenuOpen);

  return (
    <LayoutContainer>
      <Div1>
        <Header />
      </Div1>
      <Div2>
        <HeaderMobile isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      </Div2>

      <MainContent>
        <Outlet />
      </MainContent>

      <Footer />
    </LayoutContainer>
  );
}

export default AppLayout;
