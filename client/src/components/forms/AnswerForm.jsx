import styled from 'styled-components';

function AnswerForm() {
    return (
        <>
            <FormStyled>
                <LabelStyled htmlFor='answer'>What is...</LabelStyled>
                <InputStyled
                    type='text'
                    id='answer'
                    name='answer'
                    placeholder='Answer'
                ></InputStyled>
                <SubmitButtonStyled type='submit'>
                    Check Answer
                </SubmitButtonStyled>
            </FormStyled>
        </>
    );
}

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
    font-family: 'Roboto-ThinItalic';
    font-size: 0.875rem;
    color: #697d95;
    &:focus {
        border: 1px solid #0172cb;
        box-shadow: 2px 2px 0px 0px #e8f4fd, 2px -2px 0px 0px #e8f4fd,
            -2px 2px 0px 0px #e8f4fd, -2px -2px 0px 0px #e8f4fd;
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
