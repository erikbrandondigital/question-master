import { PropTypes } from 'prop-types';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const FullWidthButton = (props) => {
  return (
    <>
      <LinkStyled to={props.to} aria-label={props.text}>
        {props.text}
      </LinkStyled>
    </>
  );
};

FullWidthButton.propTypes = {
  to: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default FullWidthButton;

const LinkStyled = styled(Link)`
  display: block;
  padding: 0.75rem 1rem;
  border-radius: 0.1875rem;
  font-family: 'Roboto-Medium';
  font-size: 0.875rem;
  text-decoration: none;
  color: #ffffff;
  background-color: #0172cb;
  text-align: center;
  &:hover,
  &:focus,
  &:focus-visible {
    background-color: #0161ac;
  }
`;
