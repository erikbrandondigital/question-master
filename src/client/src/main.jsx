import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import { FinalAnswerContextProvider } from './contexts/FinalAnswerContextProvider.jsx';
import { MainAnswersContextProvider } from './contexts/MainAnswersContextProvider.jsx';
import { UserContextProvider } from './contexts/UserContextProvider.jsx';
import './index.css';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1,
    },
  },
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <UserContextProvider>
          <MainAnswersContextProvider>
            <FinalAnswerContextProvider>
              <App />
            </FinalAnswerContextProvider>
          </MainAnswersContextProvider>
        </UserContextProvider>
      </BrowserRouter>
    </QueryClientProvider>
  </React.StrictMode>,
);
