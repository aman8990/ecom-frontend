import styled from 'styled-components';
import Logo from './Logo';
import Sidebar from './Sidebar';
import { Outlet } from 'react-router-dom';
import { HiMenu, HiX } from 'react-icons/hi';
import { useEffect, useRef, useState } from 'react';

const Container = styled.div`
  display: flex;
  height: 100vh;
  flex-direction: column;
`;

const Content = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
  border-bottom-width: 2px;

  @media (min-width: 300px) {
    padding: 1rem;
  }

  @media (min-width: 540px) {
    padding: 1.2rem;
  }

  @media (min-width: 768px) {
    padding: 1.2rem;
  }

  @media (min-width: 1024px) {
    padding: 1.2rem;
  }

  @media (min-width: 1280px) {
    padding: 1.5rem;
  }
`;

const Div = styled.div`
  position: absolute;
  right: 1.5rem;
  cursor: pointer;

  @media (min-width: 768px) {
    left: 1.5rem;
    right: 0;
  }
`;

const Div1 = styled.div`
  position: absolute;
  left: 1.5rem;
  cursor: pointer;

  @media (min-width: 300px) {
    font-size: 1.5rem;
    line-height: 2.5rem;
  }

  @media (min-width: 540px) {
    font-size: 2.25rem;
    line-height: 2.5rem;
  }

  @media (min-width: 768px) {
    display: none;
  }
`;

const H1 = styled.h1`
  @media (min-width: 300px) {
    margin-right: 3rem;
    font-weight: 600;
    font-size: 1.3rem;
    line-height: 1.7rem;
  }

  @media (min-width: 540px) {
    margin-right: 3.9rem;
    font-size: 1.7rem;
    line-height: 1.7rem;
  }

  @media (min-width: 768px) {
    font-size: 1.7rem;
    line-height: 1.7rem;
  }

  @media (min-width: 1024px) {
    font-size: 2rem;
    line-height: 2rem;
  }

  @media (min-width: 1280px) {
    font-size: 2.25rem;
    line-height: 2.5rem;
  }
`;

const Content1 = styled.div`
  display: flex;
  flex: 1 1 0%;
  overflow: hidden;
`;

const Aside = styled.aside`
  position: fixed;
  background-color: #f1f8f5;
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

  @media (min-width: 768px) {
    transform: translateX(0);
    position: relative;
    width: 28%;
    top: 0;
    height: auto;
    max-width: none;
    box-shadow: none;
    background-color: #fff;
  }

  @media (min-width: 1024px) {
    width: 23%;
  }

  @media (min-width: 1280px) {
    width: 20%;
  }
`;

const Main = styled.main`
  flex: 1 1 0%;
  overflow-y: auto;
  background-color: rgb(243 244 246);
`;

function AdminLayout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  // console.log(isSidebarOpen);
  const sidebarRef = useRef(null);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleClickOutside = (event) => {
    if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
      setIsSidebarOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <Container>
      <Content>
        <Div1 onClick={toggleSidebar}>
          {isSidebarOpen ? <HiX /> : <HiMenu />}
        </Div1>
        <Div>
          <Logo />
        </Div>
        <H1>Admin Panel</H1>
      </Content>

      <Content1>
        <Aside $isOpen={isSidebarOpen} ref={sidebarRef}>
          <Sidebar />
        </Aside>

        <Main>
          <Outlet />
        </Main>
      </Content1>
    </Container>
  );
}

export default AdminLayout;
