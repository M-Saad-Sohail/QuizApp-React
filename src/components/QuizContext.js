import React, { createContext, useContext, useState } from 'react';

export const QuizContext = createContext();

export const useQuizContext = () => {
  return useContext(QuizContext);
};

export const QuizProvider = (props) => {
  const [queArr, setQueArr] = useState([]);

  const addQuestion = (question) => {
    setQueArr([...queArr, question]);
  };

  const contextValue = {
    queArr,
    addQuestion,
  };

  return (
    <QuizContext.Provider value={contextValue}>
      {props.children}
    </QuizContext.Provider>
  );
};
