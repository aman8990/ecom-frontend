import styled from 'styled-components';
import PrivacyPolicyInfo from '../ui/PrivacyPolicyInfo';

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

function PrivacyPolicy() {
  return (
    <div>
      <H1>Privacy Policy</H1>
      <PrivacyPolicyInfo />
    </div>
  );
}

export default PrivacyPolicy;
