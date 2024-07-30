import { useNavigate } from 'react-router-dom';
import img1 from './../data/img1.jpg';
import img2 from './../data/img2.jpg';
// import img3 from './../data/img3.jpg';

import React from 'react';
import styled, { keyframes } from 'styled-components';

const Slide = keyframes`
   0% { opacity: 1; transform: translateX(0); }
  45% { opacity: 1; transform: translateX(0); }
  50% { opacity: 0; transform: translateX(-100%); }
  95% { opacity: 0; transform: translateX(100%); }
  100% { opacity: 1; transform: translateX(0); }
`;

const Container = styled.div`
  margin-top: 1.25rem;
  border-width: 4px;
  border-style: solid;
  border-color: rgb(245 245 244);

  @media (min-width: 0px) {
    margin-bottom: 3rem;
    margin-left: 0.5rem;
    margin-right: 0.5rem;
    height: 8rem;
  }

  @media (min-width: 400px) {
    margin-bottom: 3rem;
    margin-left: 0.5rem;
    margin-right: 0.5rem;
    height: 12rem;
  }

  @media (min-width: 600px) {
    margin-bottom: 3rem;
    margin-left: 1.5rem;
    margin-right: 1.5rem;
    height: 17rem;
  }

  @media (min-width: 768px) {
    margin-bottom: 6rem;
    margin-left: 3.5rem;
    margin-right: 3rem;
    height: 20rem;
  }

  @media (min-width: 1024px) {
    margin-bottom: 6rem;
    margin-left: 4.8rem;
    margin-right: 4rem;
    height: 25rem;
  }

  @media (min-width: 1280px) {
    margin-bottom: 6rem;
    margin-left: 7rem;
    margin-right: 6rem;
    height: 30rem;
  }
`;

const SliderContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  cursor: pointer;
`;

const Image = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: inherit;
  animation: ${Slide} 6s linear infinite;
`;

const Image1 = styled(Image)`
  animation-delay: 0s;
`;

const Image2 = styled(Image)`
  animation-delay: 3s;
`;

function HomepageImage() {
  const navigate = useNavigate();

  function handleClick(id) {
    console.log(id);
    navigate(`/product?id=${id}`);
  }

  return (
    <Container>
      <SliderContainer>
        <Image1
          src={img1}
          alt="First Image"
          onClick={() => handleClick('669965381b4c2e33e5606d3a')}
        />
        <Image2
          src={img2}
          alt="Second Image"
          onClick={() => handleClick('667998c1c897ebfd00eb2398')}
        />
      </SliderContainer>
    </Container>
  );
}

export default HomepageImage;
