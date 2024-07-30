import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const H1 = styled.h1`
  line-height: 1;
  font-weight: 600;
  color: rgb(87 83 78);

  @media (min-width: 0px) {
    font-size: 1.5rem;
    margin-top: 4rem;
    margin-bottom: 2rem;
  }

  @media (min-width: 500px) {
    font-size: 2.5rem;
    margin-top: 6rem;
    margin-bottom: 3rem;
  }

  @media (min-width: 768px) {
    font-size: 4.5rem;
    margin-top: 8rem;
  }
`;

const Button = styled.button`
  border-radius: 0.5rem;
  background-color: rgb(34 197 94);
  font-weight: 600;
  color: #fff;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: rgb(22 163 74);
  }

  @media (min-width: 0px) {
    padding: 0.5rem 0.8rem;
    font-size: 1rem;
    line-height: 2.5rem;
  }

  @media (min-width: 500px) {
    padding: 1rem;
    font-size: 1.6rem;
    line-height: 2.5rem;
  }

  @media (min-width: 768px) {
    padding: 1.5rem;
    font-size: 2.25rem;
    line-height: 2.5rem;
  }
`;

function PageNotFound() {
  const naviagte = useNavigate();

  return (
    <Container>
      <H1>Page Not Found</H1>
      <Button onClick={() => naviagte(-1)}> Go Back</Button>
    </Container>
  );
}

export default PageNotFound;
