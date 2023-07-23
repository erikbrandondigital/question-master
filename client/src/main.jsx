import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { UserContextProvider } from './contexts/UserContext.jsx';
import { MainAnswersContextProvider } from './contexts/MainAnswersContext.jsx';
import { FinalAnswerContextProvider } from './contexts/FinalAnswerContext.jsx';

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            retry: 1
        }
    }
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
    </React.StrictMode>
);
