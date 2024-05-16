// /src/components/Question.jsx
import React, { useCallback } from 'react';
import Timer from './Timer'; // Assicurati che il percorso sia corretto
import '../App.css';

const Question = ({ question, onAnswer }) => {
    const answers = Object.keys(question.acf).filter(key => key.startsWith("risposta")).map(key => {
        const index = key.split('_')[1];
        return {
            text: question.acf[key],
            isCorrect: question.acf[`corretta_${index}`] === "si"
        };
    });

    const handleTimeUp = useCallback(() => {
        console.log('Tempo esaurito!');
        onAnswer(null, false);
    }, [onAnswer]);

    
    return (
        <div className="quiz-container">
            <h2 className="question">{question.acf.domanda}</h2>
            <Timer initialTime={10} onTimeUp={handleTimeUp} />
            {answers.map((answer, index) => (
                <button 
                    key={index} 
                    className="answer-btn"
                    onClick={() => onAnswer(answer.text, answer.isCorrect)}
                >
                    {answer.text}
                </button>
            ))}
        </div>
    );
};

export default Question;
