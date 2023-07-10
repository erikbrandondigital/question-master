import styled from 'styled-components';
import AnswerForm from './../components/forms/AnswerForm';
import OpenClueCard from '../components/cards/OpenClueCard';

function FinalAnswer() {
    return (
        <>
            <ArticleStyled>
                <Heading1Styled>Final Answer</Heading1Styled>
                <SectionStyled>
                    <OpenClueCard clue='Clue' />
                    <AnswerForm />
                </SectionStyled>
            </ArticleStyled>
        </>
    );
}

export default FinalAnswer;

const ArticleStyled = styled.article`
    flex: 1;
    display: flex;
    flex-direction: column;
    background-color: #ffffff;
    padding: 1.5rem;
    border-radius: 0.1875rem;
`;

const SectionStyled = styled.section`
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
`;

const Heading1Styled = styled.h1`
    margin: 0 0 1.5rem 0;
    font-family: 'Roboto-Bold';
    font-size: 1rem;
    color: #252a31;
`;
