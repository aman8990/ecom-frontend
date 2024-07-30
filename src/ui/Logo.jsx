import { HiCubeTransparent } from 'react-icons/hi';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  cursor: pointer;
  align-items: center;

  @media (min-width: 300px) {
    gap: 0.12rem;
  }

  @media (min-width: 540px) {
    gap: 0.125rem;
  }

  @media (min-width: 768px) {
    gap: 0.125rem;
  }

  @media (min-width: 1024px) {
    gap: 0.25rem;
  }

  @media (min-width: 1280px) {
    gap: 0.75rem;
  }
`;

const Span1 = styled.span`
  font-size: 1rem;
  color: rgb(22 163 74);

  @media (min-width: 300px) {
    font-size: 2.2rem;
    line-height: 2.5rem;
  }

  @media (min-width: 540px) {
    font-size: 3rem;
    line-height: 2.5rem;
  }

  @media (min-width: 768px) {
    font-size: 3rem;
    line-height: 2.5rem;
  }

  @media (min-width: 1024px) {
    font-size: 4.5rem;
    line-height: 1;
  }

  @media (min-width: 1280px) {
    font-size: 4.5rem;
    line-height: 1;
  }
`;

const Span2 = styled.span`
  font-size: 1rem;
  font-weight: 600;
  color: rgb(22 163 74);

  @media (min-width: 300px) {
    font-size: 1.4rem;
    line-height: 1.75rem;
  }

  @media (min-width: 540px) {
    font-size: 1.5rem;
    line-height: 1.75rem;
  }

  @media (min-width: 768px) {
    font-size: 1.5rem;
    line-height: 1.75rem;
  }

  @media (min-width: 1024px) {
    font-size: 1.875rem;
    line-height: 2rem;
  }

  @media (min-width: 1280px) {
    font-size: 1.875rem;
    line-height: 2.25rem;
  }
`;

function Logo() {
  const navigate = useNavigate();

  return (
    <Container onClick={() => navigate('/')}>
      <Span1>
        <HiCubeTransparent />
      </Span1>
      <Span2>App</Span2>
    </Container>
  );
}

export default Logo;
