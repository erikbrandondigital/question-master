import styled from 'styled-components';
import StatsCard from '../components/cards/StatsCard';

function Dashboard() {
    return (
        <>
            <ArticleStyled>
                <Heading1Styled>Your Statistics</Heading1Styled>
                <DivStyled>
                    <StatsCard
                        title='Answers'
                        description="See how well you're doing in Answers"
                        cta='Start Practicing'
                        ctaTo='/answers'
                    />
                    <StatsCard
                        title='Final Answer'
                        description="See how well you're doing in Final Answer"
                        cta='Start Practicing'
                        ctaTo='/final-answers'
                    />
                </DivStyled>
            </ArticleStyled>
        </>
    );
}

export default Dashboard;

const ArticleStyled = styled.article`
    background-color: #ffffff;
    padding: 1.5rem;
    border-radius: 0.1875rem;
`;

const DivStyled = styled.div`
    display: flex;
    flex-direction: row;
    gap: 1.5rem;
`;

const Heading1Styled = styled.h1`
    margin: 0 0 1.5rem 0;
    font-family: 'Roboto-Bold';
    font-size: 1rem;
    color: #252a31;
`;
