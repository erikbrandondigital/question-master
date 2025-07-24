import { useContext, useEffect } from 'react';
import styled from 'styled-components';
import { useQueryFinalAnswer } from '../apis/JService';
import OpenClueCard from '../components/cards/OpenClueCard';
import FinalAnswerForm from '../components/forms/FinalAnswerForm';
import { FinalAnswerContext } from '../contexts/FinalAnswerContext';

function FinalAnswer() {
  const { setFinalAnswer } = useContext(FinalAnswerContext);

  const { isLoading, isError, isSuccess, data, error } = useQueryFinalAnswer();

  useEffect(() => {
    if (isSuccess) {
      console.log(data[0]);
      setFinalAnswer(data[0].answer);
    }
  }, [data, isSuccess, setFinalAnswer]);

  return (
    <>
      <ArticleStyled>
        <Heading2Styled>
          {!isSuccess
            ? 'Final Answer'
            : `Final Answer - Category: ${data[0].category.title.toUpperCase()}`}
        </Heading2Styled>
        <SectionStyled>
          {isLoading ? <OpenClueCard clue="Loading..." /> : null}
          {isError ? <OpenClueCard clue={error.message} /> : null}
          {isSuccess ? (
            <>
              <OpenClueCard clue={data[0].question} />
              <FinalAnswerForm />
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

const Heading2Styled = styled.h2`
  margin: 0 0 1.5rem 0;
  font-family: 'Roboto-Bold';
  font-size: 1rem;
  color: #252a31;
`;
