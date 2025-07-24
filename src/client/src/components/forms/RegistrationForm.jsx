import { useQueryClient } from '@tanstack/react-query';
import { useState } from 'react';
import styled from 'styled-components';
import { useMutationCreateUserDB } from '../../apis/MongoDB';

function RegistrationForm() {
  const queryClient = useQueryClient();
  const { mutate } = useMutationCreateUserDB(queryClient);

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [street, setStreet] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [zipCode, setZipCode] = useState('');

  const handleSaveButtonClick = (e) => {
    e.preventDefault();

    let newUserData = {
      user: {
        firstName,
        lastName,
        email,
        phone,
        street,
        city,
        state,
        zipCode,
        stats: {
          answers: {
            correctAnswers: 0,
            incorrectAnswers: 0,
            attemptedAnswers: 0,
          },
          finalAnswer: {
            correctAnswers: 0,
            incorrectAnswers: 0,
            attemptedAnswers: 0,
          },
        },
      },
    };

    mutate(newUserData);
  };

  return (
    <>
      <FormStyled>
        <InputDivStyled>
          <LabelStyled htmlFor="firstName">
            First Name
            <InputStyled
              onChange={(e) => setFirstName(e.target.value)}
              type="text"
              id="firstName"
              name="firstName"
              placeholder="First Name"
              value={firstName}
              required
            />
          </LabelStyled>
          <LabelStyled htmlFor="lastName">
            Last Name
            <InputStyled
              onChange={(e) => setLastName(e.target.value)}
              type="text"
              id="lastName"
              name="lastName"
              placeholder="Last Name"
              value={lastName}
              required
            />
          </LabelStyled>
          <LabelStyled htmlFor="email">
            Email Address
            <InputStyled
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              id="email"
              name="email"
              placeholder="Email Address"
              value={email}
              required
            />
          </LabelStyled>
          <LabelStyled htmlFor="phone">
            Phone Number
            <InputStyled
              onChange={(e) => setPhone(e.target.value)}
              type="tel"
              id="phone"
              name="phone"
              placeholder="Phone Number (Example: 555-555-5555)"
              value={phone}
              required
            />
          </LabelStyled>
          <LabelStyled htmlFor="street">
            Street Address
            <InputStyled
              onChange={(e) => setStreet(e.target.value)}
              type="text"
              id="street"
              name="street"
              placeholder="Street Address"
              value={street}
              required
            />
          </LabelStyled>
          <LabelStyled htmlFor="city">
            City
            <InputStyled
              onChange={(e) => setCity(e.target.value)}
              type="text"
              id="city"
              name="city"
              placeholder="City"
              value={city}
              required
            />
          </LabelStyled>
          <LabelStyled htmlFor="state">
            State
            <InputStyled
              onChange={(e) => setState(e.target.value)}
              type="text"
              id="state"
              name="state"
              placeholder="State"
              value={state}
              required
            />
          </LabelStyled>
          <LabelStyled htmlFor="zipCode">
            Zip Code
            <InputStyled
              onChange={(e) => setZipCode(e.target.value)}
              type="number"
              id="zipCode"
              name="zipCode"
              placeholder="Zip Code"
              min={0o0}
              max={99999}
              value={zipCode}
              required
            />
          </LabelStyled>
        </InputDivStyled>
        <SubmitButtonStyled
          type="submit"
          onClick={(e) => {
            handleSaveButtonClick(e);
          }}
        >
          Get Started
        </SubmitButtonStyled>
      </FormStyled>
    </>
  );
}

export default RegistrationForm;

const FormStyled = styled.form`
  width: 100%;
`;

const InputDivStyled = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
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
  font-family: 'Roboto-Italic';
  font-size: 0.875rem;
  color: #4c5a6b;
  &:focus {
    border: 1px solid #0172cb;
    box-shadow:
      2px 2px 0px 0px #e8f4fd,
      2px -2px 0px 0px #e8f4fd,
      -2px 2px 0px 0px #e8f4fd,
      -2px -2px 0px 0px #e8f4fd;
  }
`;
const SubmitButtonStyled = styled.button`
  display: block;
  width: 100%;
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
