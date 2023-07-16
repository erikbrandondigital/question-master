import { useContext, useEffect } from 'react';
import styled from 'styled-components';
import MainAnswerForm from '../components/forms/MainAnswerForm';
import ClueCard from '../components/cards/ClueCard';
import CategoryClueCard from '../components/cards/CategoryClueCard';
import OpenClueCard from '../components/cards/OpenClueCard';
import BlankClueCard from './../components/cards/BlankClueCard';
import { MainAnswersContext } from '../App';

function Answers() {
    const {
        isAnswering,
        setIsAnswering,
        currentClue,
        setCurrentClue,
        setMainAnswer,
        boardData,
        setBoardData
    } = useContext(MainAnswersContext);

    useEffect(() => {
        if (boardData.length === 0) {
            setBoardData([
                {
                    name: 'Category 1',
                    clues: [
                        {
                            question: 'Clue 1',
                            answer: 'test',
                            value: '$400',
                            isAnswered: false
                        },
                        {
                            question: 'Clue 2',
                            answer: 'test',
                            value: '$800',
                            isAnswered: false
                        },
                        {
                            question: 'Clue 3',
                            answer: 'test',
                            value: '$1200',
                            isAnswered: false
                        },
                        {
                            question: 'Clue 4',
                            answer: 'test',
                            value: '$1600',
                            isAnswered: false
                        },
                        {
                            question: 'Clue 5',
                            answer: 'test',
                            value: '$2000',
                            isAnswered: false
                        }
                    ]
                },
                {
                    name: 'Category 2',
                    clues: [
                        {
                            question: 'Clue 7',
                            answer: 'test',
                            value: '$400',
                            isAnswered: false
                        },
                        {
                            question: 'Clue 8',
                            answer: 'test',
                            value: '$800',
                            isAnswered: false
                        },
                        {
                            question: 'Clue 9',
                            answer: 'test',
                            value: '$1200',
                            isAnswered: false
                        },
                        {
                            question: 'Clue 10',
                            answer: 'test',
                            value: '$1600',
                            isAnswered: false
                        },
                        {
                            question: 'Clue 11',
                            answer: 'test',
                            value: '$2000',
                            isAnswered: false
                        }
                    ]
                },
                {
                    name: 'Category 3',
                    clues: [
                        {
                            question: 'Clue 13',
                            answer: 'test',
                            value: '$400',
                            isAnswered: false
                        },
                        {
                            question: 'Clue 14',
                            answer: 'test',
                            value: '$800',
                            isAnswered: false
                        },
                        {
                            question: 'Clue 15',
                            answer: 'test',
                            value: '$1200',
                            isAnswered: false
                        },
                        {
                            question: 'Clue 16',
                            answer: 'test',
                            value: '$1600',
                            isAnswered: false
                        },
                        {
                            question: 'Clue 17',
                            answer: 'test',
                            value: '$2000',
                            isAnswered: false
                        }
                    ]
                },
                {
                    name: 'Category 4',
                    clues: [
                        {
                            question: 'Clue 19',
                            answer: 'test',
                            value: '$400',
                            isAnswered: false
                        },
                        {
                            question: 'Clue 20',
                            answer: 'test',
                            value: '$800',
                            isAnswered: false
                        },
                        {
                            question: 'Clue 21',
                            answer: 'test',
                            value: '$1200',
                            isAnswered: false
                        },
                        {
                            question: 'Clue 22',
                            answer: 'test',
                            value: '$1600',
                            isAnswered: false
                        },
                        {
                            question: 'Clue 23',
                            answer: 'test',
                            value: '$2000',
                            isAnswered: false
                        }
                    ]
                },
                {
                    name: 'Category 5',
                    clues: [
                        {
                            question: 'Clue 25',
                            answer: 'test',
                            value: '$400',
                            isAnswered: false
                        },
                        {
                            question: 'Clue 26',
                            answer: 'test',
                            value: '$800',
                            isAnswered: false
                        },
                        {
                            question: 'Clue 27',
                            answer: 'test',
                            value: '$1200',
                            isAnswered: false
                        },
                        {
                            question: 'Clue 28',
                            answer: 'test',
                            value: '$1600',
                            isAnswered: false
                        },
                        {
                            question: 'Clue 29',
                            answer: 'test',
                            value: '$2000',
                            isAnswered: false
                        }
                    ]
                },
                {
                    name: 'Category 6',
                    clues: [
                        {
                            question: 'Clue 31',
                            answer: 'test',
                            value: '$400',
                            isAnswered: false
                        },
                        {
                            question: 'Clue 32',
                            answer: 'test',
                            value: '$800',
                            isAnswered: false
                        },
                        {
                            question: 'Clue 33',
                            answer: 'test',
                            value: '$1200',
                            isAnswered: false
                        },
                        {
                            question: 'Clue 34',
                            answer: 'test',
                            value: '$1600',
                            isAnswered: false
                        },
                        {
                            question: 'Clue 35',
                            answer: 'test',
                            value: '$2000',
                            isAnswered: false
                        }
                    ]
                }
            ]);
        }
    }, [setBoardData]);

    const handleClick = (e, clue) => {
        console.log(e, clue.question);
        setMainAnswer(clue.answer);
        setCurrentClue(clue.question);
        clue.isAnswered = true;
        setIsAnswering(true);
    };

    let categories = [];
    boardData.forEach((category) => {
        categories.push(
            <CategoryClueCard category={category.name} key={category.name} />
        );

        category.clues.forEach((clue) => {
            categories.push(
                clue.isAnswered ? (
                    <BlankClueCard key={clue.question} />
                ) : (
                    <ClueCard
                        key={clue.question}
                        value={clue.value}
                        onClick={(e) => {
                            handleClick(e, clue);
                        }}
                    />
                )
            );
        });
    });

    console.log(categories);

    return (
        <>
            <ArticleStyled>
                <Heading1Styled>Answers</Heading1Styled>
                {isAnswering ? (
                    <SectionStyled>
                        <OpenClueCard clue={currentClue.toString()} />
                        <MainAnswerForm />
                    </SectionStyled>
                ) : (
                    <GridSectionStyled>{categories}</GridSectionStyled>
                )}
            </ArticleStyled>
        </>
    );
}

export default Answers;

const ArticleStyled = styled.article`
    flex: 1;
    display: flex;
    flex-direction: column;
    background-color: #ffffff;
    padding: 1.5rem;
    border-radius: 0.1875rem;
`;

const GridSectionStyled = styled.section`
    flex: 1;
    display: grid;
    /* grid-template-columns: repeat(6, 1fr); */
    grid-template-rows: repeat(6, 1fr);
    grid-auto-flow: column;
    gap: 0.125rem;
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
