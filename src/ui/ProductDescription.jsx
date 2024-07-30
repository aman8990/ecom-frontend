import styled from 'styled-components';
import React from 'react';

const Container = styled.div`
  margin-bottom: 2.5rem;

  @media (min-width: 0px) {
    margin-left: 0.5rem;
    margin-right: 0.5rem;
  }

  @media (min-width: 300px) {
    margin-left: 1.5rem;
    margin-right: 1.5rem;
  }

  @media (min-width: 600px) {
    margin-left: 3rem;
    margin-right: 3rem;
  }

  @media (min-width: 768px) {
    margin-left: 3rem;
    margin-right: 3rem;
  }

  @media (min-width: 1024px) {
    margin-left: 6rem;
    margin-right: 6rem;
  }

  @media (min-width: 1280px) {
    margin-left: 6rem;
    margin-right: 6rem;
  }
`;

const H1 = styled.h1`
  display: flex;
  justify-content: center;
  font-weight: 600;
  color: rgb(87 83 78);

  @media (min-width: 0px) {
    margin-bottom: 1rem;
    margin-top: 2.5rem;
    font-size: 1.1rem;
    line-height: 2.5rem;
  }

  @media (min-width: 400px) {
    margin-bottom: 1rem;
    margin-top: 2.5rem;
    font-size: 1.4rem;
    line-height: 2.5rem;
  }

  @media (min-width: 600px) {
    margin-bottom: 2rem;
    margin-top: 2.5rem;
    font-size: 1.6rem;
    line-height: 2.5rem;
  }

  @media (min-width: 768px) {
    margin-bottom: 2rem;
    margin-top: 2.5rem;
    font-size: 1.8rem;
    line-height: 2.5rem;
  }

  @media (min-width: 1024px) {
    margin-bottom: 2.5rem;
    margin-top: 2.5rem;
    font-size: 2rem;
    line-height: 2.5rem;
  }

  @media (min-width: 1280px) {
    margin-bottom: 2.5rem;
    margin-top: 2.5rem;
    font-size: 2.25rem;
    line-height: 2.5rem;
  }
`;

const Wrapper = styled.div`
  border-color: rgb(245 245 244);
  border-radius: 1.5rem;

  @media (min-width: 400px) {
    border-width: 0.7rem;
  }

  @media (min-width: 600px) {
    border-width: 1rem;
  }
`;

const Content = styled.div`
  margin-bottom: 4rem;
  margin-top: 2.5rem;
`;

const ImageContainer = styled.div`
  padding: 2rem;
  margin: 0 2rem;
  display: flex;
  height: auto;
  align-items: center;
  justify-content: center;
`;

const ImgContainer = styled.div`
  padding: 0;
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 0.125rem;
`;

const Img = styled.img`
  object-fit: contain;

  @media (min-width: 0px) {
    height: 100%;
    width: 100%;
  }

  @media (min-width: 400px) {
    height: 80%;
    width: 80%;
  }

  @media (min-width: 600px) {
    height: 60%;
    width: 60%;
  }

  @media (min-width: 768px) {
    height: 50%;
    width: 50%;
  }

  @media (min-width: 1024px) {
    height: 70%;
    width: 70%;
  }

  @media (min-width: 1280px) {
    height: 70%;
    width: 70%;
  }
`;

const P = styled.p`
  display: flex;
  justify-content: flex-start;
  color: rgb(87 83 78);

  @media (min-width: 0px) {
    margin-left: 0.1rem;
    margin-right: 0.1rem;
    margin-bottom: 1rem;
    font-size: 0.7rem;
    line-height: 1.2rem;
  }

  @media (min-width: 400px) {
    margin-left: 1rem;
    margin-right: 1rem;
    margin-bottom: 1rem;
    font-size: 0.9rem;
    line-height: 1.2rem;
  }

  @media (min-width: 600px) {
    margin-left: 2rem;
    margin-right: 2rem;
    margin-bottom: 1rem;
    font-size: 1rem;
    line-height: 1.4rem;
  }

  @media (min-width: 768px) {
    margin-left: 3rem;
    margin-right: 3rem;
    margin-bottom: 1rem;
    font-size: 1rem;
    line-height: 1.4rem;
  }

  @media (min-width: 1024px) {
    margin-left: 3rem;
    margin-right: 3rem;
    margin-bottom: 1rem;
    font-size: 1.3rem;
    line-height: 1.7rem;
  }

  @media (min-width: 1280px) {
    margin-left: 4rem;
    margin-right: 4rem;
    margin-bottom: 1rem;
    font-size: 1.5rem;
    line-height: 2rem;
  }
`;

const Span = styled.span`
  margin-right: 0.5rem;
  font-size: 1.5rem;
`;

function ProductDescription({ product }) {
  const images = product.images;
  const descriptions = product.fullDescription;

  const maxLength = Math.max(images.length, descriptions.length);

  return (
    <Container>
      <H1>More Info About Product</H1>

      <Wrapper>
        <Content>
          {Array.from({ length: maxLength }).map((_, index) => (
            <React.Fragment key={index}>
              {images[index] && (
                <ImageContainer>
                  <ImgContainer>
                    <Img src={images[index]} alt={`Image ${index + 1}`} />
                  </ImgContainer>
                </ImageContainer>
              )}
              {descriptions[index] && (
                <P>
                  <Span>&#9679;</Span>
                  <span>{descriptions[index]}</span>
                </P>
              )}
            </React.Fragment>
          ))}
        </Content>
      </Wrapper>
    </Container>
  );
}

export default ProductDescription;
