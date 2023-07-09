import { Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/header/Header';

import Account from './pages/Account';
import Dashboard from './pages/Dashboard';
import FinalAnswer from './pages/FinalAnswer';
import Answers from './pages/Answers';
import { styled } from 'styled-components';

function App() {
    return (
        <>
            <Header
                brandName='Question Master'
                brandSlogan='Do you have what it takes?'
            />
            <MainStyled>
                <Routes>
                    <Route path='/' element={<Dashboard />} />
                    <Route path='answers' element={<Answers />} />
                    <Route path='final-answers' element={<FinalAnswer />} />
                    <Route path='account' element={<Account />} />
                </Routes>
            </MainStyled>
        </>
    );
}

export default App;

const MainStyled = styled.main`
    padding: 2.5rem 1.25rem;
`;
