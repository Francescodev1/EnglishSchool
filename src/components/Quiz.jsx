import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { loadQuestions, nextQuestion, setAnswer, resetQuiz, setCurrentQuestionIndex } from '../features/quiz/quizSlice';
import Question from './Question';
import ProgressBar from './ProgressBar';
import Summary from './Summary';
import Spinner from './Spinner'; // Assumi di avere questo componente
import '../App.css';

const Quiz = () => {
  const dispatch = useDispatch();
  const { questions, currentQuestionIndex, answers, status } = useSelector(state => state.quiz);
  const [showSummary, setShowSummary] = useState(false);

  useEffect(() => {
    dispatch(loadQuestions());
  }, [dispatch]);

  useEffect(() => {
    const savedState = localStorage.getItem('quizState');
    if (savedState) {
      const { savedIndex, savedAnswers, savedSummary } = JSON.parse(savedState);
      if (questions.length > 0) {
        if (savedAnswers) {
          Object.keys(savedAnswers).forEach(questionId => {
            dispatch(setAnswer({ questionId: parseInt(questionId), ...savedAnswers[questionId] }));
          });
        }
        dispatch(setCurrentQuestionIndex(savedIndex || 0));
        setShowSummary(savedSummary);
      }
    }
  }, [dispatch, questions.length]);

  useEffect(() => {
    const stateToSave = {
      savedIndex: currentQuestionIndex,
      savedAnswers: answers,
      savedSummary: showSummary
    };
    localStorage.setItem('quizState', JSON.stringify(stateToSave));
  }, [currentQuestionIndex, answers, showSummary]);

  const handleAnswer = (answer, isCorrect) => {
    dispatch(setAnswer({
      questionId: currentQuestionIndex, 
      answer,
      isCorrect
    }));
    if (currentQuestionIndex === questions.length - 1) {
      setShowSummary(true);
    } else {
      dispatch(nextQuestion());
    }
  };

  const handleReset = () => {
    dispatch(resetQuiz());
    setShowSummary(false);
    localStorage.removeItem('quizState');
  };

  if (status === 'loading' || !questions.length) {
    return <Spinner />; // Usiamo lo Spinner qui
  }

  if (status === 'failed') {
    return <p>Error loading questions.</p>;
  }

  return (
    <div className="quiz-container mt-5">
      <div className="quiz-card">
        <div className="quiz-card-body">
          {!showSummary ? (
            <>
              <Question key={currentQuestionIndex} question={questions[currentQuestionIndex]} onAnswer={handleAnswer} />
              <ProgressBar current={currentQuestionIndex + 1} total={questions.length} />
              {currentQuestionIndex === questions.length - 1 && (
                <button onClick={handleReset} className="btn btn-secondary">Reset Quiz</button>
              )}
            </>
          ) : (
            <>
              <Summary answers={answers} questions={questions} />
              <button onClick={handleReset} className="btn btn-primary">Restart Quiz</button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Quiz;
