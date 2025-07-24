import { PropTypes } from 'prop-types';
import styled from 'styled-components';

const Stat = (props) => {
  return (
    <>
      <DivStyled>
        <i>{props.icon}</i>
        <ParagraphStyled>{props.value}</ParagraphStyled>
      </DivStyled>
    </>
  );
};

Stat.propTypes = {
  value: PropTypes.string.isRequired,
  icon: PropTypes.element,
};

export default Stat;

const DivStyled = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 0.5rem;
  padding: 0.875rem 1rem;
  border-bottom: 1px solid #e8edf1;
  background-color: #f5f7f9;
`;

const ParagraphStyled = styled.p`
  margin: 0;
  font-family: 'Roboto-Medium';
  font-size: 0.875rem;
  color: #252a31;
`;
