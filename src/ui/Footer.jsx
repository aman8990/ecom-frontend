import styled from 'styled-components';
import FooterServices from './FooterServices';
import FooterAbout from './FooterAbout';

const GridContainer = styled.div`
  display: grid;
  margin-top: 4rem;
  background-color: rgb(22 163 74);

  @media (min-width: 768px) {
    grid-template-columns: 0.9fr 1.1fr;
  }

  @media (min-width: 1024px) {
    grid-template-columns: 1fr 1fr;
  }
`;

const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  @media (min-width: 0px) {
    margin-top: 1rem;
  }

  @media (min-width: 400px) {
    margin-top: 1.5rem;
  }

  @media (min-width: 600px) {
    margin-top: 2.5rem;
  }

  @media (min-width: 768px) {
    margin-bottom: 2.5rem;
    margin-top: 2.5rem;
  }
`;

const Content1 = styled.div`
  display: flex;

  @media (min-width: 0px) {
    align-items: center;
    justify-content: center;
    margin-top: 1.3rem;
    margin-bottom: 1.3rem;
  }

  @media (min-width: 400px) {
    align-items: center;
    justify-content: center;
    margin-top: 1.5rem;
    margin-bottom: 1.5rem;
  }

  @media (min-width: 768px) {
    align-items: center;
    justify-content: flex-start;
    margin-left: 4rem;
    margin-bottom: 2.5rem;
    margin-top: 2.5rem;
  }

  @media (min-width: 1024px) {
    margin-left: 4rem;
  }
`;

function Footer() {
  return (
    <GridContainer>
      <Content>
        <FooterAbout />
      </Content>

      <Content1>
        <FooterServices />
      </Content1>
    </GridContainer>
  );
}

export default Footer;
