import styled from 'styled-components';

function SettingsForm() {
    return (
        <>
            <FormStyled>
                <InputDivStyled>
                    <LabelStyled htmlFor='firstName'>
                        First Name
                        <InputStyled
                            type='text'
                            id='firstName'
                            name='firstName'
                            placeholder='First Name'
                            required
                        />
                    </LabelStyled>
                    <LabelStyled htmlFor='lastName'>
                        Last Name
                        <InputStyled
                            type='text'
                            id='lastName'
                            name='lastName'
                            placeholder='Last Name'
                            required
                        />
                    </LabelStyled>
                    <LabelStyled htmlFor='email'>
                        Email Address
                        <InputStyled
                            type='email'
                            id='email'
                            name='email'
                            placeholder='Email Address'
                            required
                        />
                    </LabelStyled>
                    <LabelStyled htmlFor='phone'>
                        Phone Number
                        <InputStyled
                            type='tel'
                            id='phone'
                            name='phone'
                            placeholder='Phone Number'
                            required
                        />
                    </LabelStyled>
                    <LabelStyled htmlFor='streetAddress'>
                        Street Address
                        <InputStyled
                            type='text'
                            id='streetAddress'
                            name='streetAddress'
                            placeholder='Street Address'
                            required
                        />
                    </LabelStyled>
                    <LabelStyled htmlFor='city'>
                        City
                        <InputStyled
                            type='text'
                            id='city'
                            name='city'
                            placeholder='City'
                            required
                        />
                    </LabelStyled>
                    <LabelStyled htmlFor='state'>
                        State
                        <InputStyled
                            type='text'
                            id='state'
                            name='state'
                            placeholder='State'
                            required
                        />
                    </LabelStyled>
                    <LabelStyled htmlFor='zipCode'>
                        Zip Code
                        <InputStyled
                            type='number'
                            id='zipCode'
                            name='zipCode'
                            placeholder='Zip Code'
                            min={0o0}
                            max={99999}
                            required
                        />
                    </LabelStyled>
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

const LabelStyled = styled.label`
    display: flex;
    flex-direction: column;
    font-family: 'Roboto-Medium';
    font-size: 0.875rem;
    color: #252a31;
`;

const InputStyled = styled.input`
    padding: 0.75rem;
    outline: none;
    border: 1px solid #bac7d5;
    border-radius: 0.1875rem;
    font-family: 'Roboto-ThinItalic';
    font-size: 0.875rem;
    color: #697d95;
    &:focus {
        border: 1px solid #0172cb;
        box-shadow: 2px 2px 0px 0px #e8f4fd, 2px -2px 0px 0px #e8f4fd,
            -2px 2px 0px 0px #e8f4fd, -2px -2px 0px 0px #e8f4fd;
    }
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
