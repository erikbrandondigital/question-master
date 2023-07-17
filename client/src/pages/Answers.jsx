import { useContext, useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import styled from 'styled-components';
import axios from 'axios';
import { MainAnswersContext } from '../App';
import CategoryClueCard from '../components/cards/CategoryClueCard';
import ClueCard from '../components/cards/ClueCard';
import OpenClueCard from '../components/cards/OpenClueCard';
import MainAnswerForm from '../components/forms/MainAnswerForm';
import BlankClueCard from './../components/cards/BlankClueCard';
import Utils from './../utils/Utils';

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

    const { isLoading, isError, isSuccess, data, error, refetch } = useQuery({
        queryKey: ['mainAnswersData'],
        queryFn: () => {
            const endpoints = [
                `https://jservice.io/api/category?id=${Utils.generateRandomNumber(
                    1,
                    4694
                )}`,
                `https://jservice.io/api/category?id=${Utils.generateRandomNumber(
                    4695,
                    9389
                )}`,
                `https://jservice.io/api/category?id=${Utils.generateRandomNumber(
                    9390,
                    14083
                )}`,
                `https://jservice.io/api/category?id=${Utils.generateRandomNumber(
                    14084,
                    18778
                )}`,
                `https://jservice.io/api/category?id=${Utils.generateRandomNumber(
                    18779,
                    23473
                )}`,
                `https://jservice.io/api/category?id=${Utils.generateRandomNumber(
                    23474,
                    28163
                )}`
            ];

            const requests = endpoints.map((url) => axios.get(url));

            return axios
                .all(requests)
                .then((response) => response.map((category) => category.data));
        },
        refetchOnWindowFocus: false,
        refetchOnMount: false,
        refetchOnReconnect: false
    });

    useEffect(() => {
        if (isSuccess) {
            if (boardData.length === 0) {
                let categories = [];
                data.forEach((category) => {
                    if (category.clues.length < 5) {
                        Utils.waitForSeconds(1).then(() => refetch());
                        return;
                    }

                    let fiveClues = [];
                    for (const [index, clue] of category.clues.entries()) {
                        if (index >= 5) break;

                        fiveClues.push({
                            question: clue.question,
                            answer: clue.answer,
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
    }, [boardData, data, isSuccess, setBoardData, refetch]);

    useEffect(() => {
        if (mainAnswerCount === 30) {
            setBoardData([]);
            setMainAnswerCount(0);
            refetch();
        }
    }, [mainAnswerCount, setMainAnswerCount, setBoardData, refetch]);

    const handleClick = (clue) => {
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
