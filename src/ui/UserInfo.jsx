import defaultImage from '../../default.jpg';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 0.5rem;
`;

const Container1 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Container2 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ImageContainer = styled.div`
  border-radius: 9999px;
`;

const Img = styled.img`
  border-radius: 9999px;

  @media (min-width: 0px) {
    margin-top: 1rem;
    height: 6rem;
    width: 6rem;
  }

  @media (min-width: 400px) {
    margin-top: 1rem;
    height: 6rem;
    width: 6rem;
  }

  @media (min-width: 600px) {
    margin-top: 1rem;
    height: 7rem;
    width: 7rem;
  }

  @media (min-width: 768px) {
    height: 9rem;
    width: 9rem;
  }

  @media (min-width: 1280px) {
    height: 10rem;
    width: 10rem;
  }
`;

const H1 = styled.h1`
  display: flex;
  justify-content: center;
  margin-top: 0.5rem;
  text-transform: uppercase;
  color: rgb(12 10 9);

  @media (min-width: 0px) {
    font-size: 1.2rem;
    line-height: 2.25rem;
  }

  @media (min-width: 400px) {
    font-size: 1.2rem;
    line-height: 2.25rem;
  }

  @media (min-width: 600px) {
    font-size: 1.4rem;
    line-height: 2.25rem;
  }

  @media (min-width: 768px) {
    font-size: 1.4rem;
    line-height: 2.25rem;
  }

  @media (min-width: 1024px) {
    font-size: 1.6rem;
    line-height: 2.25rem;
  }

  @media (min-width: 1280px) {
    font-size: 1.875rem;
    line-height: 2.25rem;
  }
`;

const H2 = styled.h1`
  display: flex;
  margin-bottom: 0.2rem;
  color: rgb(68 64 60);

  @media (min-width: 0px) {
    font-size: 0.9rem;
    font-weight: 400;
    line-height: 1.4rem;
  }

  @media (min-width: 400px) {
    font-size: 0.9rem;
    font-weight: 400;
    line-height: 1.4rem;
  }

  @media (min-width: 600px) {
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.4rem;
  }

  @media (min-width: 768px) {
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.4rem;
  }

  @media (min-width: 1024px) {
    font-size: 1.3rem;
    line-height: 2rem;
  }

  @media (min-width: 1280px) {
    font-size: 1.5rem;
    line-height: 2rem;
  }
`;

function UserInfo({ user }) {
  const photo = defaultImage;

  return (
    <Container>
      <Container1>
        <ImageContainer>
          <Img src={photo} alt={user.name} />
        </ImageContainer>
        <H1>{user.name}</H1>
      </Container1>

      <Container2>
        <H2>Email : {user.email}</H2>
        <H2>Phone No : {user.phone}</H2>
      </Container2>
    </Container>
  );
}

export default UserInfo;
