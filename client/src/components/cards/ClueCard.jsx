import { PropTypes } from 'prop-types';
import styled from 'styled-components';

const ClueCard = (props) => {
    return (
        <>
            <ButtonStyled onClick={props.onClick} type='button'>
                <Heading2Styled>{props.value}</Heading2Styled>
            </ButtonStyled>
        </>
    );
};

ClueCard.propTypes = {
    value: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired
};

export default ClueCard;

const ButtonStyled = styled.button`
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 0.1875rem;
    padding: 1rem;
    background-color: #0172cb;
    outline: none;
    border: none;
    cursor: pointer;
    &:hover,
    &:focus,
    &:focus-visible {
        background-color: #0161ac;
    }
`;

const Heading2Styled = styled.h2`
    margin: 0;
    font-family: 'Roboto-Bold';
    font-size: 1.5rem;
    color: #ffffff;
`;
