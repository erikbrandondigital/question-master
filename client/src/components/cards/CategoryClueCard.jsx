import { PropTypes } from 'prop-types';
import styled from 'styled-components';

const CategoryClueCard = (props) => {
    return (
        <>
            <DivStyled>
                <Heading3Styled>{props.category}</Heading3Styled>
            </DivStyled>
        </>
    );
};

CategoryClueCard.propTypes = {
    category: PropTypes.string.isRequired
};

export default CategoryClueCard;

const DivStyled = styled.div`
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 0.1875rem;
    padding: 1rem;
    background-color: #0172cb;
`;

const Heading3Styled = styled.h3`
    margin: 0;
    font-family: 'Roboto-Bold';
    font-size: 1.5rem;
    color: #ffffff;
    text-align: center;
    user-select: none;
    -moz-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
`;
