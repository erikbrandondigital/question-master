import { useContext } from 'react';
import styled from 'styled-components';
import { MainAnswersContext } from '../../contexts/MainAnswersContext';
import { UserContext } from '../../contexts/UserContext';
import { useMutationUpdateUserDB } from '../../apis/MongoDB';

function MainAnswerForm() {
    const { userData, setUserData } = useContext(UserContext);

    const { mutate } = useMutationUpdateUserDB(userData._id);

    const {
        mainAnswer,
        mainCorrectAnswer,
        setMainCorrectAnswer,
        mainCheckedAnswer,
        setMainCheckedAnswer,
        mainUserAnswer,
        setMainUserAnswer,
        setIsAnswering,
        mainAnswerCount,
        setMainAnswerCount
    } = useContext(MainAnswersContext);

    const handleInput = (e) => {
        setMainUserAnswer(e.target.value);
    };

    const checkAnswer = (e) => {
        e.preventDefault();

        let answerFormatted = mainAnswer;
        // Remove HTML tags from answer using regex.
        answerFormatted = answerFormatted.replace(/<\/?[^>]+>/gi, '');
        // Remove single or double quotes from answer using regex.
        answerFormatted = answerFormatted.replace(/['"()\\]+/g, '');

        console.log(
            mainUserAnswer.toLowerCase(),
            answerFormatted.toLowerCase()
        );

        let updatedUserData = userData;

        if (mainUserAnswer.toLowerCase() === answerFormatted.toLowerCase()) {
            updatedUserData.stats.answers.correctAnswers += 1;
            setMainCorrectAnswer(true);
        } else {
            updatedUserData.stats.answers.incorrectAnswers += 1;
            setMainCorrectAnswer(false);
            setMainUserAnswer(
                `Your answer was ${mainUserAnswer} when the correct answer is ${answerFormatted}.`
            );
        }

        updatedUserData.stats.answers.attemptedAnswers += 1;

        mutate(updatedUserData);
        setUserData(updatedUserData);

        setMainCheckedAnswer(true);
    };

    const continueGame = (e) => {
        e.preventDefault();
        setMainCorrectAnswer(null);
        setMainCheckedAnswer(false);
        setMainUserAnswer('');
        setMainAnswerCount(mainAnswerCount + 1);
        setIsAnswering(false);
    };

    return (
        <>
            <FormStyled
                onSubmit={
                    mainCheckedAnswer
                        ? (e) => {
                              continueGame(e);
                          }
                        : (e) => {
                              checkAnswer(e);
                          }
                }
            >
                <LabelStyled
                    className={
                        (mainCorrectAnswer === true ? 'correct' : null) ||
                        (mainCorrectAnswer === false ? 'incorrect' : null)
                    }
                    htmlFor='mainAnswer'
                >
                    {mainCorrectAnswer === null
                        ? 'What is...'
                        : mainCorrectAnswer
                        ? 'Correct'
                        : 'Incorrect'}
                </LabelStyled>
                <InputStyled
                    className={
                        (mainCorrectAnswer === true ? 'correct' : null) ||
                        (mainCorrectAnswer === false ? 'incorrect' : null)
                    }
                    type='text'
                    id='mainAnswer'
                    name='mainAnswer'
                    placeholder='Answer'
                    required
                    value={mainUserAnswer}
                    onChange={(e) => {
                        handleInput(e);
                    }}
                    disabled={mainCheckedAnswer ? true : false}
                ></InputStyled>
                <SubmitButtonStyled type='submit'>
                    {mainCheckedAnswer ? 'Continue' : 'Check Answer'}
                </SubmitButtonStyled>
            </FormStyled>
        </>
    );
}

export default MainAnswerForm;

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
