import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const H1 = styled.h1`
  display: flex;
  justify-content: center;
  margin-top: 5rem;
  font-size: 3rem;
  line-height: 1;
  font-weight: 700;
  color: rgb(239 68 68);

  @media (min-width: 0px) {
    margin-top: 5rem;
    margin-bottom: 5rem;
    font-size: 1.7rem;
  }

  @media (min-width: 500px) {
    margin-top: 7rem;
    margin-bottom: 7rem;
    font-size: 2.5rem;
  }

  @media (min-width: 768px) {
    margin-top: 5rem;
    margin-bottom: 10rem;
    font-size: 3rem;
  }
`;

function Failure() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/');
    }, 4000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return <H1>Payment Failed</H1>;
}

export default Failure;
