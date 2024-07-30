import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const H1 = styled.h1`
  display: flex;
  justify-content: center;
  line-height: 1;
  font-weight: 700;
  color: rgb(22 163 74);

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

function Success() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/');
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return <H1>Payment Successfull</H1>;
}

export default Success;
