import styled from 'styled-components';
import ContactUsForm from '../ui/ContactUsForm';

const Container = styled.div`
  display: flex;
  justify-content: center;
`;

const Div = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 2.5rem;
  border-radius: 0.5rem;
  border-width: 2px;
  border-style: solid;
  box-shadow:
    0 10px 15px -3px rgb(0 0 0 / 0.1),
    0 4px 6px -4px rgb(0 0 0 / 0.1);

  @media (min-width: 0px) {
    padding-bottom: 1rem;
    padding-top: 1rem;
    width: 95%;
  }

  @media (min-width: 400px) {
    padding-bottom: 1rem;
    padding-top: 2.5rem;
    width: 85%;
  }

  @media (min-width: 600px) {
    padding-bottom: 1rem;
    padding-top: 2.5rem;
    width: 80%;
  }

  @media (min-width: 768px) {
    padding-bottom: 1rem;
    padding-top: 2.5rem;
    width: 75%;
  }

  @media (min-width: 1024px) {
    padding-bottom: 1rem;
    padding-top: 2.5rem;
    width: 60%;
  }

  @media (min-width: 1280px) {
    padding-bottom: 2.5rem;
    padding-top: 2.5rem;
    width: 50%;
  }
`;

const H1 = styled.h1`
  display: flex;
  justify-content: center;
  line-height: 2.5rem;
  font-weight: 600;
  color: rgb(87 83 78);

  @media (min-width: 0px) {
    font-size: 1.5rem;
  }

  @media (min-width: 400px) {
    font-size: 1.5rem;
  }

  @media (min-width: 600px) {
    font-size: 1.8rem;
  }

  @media (min-width: 768px) {
    font-size: 2.25rem;
  }
`;

function ContactUs() {
  return (
    <Container>
      <Div>
        <H1>Contact Us</H1>
        <ContactUsForm />
      </Div>
    </Container>
  );
}

export default ContactUs;
