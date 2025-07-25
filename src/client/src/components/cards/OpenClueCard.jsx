import { PropTypes } from 'prop-types';
import styled from 'styled-components';

const OpenClueCard = (props) => {
  return (
    <>
      <DivStyled>
        <Heading3Styled>{props.clue}</Heading3Styled>
      </DivStyled>
    </>
  );
};

OpenClueCard.propTypes = {
  clue: PropTypes.string.isRequired,
};

export default OpenClueCard;

const DivStyled = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 0.1875rem;
  padding: 1.5rem 12rem;
  background-color: #0172cb;
`;

const Heading3Styled = styled.h3`
  margin: 0;
  font-family: 'Roboto-Bold';
  font-size: 1.75rem;
  color: #ffffff;
  text-align: center;
  user-select: none;
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
`;
