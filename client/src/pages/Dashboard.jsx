import { useContext } from 'react';
import styled from 'styled-components';

import { UserContext } from '../contexts/UserContext';

import StatsCard from '../components/cards/StatsCard';
import Utils from '../utils/Utils';

function Dashboard() {
    const { userData, isLoading, isError, error } = useContext(UserContext);

    return (
        <>
            <ArticleStyled>
                <Heading1Styled>Your Statistics</Heading1Styled>
                <DivStyled>
                    {isLoading ? (
                        <>
                            <StatsCard
                                title='Answers'
                                description="See how well you're doing in Answers"
                                cta='Start Practicing'
                                ctaTo='/answers'
                                correctAnswers={'Loading...'}
                                incorrectAnswers={'Loading...'}
                                attemptedAnswers={'Loading...'}
                                successRate={'Loading...'}
                            />
                            <StatsCard
                                title='Final Answer'
                                description="See how well you're doing in Final Answer"
                                cta='Start Practicing'
                                ctaTo='/final-answers'
                                correctAnswers={'Loading...'}
                                incorrectAnswers={'Loading...'}
                                attemptedAnswers={'Loading...'}
                                successRate={'Loading...'}
                            />
                        </>
                    ) : null}

                    {isError ? (
                        <>
                            <StatsCard
                                title='Answers'
                                description="See how well you're doing in Answers"
                                cta='Start Practicing'
                                ctaTo='/answers'
                                correctAnswers={`Error: ${error.message}`}
                                incorrectAnswers={`Error: ${error.message}`}
                                attemptedAnswers={`Error: ${error.message}`}
                                successRate={`Error: ${error.message}`}
                            />
                            <StatsCard
                                title='Final Answer'
                                description="See how well you're doing in Final Answer"
                                cta='Start Practicing'
                                ctaTo='/final-answers'
                                correctAnswers={`Error: ${error.message}`}
                                incorrectAnswers={`Error: ${error.message}`}
                                attemptedAnswers={`Error: ${error.message}`}
                                successRate={`Error: ${error.message}`}
                            />
                        </>
                    ) : null}
                    {Object.keys(userData).length > 0 ? (
                        <>
                            <StatsCard
                                title='Answers'
                                description="See how well you're doing in Answers"
                                cta='Start Practicing'
                                ctaTo='/answers'
                                correctAnswers={`${userData.stats.answers.correctAnswers} Correct Answers`}
                                incorrectAnswers={`${userData.stats.answers.incorrectAnswers} Incorrect Answers`}
                                attemptedAnswers={`${userData.stats.answers.attemptedAnswers} Questions Answered`}
                                successRate={`${Utils.calculateSuccessRate(
                                    userData.stats.answers.correctAnswers,
                                    userData.stats.answers.attemptedAnswers
                                )} Success Rate`}
                            />
                            <StatsCard
                                title='Final Answer'
                                description="See how well you're doing in Final Answer"
                                cta='Start Practicing'
                                ctaTo='/final-answers'
                                correctAnswers={`${userData.stats.finalAnswer.correctAnswers} Correct Answers`}
                                incorrectAnswers={`${userData.stats.finalAnswer.incorrectAnswers} Incorrect Answers`}
                                attemptedAnswers={`${userData.stats.finalAnswer.attemptedAnswers} Questions Answered`}
                                successRate={`${Utils.calculateSuccessRate(
                                    userData.stats.finalAnswer.correctAnswers,
                                    userData.stats.finalAnswer
                                        .attemptedAnswers
                                )} Success Rate`}
                            />
                        </>
                    ) : null}
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
