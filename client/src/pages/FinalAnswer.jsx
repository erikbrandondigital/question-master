import axios from 'axios';
import styled from 'styled-components';
import FinalAnswerForm from '../components/forms/FinalAnswerForm';
import OpenClueCard from '../components/cards/OpenClueCard';
import { useQuery } from '@tanstack/react-query';
import { useContext, useEffect } from 'react';
import { FinalAnswerContext } from '../App';

function FinalAnswer() {
    const { setFinalAnswer } = useContext(FinalAnswerContext);

    const { isLoading, isError, isSuccess, data, error, refetch } = useQuery({
        queryKey: ['finalAnswerData'],
        queryFn: () =>
            axios.get('http://jservice.io/api/final').then((res) => res.data)
    });

    useEffect(() => {
        if (isSuccess) {
            console.log(data[0]);
            setFinalAnswer(data[0].answer);
        }
    }, [data, isSuccess, setFinalAnswer]);

    return (
        <>
            <ArticleStyled>
                <Heading1Styled>
                    {!isSuccess
                        ? 'Final Answer'
                        : `Final Answer - Category: ${data[0].category.title.toUpperCase()}`}
                </Heading1Styled>
                <SectionStyled>
                    {isLoading ? <OpenClueCard clue='Loading...' /> : null}
                    {isError ? <OpenClueCard clue={error.message} /> : null}
                    {isSuccess ? (
                        <>
                            <OpenClueCard clue={data[0].question} />
                            <FinalAnswerForm refetch={refetch} />
                        </>
                    ) : null}
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
