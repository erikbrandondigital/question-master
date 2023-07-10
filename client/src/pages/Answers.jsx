import { useState } from 'react';
import styled from 'styled-components';
import AnswerForm from '../components/forms/AnswerForm';
import ClueCard from '../components/cards/ClueCard';
import CategoryClueCard from '../components/cards/CategoryClueCard';
import OpenClueCard from '../components/cards/OpenClueCard';

function Answers() {
    const [isAnswering, setIsAnswering] = useState(false);
    const [currentClue, setCurrentClue] = useState(0);
    const [boardValues] = useState([
        'Category 1',
        'Category 2',
        'Category 3',
        'Category 4',
        'Category 5',
        'Category 6',
        '$400',
        '$400',
        '$400',
        '$400',
        '$400',
        '$400',
        '$800',
        '$800',
        '$800',
        '$800',
        '$800',
        '$800',
        '$1200',
        '$1200',
        '$1200',
        '$1200',
        '$1200',
        '$1200',
        '$1600',
        '$1600',
        '$1600',
        '$1600',
        '$1600',
        '$1600',
        '$2000',
        '$2000',
        '$2000',
        '$2000',
        '$2000',
        '$2000'
    ]);

    const handleClick = (e) => {
        setCurrentClue(e);
        setIsAnswering(true);
    };

    let clueCards = boardValues.map((element, i) => {
        return element.includes('Category') ? (
            <CategoryClueCard key={i} category={element} />
        ) : (
            <ClueCard key={i} value={element} onClick={() => handleClick(i)} />
        );
    });

    return (
        <>
            <ArticleStyled>
                <Heading1Styled>
                    {isAnswering
                        ? `For ${boardValues[currentClue]}...`
                        : 'Answers'}
                </Heading1Styled>
                {isAnswering ? (
                    <SectionStyled>
                        <OpenClueCard clue={currentClue.toString()} />
                        <AnswerForm />
                    </SectionStyled>
                ) : (
                    <GridSectionStyled>{clueCards}</GridSectionStyled>
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
    grid-template-columns: repeat(6, 1fr);
    grid-template-rows: repeat(6, 1fr);
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
