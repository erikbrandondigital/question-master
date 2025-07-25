import styled from 'styled-components';

const BlankClueCard = () => {
  return (
    <>
      <DivStyled>
        <Heading2Styled></Heading2Styled>
      </DivStyled>
    </>
  );
};

export default BlankClueCard;

const DivStyled = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 0.1875rem;
  padding: 1.5rem;
  background-color: #0172cb;
`;

const Heading2Styled = styled.h2`
  margin: 0;
  font-family: 'Roboto-Bold';
  font-size: 1.75rem;
  color: #ffffff;
  user-select: none;
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
`;
