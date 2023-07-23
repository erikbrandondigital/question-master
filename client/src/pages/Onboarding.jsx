/* eslint-disable react/no-unescaped-entities */
import styled from 'styled-components';
import RegistrationForm from '../components/forms/RegistrationForm';

function Onboarding() {
    return (
        <>
            <ArticleStyled>
                <Heading1Styled>Welcome To Question Master</Heading1Styled>
                <ParagraphStyled>
                    Question Master is a revolutionary new platform built for you,
                    the Answers game show fan. Level up your Answers skills by
                    testing your knowledge and trying your hand at answering
                    real Answers game show questions. Play a solo game of
                    Answers with the real Answers game board and improve your
                    question choice strategy or try your hand at answering real
                    Final Answer questions. While you practice, our platform
                    will keep track of your stats so you can show off your
                    Answers skills to family and friends. Who knows, maybe some
                    day you'll even be selected to appear on the real Answers
                    TV game show! So the only question is, "Do you have what it
                    takes?"
                </ParagraphStyled>
                <Heading2Styled>Start Practicing Today</Heading2Styled>
                <SectionStyled>
                    <RegistrationForm />
                </SectionStyled>
            </ArticleStyled>
        </>
    );
}

export default Onboarding;

const ArticleStyled = styled.article`
    background-color: #ffffff;
    padding: 1.5rem;
    border-radius: 0.1875rem;
`;

const SectionStyled = styled.section`
    display: flex;
    flex-direction: row;
    gap: 1.5rem;
`;

const Heading1Styled = styled.h1`
    margin: 0 0 1.5rem 0;
    text-align: center;
    font-family: 'Roboto-Bold';
    font-size: 2rem;
    color: #252a31;
`;

const Heading2Styled = styled.h2`
    margin: 0 0 1.5rem 0;
    text-align: center;
    font-family: 'Roboto-Bold';
    font-size: 1.5rem;
    color: #252a31;
`;

const ParagraphStyled = styled.p`
    margin: 0 0 1.25rem 0;
    font-family: 'Roboto-Regular';
    font-size: 1rem;
    color: #252a31;
`;
