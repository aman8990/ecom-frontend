import { HiCubeTransparent } from 'react-icons/hi';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

const H1 = styled.h1`
  display: flex;
  justify-content: center;
  line-height: 1;
  font-weight: 600;
  color: rgb(241 245 249);

  @media (min-width: 0px) {
    font-size: 1.5rem;
  }

  @media (min-width: 400px) {
    font-size: 2rem;
  }

  @media (min-width: 600px) {
    font-size: 2.5rem;
  }

  @media (min-width: 768px) {
    font-size: 3rem;
  }

  @media (min-width: 1024px) {
    font-size: 3.75rem;
  }

  @media (min-width: 1280px) {
    font-size: 3.75rem;
  }
`;

const H2 = styled.h1`
  margin-top: 1.5rem;
  color: rgb(241 245 249);

  @media (min-width: 0px) {
    font-size: 0.7rem;
    line-height: 1.25rem;
  }

  @media (min-width: 400px) {
    font-size: 0.82rem;
    line-height: 1.25rem;
  }

  @media (min-width: 600px) {
    font-size: 0.82rem;
    line-height: 1.25rem;
  }

  @media (min-width: 768px) {
    font-size: 0.82rem;
    line-height: 1.25rem;
  }

  @media (min-width: 1024px) {
    font-size: 0.875rem;
    line-height: 1.25rem;
  }
`;

const H3 = styled.h1`
  margin-top: 0.25rem;
  color: rgb(241 245 249);

  @media (min-width: 0px) {
    font-size: 0.7rem;
    line-height: 1.25rem;
  }

  @media (min-width: 400px) {
    font-size: 0.82rem;
    line-height: 1.25rem;
  }

  @media (min-width: 600px) {
    font-size: 0.82rem;
    line-height: 1.25rem;
  }

  @media (min-width: 768px) {
    font-size: 0.82rem;
    line-height: 1.25rem;
  }

  @media (min-width: 1024px) {
    font-size: 0.875rem;
    line-height: 1.25rem;
  }
`;

function FooterAbout() {
  return (
    <Container>
      <H1>
        <span>
          <HiCubeTransparent />
        </span>
        <span>App</span>
      </H1>

      <H2>Office : Sector 4, Safidon(126112), Jind, Haryana</H2>

      <H3>Copyright &copy; 2024, App Technologies Pvt. Ltd.</H3>
    </Container>
  );
}

export default FooterAbout;
