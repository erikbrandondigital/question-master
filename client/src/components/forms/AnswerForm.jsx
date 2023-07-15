import { useContext } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { FinalAnswerContext } from '../../App';

function AnswerForm(props) {
    const {
        answer,
        correctAnswer,
        setCorrectAnswer,
        checkedAnswer,
        setCheckedAnswer,
        userAnswer,
        setUserAnswer
    } = useContext(FinalAnswerContext);

    const handleInput = (e) => {
        setUserAnswer(e.target.value);
    };

    const checkAnswer = (e) => {
        e.preventDefault();

        let answerFormatted = answer;
        // Remove HTML tags from answer using regex.
        answerFormatted = answerFormatted.replace(/<\/?[^>]+>/gi, '');
        // Remove single or double quotes from answer using regex.
        answerFormatted = answerFormatted.replace(/['"()]+/g, '');

        console.log(userAnswer.toLowerCase(), answerFormatted.toLowerCase());

        if (userAnswer.toLowerCase() === answerFormatted.toLowerCase()) {
            setCorrectAnswer(true);
        } else {
            setCorrectAnswer(false);
            setUserAnswer(
                `Your answer was ${userAnswer} when the correct answer is ${answerFormatted}.`
            );
        }

        setCheckedAnswer(true);
    };

    const nextQuestion = (e) => {
        e.preventDefault();
        setCorrectAnswer(null);
        setCheckedAnswer(false);
        setUserAnswer('');
        props.refetch();
    };

    return (
        <>
            <FormStyled
                onSubmit={
                    checkedAnswer
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
                        (correctAnswer === true ? 'correct' : null) ||
                        (correctAnswer === false ? 'incorrect' : null)
                    }
                    htmlFor='answer'
                >
                    {correctAnswer === null
                        ? 'What is...'
                        : correctAnswer
                        ? 'Correct'
                        : 'Incorrect'}
                </LabelStyled>
                <InputStyled
                    className={
                        (correctAnswer === true ? 'correct' : null) ||
                        (correctAnswer === false ? 'incorrect' : null)
                    }
                    type='text'
                    id='answer'
                    name='answer'
                    placeholder='Answer'
                    required
                    value={userAnswer}
                    onChange={(e) => {
                        handleInput(e);
                    }}
                    disabled={checkedAnswer ? true : false}
                ></InputStyled>
                <SubmitButtonStyled type='submit'>
                    {checkedAnswer ? 'Next Question' : 'Check Answer'}
                </SubmitButtonStyled>
            </FormStyled>
        </>
    );
}

AnswerForm.propTypes = {
    refetch: PropTypes.func.isRequired
};

export default AnswerForm;

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
    color: #697d95;
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
