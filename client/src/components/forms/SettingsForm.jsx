import styled from 'styled-components';
import InputFieldWithLabel from '../inputs/InputFieldWithLabel';

function SettingsForm() {
    return (
        <>
            <FormStyled>
                <InputDivStyled>
                    <InputFieldWithLabel
                        label='First Name'
                        name='firstName'
                        type='text'
                    />
                    <InputFieldWithLabel
                        label='Last Name'
                        name='lastName'
                        type='text'
                    />
                    <InputFieldWithLabel
                        label='Email Address'
                        name='email'
                        type='email'
                    />
                    <InputFieldWithLabel
                        label='Phone Number'
                        name='phone'
                        type='tel'
                    />
                    <InputFieldWithLabel
                        label='Street Address'
                        name='streetAddress'
                        type='text'
                    />
                    <InputFieldWithLabel label='City' name='city' type='text' />
                    <InputFieldWithLabel
                        label='State'
                        name='state'
                        type='text'
                    />
                    <InputFieldWithLabel
                        label='Zip Code'
                        name='zipCode'
                        type='number'
                    />
                </InputDivStyled>
                <ButtonDivStyled>
                    <ResetButtonStyled type='button'>
                        Reset Stats
                    </ResetButtonStyled>
                    <SubmitButtonStyled type='submit'>Save</SubmitButtonStyled>
                </ButtonDivStyled>
            </FormStyled>
        </>
    );
}

export default SettingsForm;

const FormStyled = styled.form`
    width: 100%;
`;

const InputDivStyled = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 1.5rem;
    margin: 0 0 1.5rem 0;
`;

const ButtonDivStyled = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
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

const ResetButtonStyled = styled.button`
    padding: 0.75rem 1rem;
    border: none;
    outline: none;
    border-radius: 0.1875rem;
    font-family: 'Roboto-Medium';
    font-size: 0.875rem;
    text-decoration: none;
    color: #ffffff;
    background-color: #d21c1c;
    text-align: center;
    cursor: pointer;
    &:hover,
    &:focus,
    &:focus-visible {
        background-color: #b91919;
    }
`;
