import { PropTypes } from 'prop-types';
import { useState } from 'react';
import { FinalAnswerContext } from './FinalAnswerContext';

export const FinalAnswerContextProvider = ({ children }) => {
  const [finalCorrectAnswer, setFinalCorrectAnswer] = useState(null);
  const [finalCheckedAnswer, setFinalCheckedAnswer] = useState(false);
  const [finalUserAnswer, setFinalUserAnswer] = useState('');
  const [finalAnswer, setFinalAnswer] = useState('');

  return (
    <FinalAnswerContext.Provider
      value={{
        finalCorrectAnswer,
        setFinalCorrectAnswer,
        finalCheckedAnswer,
        setFinalCheckedAnswer,
        finalUserAnswer,
        setFinalUserAnswer,
        finalAnswer,
        setFinalAnswer,
      }}
    >
      {children}
    </FinalAnswerContext.Provider>
  );
};

FinalAnswerContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
