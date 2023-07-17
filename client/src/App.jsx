import { createContext, useState, useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { styled } from 'styled-components';
import { Routes, Route } from 'react-router-dom';

import Account from './pages/Account';
import Dashboard from './pages/Dashboard';
import FinalAnswer from './pages/FinalAnswer';
import Answers from './pages/Answers';

import Header from './components/header/Header';

export const FinalAnswerContext = createContext();
export const MainAnswersContext = createContext();
export const UserContext = createContext();

function App() {
    // Final Answer
    const [finalCorrectAnswer, setFinalCorrectAnswer] = useState(null);
    const [finalCheckedAnswer, setFinalCheckedAnswer] = useState(false);
    const [finalUserAnswer, setFinalUserAnswer] = useState('');
    const [finalAnswer, setFinalAnswer] = useState('');

    // Main Answers
    const [mainCorrectAnswer, setMainCorrectAnswer] = useState(null);
    const [mainCheckedAnswer, setMainCheckedAnswer] = useState(false);
    const [mainUserAnswer, setMainUserAnswer] = useState('');
    const [mainAnswer, setMainAnswer] = useState('');
    const [isAnswering, setIsAnswering] = useState(false);
    const [mainAnswerCount, setMainAnswerCount] = useState(0);
    const [currentClue, setCurrentClue] = useState(0);
    const [boardData, setBoardData] = useState([]);

    // User Data
    const [userData, setUserData] = useState({});

    const { isLoading, isError, isSuccess, data, error } = useQuery({
        queryKey: ['userData'],
        queryFn: () =>
            axios.get('http://localhost:3000/users/').then((res) => res.data)
    });

    useEffect(() => {
        if (isSuccess) {
            setUserData(data.data[0]);
        }
    }, [data, isSuccess, setUserData]);

    return (
        <>
            <UserContext.Provider
                value={{
                    userData,
                    setUserData,
                    isLoading,
                    isError,
                    isSuccess,
                    error
                }}
            >
                <MainAnswersContext.Provider
                    value={{
                        mainCorrectAnswer,
                        setMainCorrectAnswer,
                        mainCheckedAnswer,
                        setMainCheckedAnswer,
                        mainUserAnswer,
                        setMainUserAnswer,
                        mainAnswer,
                        setMainAnswer,
                        isAnswering,
                        setIsAnswering,
                        mainAnswerCount,
                        setMainAnswerCount,
                        currentClue,
                        setCurrentClue,
                        boardData,
                        setBoardData
                    }}
                >
                    <FinalAnswerContext.Provider
                        value={{
                            finalCorrectAnswer,
                            setFinalCorrectAnswer,
                            finalCheckedAnswer,
                            setFinalCheckedAnswer,
                            finalUserAnswer,
                            setFinalUserAnswer,
                            finalAnswer,
                            setFinalAnswer
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
                </MainAnswersContext.Provider>
            </UserContext.Provider>
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
