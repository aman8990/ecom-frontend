import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

const variations = {
  green: css`
    background-color: rgb(22 163 74);
    color: #fff;
  `,

  gray: css`
    background-color: rgb(229 231 235);
    color: rgb(41 37 36);
  `,
};

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.5rem 1.5rem;
  border-radius: 0.375rem;
  font-weight: 600;
  position: relative;
  overflow: hidden;

  ${(props) => variations[props.$variation]}

  @media (min-width: 300px) {
    padding-left: 0.4rem;
    padding-right: 0.4rem;
  }

  @media (min-width: 400px) {
    padding-left: 0.5rem;
    padding-right: 0.5rem;
  }

  @media (min-width: 600px) {
    padding-left: 0.6rem;
    padding-right: 0.6rem;
  }

  @media (min-width: 768px) {
    padding-left: 0.6rem;
    padding-right: 0.6rem;
  }

  @media (min-width: 1024px) {
    padding-left: 0.625rem;
    padding-right: 0.625rem;
  }

  @media (min-width: 1280px) {
    padding-left: 0.75rem;
    padding-right: 0.75rem;
  }
`;

Button.propTypes = {
  $variation: PropTypes.oneOf(['green', 'gray']),
};

export default Button;
