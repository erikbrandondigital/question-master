import { PropTypes } from 'prop-types';
import styled from 'styled-components';

const FinalAnswerClueCard = (props) => {
    return (
        <>
            <DivStyled>
                <Heading2Styled>{props.clue}</Heading2Styled>
            </DivStyled>
        </>
    );
};

FinalAnswerClueCard.propTypes = {
    clue: PropTypes.string.isRequired
};

export default FinalAnswerClueCard;

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
`;
