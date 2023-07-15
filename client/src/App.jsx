import { Routes, Route } from 'react-router-dom';
import Header from './components/header/Header';

import Account from './pages/Account';
import Dashboard from './pages/Dashboard';
import FinalAnswer from './pages/FinalAnswer';
import Answers from './pages/Answers';
import { styled } from 'styled-components';
import { createContext, useState } from 'react';

export const FinalAnswerContext = createContext();

function App() {
    const [correctAnswer, setCorrectAnswer] = useState(null);
    const [checkedAnswer, setCheckedAnswer] = useState(false);
    const [userAnswer, setUserAnswer] = useState('');
    const [answer, setAnswer] = useState('');

    return (
        <>
            <FinalAnswerContext.Provider
                value={{
                    correctAnswer,
                    setCorrectAnswer,
                    checkedAnswer,
                    setCheckedAnswer,
                    userAnswer,
                    setUserAnswer,
                    answer,
                    setAnswer
                }}
            >
                <Header
                    brandName='Question Master'
                    brandSlogan='Do you have what it takes?'
                />
                <MainStyled>
                    <Routes>
                        <Route path='/' element={<Dashboard />} />
                        <Route path='answers' element={<Answers />} />
                        <Route
                            path='final-answers'
                            element={<FinalAnswer />}
                        />
                        <Route path='account' element={<Account />} />
                    </Routes>
                </MainStyled>
            </FinalAnswerContext.Provider>
        </>
    );
}

export default App;

const MainStyled = styled.main`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 2.5rem 1.25rem;
`;
