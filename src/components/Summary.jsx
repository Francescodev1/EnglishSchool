// /src/components/Summary.jsx
import React from 'react';
import '../App.css';

const Summary = ({ answers, questions }) => {
  // Se 'answers' è un oggetto, convertilo in un array di risposte
  const answersArray = Object.values(answers);

  // Calcola il numero di risposte corrette
  const correctCount = answersArray.reduce((acc, answer) => acc + (answer.isCorrect ? 1 : 0), 0);
  const totalQuestions = questions.length;
  const percentage = totalQuestions > 0 ? Math.round((correctCount / totalQuestions) * 100) : 0;

  // Funzione per determinare il livello basato sulla percentuale
  const getLevel = (percentage) => {
    if (percentage >= 81) return 'sei livello C1';
    if (percentage >= 61) return 'sei livello B2';
    if (percentage >= 40) return 'sei livello B1';
    if (percentage >= 21) return 'sei livello A2';
    return 'sei livello A1';
  };

  return (
    <div className="summary-container">
      <h1 className="summary-header">Riepilogo Quiz</h1>
      {questions.map((question, index) => {
        const response = answers[index];
        return (
          <div key={index} className="summary-question-item">
            <p className="summary-question-text">Domanda: {question.acf.domanda}</p>
            <p className="summary-answer-text">Risposta data: {response ? response.answer : 'Nessuna risposta'}</p>
            <p className="summary-answer-correct">Corretta: {response && response.isCorrect ? 'Sì' : 'No'}</p>
            <p>Spiegazione: {question.acf.spiegazione}</p>
          </div>
        );
      })}
      <div className="summary-results">
        <h2>Risultati Finali</h2>
        <p>Risposte corrette: {correctCount} su {totalQuestions}</p>
        <p>Percentuale di successo: {percentage}%</p>
        <h5>Complimenti</h5>
        <h3>{getLevel(percentage)}</h3>
      </div>
    </div>
  );
};

export default Summary;
