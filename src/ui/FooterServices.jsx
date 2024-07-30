import { FaFacebookF, FaYoutube, FaInstagram } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: center;

  @media (min-width: 0px) {
    gap: 2rem;
  }

  @media (min-width: 400px) {
    gap: 4rem;
  }

  @media (min-width: 600px) {
    gap: 5rem;
  }

  @media (min-width: 768px) {
    gap: 4rem;
  }

  @media (min-width: 1024px) {
    gap: 5rem;
  }
`;

const H1 = styled.h1`
  font-weight: 700;
  color: rgb(252 211 77);

  @media (min-width: 0px) {
    font-size: 0.8rem;
    line-height: 1.4rem;
  }

  @media (min-width: 400px) {
    font-size: 1rem;
    line-height: 1.4rem;
  }

  @media (min-width: 600px) {
    font-size: 1.2rem;
    line-height: 1.4rem;
  }

  @media (min-width: 768px) {
    font-size: 1.2rem;
    line-height: 1.4rem;
  }

  @media (min-width: 1024px) {
    font-size: 1.5rem;
    line-height: 2rem;
  }
`;

const Li = styled.li`
  font-weight: 600;
  color: rgb(241 245 249);

  @media (min-width: 0px) {
    margin-top: 0.1rem;
    font-size: 0.7rem;
    line-height: 1.5rem;
  }

  @media (min-width: 400px) {
    margin-top: 0.4rem;
    font-size: 0.9rem;
    line-height: 1.5rem;
  }

  @media (min-width: 600px) {
    margin-top: 0.4rem;
    font-size: 0.9rem;
    line-height: 1.5rem;
  }

  @media (min-width: 768px) {
    margin-top: 0.4rem;
    font-size: 0.9rem;
    line-height: 1.5rem;
  }

  @media (min-width: 1024px) {
    margin-top: 0.75rem;
    font-size: 1rem;
    line-height: 1.5rem;
  }
`;

const StyledLink = styled(Link)`
  cursor: pointer;
  border-radius: 9999px;
  background-color: rgb(252 211 77);
  color: rgb(21 128 61);

  @media (min-width: 0px) {
    padding: 0.3rem;
    font-size: 0.7rem;
    line-height: 1.5rem;
    font-weight: 500;
  }

  @media (min-width: 400px) {
    padding: 0.5rem;
    font-size: 1rem;
    line-height: 1.5rem;
    font-weight: 700;
  }
`;

const Button = styled.button`
  margin-top: 0.5rem;

  font-weight: 700;
  color: rgb(21 128 61);
  background-color: rgb(252 211 77);
  border-radius: 9999px;

  @media (min-width: 0px) {
    font-size: 0.7rem;
    padding-left: 0.6rem;
    padding-right: 0.6rem;
    padding-top: 0.4rem;
    padding-bottom: 0.4rem;
  }

  @media (min-width: 400px) {
    font-size: 0.8rem;
    line-height: 1.5rem;
    padding-left: 0.7rem;
    padding-right: 0.7rem;
    padding-top: 0.4rem;
    padding-bottom: 0.4rem;
  }

  @media (min-width: 600px) {
    font-size: 0.9rem;
    line-height: 1.5rem;
    padding-left: 0.8rem;
    padding-right: 0.8rem;
    padding-top: 0.4rem;
    padding-bottom: 0.4rem;
  }

  @media (min-width: 768px) {
    font-size: 0.9rem;
    line-height: 1.5rem;
    padding-left: 0.8rem;
    padding-right: 0.8rem;
    padding-top: 0.4rem;
    padding-bottom: 0.4rem;
  }

  @media (min-width: 1024px) {
    font-size: 1rem;
    line-height: 1.5rem;
    padding-left: 1rem;
    padding-right: 1rem;
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
  }
`;

const IconContainer = styled.div`
  display: flex;
  gap: 0.5rem;
  margin-top: 1rem;
`;

function FooterServices() {
  return (
    <Container>
      <div>
        <H1>POLICIES</H1>

        <ul>
          <Li>
            <Link to="privacyPolicy">Privacy Policy</Link>
          </Li>
          <Li>
            <Link to="shippingPolicy">Shipping Policy</Link>
          </Li>
          <Li>
            <Link to="refundPolicy">Refund Policy</Link>
          </Li>
          <Li>
            <Link to="termsOfService">Terms of Service</Link>
          </Li>
        </ul>
      </div>

      <div>
        <H1>NEED HELP?</H1>
        <Button>
          <Link to="/contactUs">Contact Us</Link>
        </Button>

        <IconContainer>
          <StyledLink to="https://facebook.com">
            <FaFacebookF />
          </StyledLink>

          <StyledLink to="https://instagram.com">
            <FaInstagram />
          </StyledLink>

          <StyledLink to="https://twitter.com">
            <FaXTwitter />
          </StyledLink>

          <StyledLink to="https://youtube.com">
            <FaYoutube />
          </StyledLink>
        </IconContainer>
      </div>
    </Container>
  );
}

export default FooterServices;
