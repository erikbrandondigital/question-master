import { useContext, useEffect } from 'react';
import styled from 'styled-components';
import { MainAnswersContext } from '../contexts/MainAnswersContext';
import CategoryClueCard from '../components/cards/CategoryClueCard';
import ClueCard from '../components/cards/ClueCard';
import OpenClueCard from '../components/cards/OpenClueCard';
import MainAnswerForm from '../components/forms/MainAnswerForm';
import BlankClueCard from './../components/cards/BlankClueCard';
import Utils from './../utils/Utils';
import { useQueryAnswers } from '../apis/JService';
import { useQueryClient } from '@tanstack/react-query';

function Answers() {
    const {
        isAnswering,
        setIsAnswering,
        currentClue,
        setCurrentClue,
        setMainAnswer,
        mainAnswerCount,
        setMainAnswerCount,
        boardData,
        setBoardData
    } = useContext(MainAnswersContext);

    const queryClient = useQueryClient();

    const { isLoading, isError, isSuccess, data, error } = useQueryAnswers();

    useEffect(() => {
        if (isSuccess) {
            if (boardData.length === 0) {
                let categories = [];
                if (categories.length < 6)
                    Utils.waitForSeconds(10).then(() =>
                        queryClient.refetchQueries(['mainAnswersData'])
                    );
                data.forEach((category) => {
                    if (category.clues.length < 5) {
                        Utils.waitForSeconds(10).then(() =>
                            queryClient.refetchQueries(['mainAnswersData'])
                        );
                        return;
                    }

                    let fiveClues = [];
                    for (const [index, clue] of category.clues.entries()) {
                        if (index >= 5) break;

                        fiveClues.push({
                            question: clue.question,
                            answer: clue.answer,
                            category: category.title.toUpperCase(),
                            value: `$${(index + 1) * 400}`,
                            isAnswered: false
                        });
                    }

                    categories.push({
                        name: category.title.toUpperCase(),
                        clues: fiveClues
                    });
                });

                setBoardData(categories);
            }
        }
        console.log(boardData);
    }, [boardData, data, isSuccess, setBoardData, queryClient]);

    useEffect(() => {
        if (mainAnswerCount === 30) {
            setBoardData([]);
            setMainAnswerCount(0);
            queryClient.refetchQueries(['mainAnswersData']);
        }
    }, [mainAnswerCount, setMainAnswerCount, setBoardData, queryClient]);

    const handleClick = (clue) => {
        setMainAnswer(clue.answer);
        setCurrentClue(clue);
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
                        onClick={() => {
                            handleClick(clue);
                        }}
                    />
                )
            );
        });
    });

    return (
        <>
            <ArticleStyled>
                <Heading1Styled>
                    {!isAnswering
                        ? 'Answers'
                        : `Answers - Category: ${currentClue.category.toString()}`}
                </Heading1Styled>
                {isAnswering ? (
                    <SectionStyled>
                        <OpenClueCard clue={currentClue.question.toString()} />
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
    grid-template-columns: repeat(6, minmax(0, 1fr));

    grid-template-rows: repeat(6, minmax(0, 1fr));
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
