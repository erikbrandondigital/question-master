import { useContext } from 'react';
import { Route, Routes } from 'react-router-dom';
import { styled } from 'styled-components';

import { UserContext } from './contexts/UserContext';

import Account from './pages/Account';
import Answers from './pages/Answers';
import Dashboard from './pages/Dashboard';
import FinalAnswer from './pages/FinalAnswer';
import Onboarding from './pages/Onboarding';

import Header from './components/header/Header';

function App() {
  const { userData } = useContext(UserContext);

  return (
    <>
      {Object.keys(userData).length > 0 ? (
        <>
          <Header brandName="Question Master" brandSlogan="Do you have what it takes?" />
          <MainStyled>
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="answers" element={<Answers />} />
              <Route path="final-answers" element={<FinalAnswer />} />
              <Route path="account" element={<Account />} />
            </Routes>
          </MainStyled>
        </>
      ) : (
        <>
          <MainStyled>
            <Onboarding />
          </MainStyled>
        </>
      )}
    </>
  );
}

export default App;

const MainStyled = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 2.5rem 1.25rem;
  background: url('https://images.pexels.com/photos/1103970/pexels-photo-1103970.jpeg');
  background-position: center center;
  background-size: cover;
`;
