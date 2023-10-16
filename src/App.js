// App.js
import React from 'react';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import { QuizProvider } from './components/QuizContext';
import QuizApp from './components/QuizApp';
import AddQuestion from './components/AddQuestion';

const App = () => {
  return (
    <Router>
      <QuizProvider>
        <Routes>
          <Route path="/" element={<QuizApp />} />
          <Route path="/add" element={<AddQuestion />} />
        </Routes>
      </QuizProvider>
    </Router>
  );
};

export default App;
