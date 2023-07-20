import { createContext, useState } from 'react';
import { PropTypes } from 'prop-types';

export const MainAnswersContext = createContext();

export const MainAnswersContextProvider = ({ children }) => {
    const [mainCorrectAnswer, setMainCorrectAnswer] = useState(null);
    const [mainCheckedAnswer, setMainCheckedAnswer] = useState(false);
    const [mainUserAnswer, setMainUserAnswer] = useState('');
    const [mainAnswer, setMainAnswer] = useState('');
    const [isAnswering, setIsAnswering] = useState(false);
    const [mainAnswerCount, setMainAnswerCount] = useState(0);
    const [currentClue, setCurrentClue] = useState(0);
    const [boardData, setBoardData] = useState([]);

    return (
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
            {children}
        </MainAnswersContext.Provider>
    );
};

MainAnswersContextProvider.propTypes = {
    children: PropTypes.node.isRequired
};
