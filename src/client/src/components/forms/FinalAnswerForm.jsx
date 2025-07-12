import { useContext } from 'react';
import styled from 'styled-components';
import { UserContext } from '../../contexts/UserContext';
import { FinalAnswerContext } from '../../contexts/FinalAnswerContext';
import { useMutationUpdateUserDB } from '../../apis/MongoDB';
import { useQueryClient } from '@tanstack/react-query';

function FinalAnswerForm() {
    const queryClient = useQueryClient();

    const { userData, setUserData } = useContext(UserContext);
    const { mutate } = useMutationUpdateUserDB(userData._id);
    const {
        finalAnswer,
        finalCorrectAnswer,
        setFinalCorrectAnswer,
        finalCheckedAnswer,
        setFinalCheckedAnswer,
        finalUserAnswer,
        setFinalUserAnswer
    } = useContext(FinalAnswerContext);

    const handleInput = (e) => {
        setFinalUserAnswer(e.target.value);
    };

    const checkAnswer = (e) => {
        e.preventDefault();

        let answerFormatted = finalAnswer;
        // Remove HTML tags from answer using regex.
        answerFormatted = answerFormatted.replace(/<\/?[^>]+>/gi, '');
        // Remove single or double quotes from answer using regex.
        answerFormatted = answerFormatted.replace(/['"()\\]+/g, '');

        console.log(
            finalUserAnswer.toLowerCase(),
            answerFormatted.toLowerCase()
        );

        let updatedUserData = userData;

        if (finalUserAnswer.toLowerCase() === answerFormatted.toLowerCase()) {
            updatedUserData.stats.finalAnswer.correctAnswers += 1;
            setFinalCorrectAnswer(true);
        } else {
            updatedUserData.stats.finalAnswer.incorrectAnswers += 1;
            setFinalCorrectAnswer(false);
            setFinalUserAnswer(
                `Your answer was ${finalUserAnswer} when the correct answer is ${answerFormatted}.`
            );
        }

        updatedUserData.stats.finalAnswer.attemptedAnswers += 1;

        mutate(updatedUserData);
        setUserData(updatedUserData);

        setFinalCheckedAnswer(true);
    };

    const nextQuestion = (e) => {
        e.preventDefault();
        setFinalCorrectAnswer(null);
        setFinalCheckedAnswer(false);
        setFinalUserAnswer('');
        queryClient.refetchQueries({ queryKey: ['finalAnswerData'] });
    };

    return (
        <>
            <FormStyled
                onSubmit={
                    finalCheckedAnswer
                        ? (e) => {
                              nextQuestion(e);
                          }
                        : (e) => {
                              checkAnswer(e);
                          }
                }
            >
                <LabelStyled
                    className={
                        (finalCorrectAnswer === true ? 'correct' : null) ||
                        (finalCorrectAnswer === false ? 'incorrect' : null)
                    }
                    htmlFor='finalAnswer'
                >
                    {finalCorrectAnswer === null
                        ? 'What is...'
                        : finalCorrectAnswer
                        ? 'Correct'
                        : 'Incorrect'}
                </LabelStyled>
                <InputStyled
                    className={
                        (finalCorrectAnswer === true ? 'correct' : null) ||
                        (finalCorrectAnswer === false ? 'incorrect' : null)
                    }
                    type='text'
                    id='finalAnswer'
                    name='finalAnswer'
                    placeholder='Answer'
                    required
                    value={finalUserAnswer}
                    onChange={(e) => {
                        handleInput(e);
                    }}
                    disabled={finalCheckedAnswer ? true : false}
                ></InputStyled>
                <SubmitButtonStyled type='submit'>
                    {finalCheckedAnswer ? 'Next Question' : 'Check Answer'}
                </SubmitButtonStyled>
            </FormStyled>
        </>
    );
}

export default FinalAnswerForm;

const FormStyled = styled.form`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

const LabelStyled = styled.label`
    font-family: 'Roboto-Medium';
    font-size: 0.875rem;
    color: #252a31;
    border-width: 1px 0 1px 1px;
    border-style: solid;
    border-color: #bac7d5;
    border-radius: 0.1875rem 0 0 0.1875rem;
    padding: 0.625rem;
    user-select: none;
    -moz-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
    &.correct {
        background-color: #28a138;
        color: #ffffff;
    }
    &.incorrect {
        background-color: #d21c1c;
        color: #ffffff;
    }
`;

const InputStyled = styled.input`
    flex: 1;
    padding: 0.75rem;
    margin: 0 0.625rem 0 0;
    outline: none;
    border-width: 1px 1px 1px 0;
    border-style: solid;
    border-color: #bac7d5;
    border-radius: 0 0.1875rem 0.1875rem 0;
    font-family: 'Roboto-Italic';
    font-size: 0.875rem;
    color: #4c5a6b;
    &:focus {
        border: 1px solid #0172cb;
        box-shadow: 2px 2px 0px 0px #e8f4fd, 2px -2px 0px 0px #e8f4fd,
            -2px 2px 0px 0px #e8f4fd, -2px -2px 0px 0px #e8f4fd;
    }
    &.correct {
        background-color: #28a138;
        color: #ffffff;
        user-select: none !important;
        -moz-user-select: none !important;
        -webkit-user-select: none !important;
        -ms-user-select: none !important;
    }
    &.incorrect {
        background-color: #d21c1c;
        color: #ffffff;
        user-select: none !important;
        -moz-user-select: none !important;
        -webkit-user-select: none !important;
        -ms-user-select: none !important;
    }
`;

const SubmitButtonStyled = styled.button`
    padding: 0.75rem 1rem;
    border: none;
    outline: none;
    border-radius: 0.1875rem;
    font-family: 'Roboto-Medium';
    font-size: 0.875rem;
    text-decoration: none;
    color: #ffffff;
    background-color: #0172cb;
    text-align: center;
    cursor: pointer;
    &:hover,
    &:focus,
    &:focus-visible {
        background-color: #0161ac;
    }
`;
