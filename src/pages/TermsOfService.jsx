import styled from 'styled-components';
import TermsOfServiceInfo from '../ui/TermsOfServiceInfo';

const H1 = styled.h1`
  display: flex;
  justify-content: center;
  line-height: 2.5rem;
  font-weight: 600;
  color: rgb(87 83 78);
  margin-top: 2.5rem;

  @media (min-width: 0px) {
    font-size: 2rem;
  }

  @media (min-width: 400px) {
    font-size: 2.25rem;
  }
`;

function TermsOfService() {
  return (
    <div>
      <H1>Terms of Service</H1>
      <TermsOfServiceInfo />
    </div>
  );
}

export default TermsOfService;
