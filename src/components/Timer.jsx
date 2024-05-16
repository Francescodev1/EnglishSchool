import React, { useEffect, useState } from 'react';
import '../App.css';



const Timer = ({ initialTime, onTimeUp }) => {
    const [timeLeft, setTimeLeft] = useState(initialTime);

    useEffect(() => {
        if (timeLeft === 0) {
            onTimeUp();
            return;
        }

        const timerId = setTimeout(() => {
            setTimeLeft(timeLeft - 1);
        }, 1000);

        return () => clearTimeout(timerId);
    }, [timeLeft, onTimeUp]);

    const radius = 50;
    const circumference = 2 * Math.PI * radius;
    const strokePct = ((timeLeft / initialTime) * circumference).toFixed(0);

    return (
        <div className="timer">
            <svg width="120" height="120" className="countdown-svg">
                <circle
                    r={radius}
                    cx="60"
                    cy="60"
                    fill="transparent"
                    stroke="#eee"
                    strokeWidth="10"
                />
                <circle
                    r={radius}
                    cx="60"
                    cy="60"
                    fill="transparent"
                    stroke="#007bff"
                    strokeWidth="10"
                    strokeDasharray={circumference}
                    strokeDashoffset={circumference - strokePct}
                    transform="rotate(-90 60 60)"
                />
                <text x="60" y="65" textAnchor="middle" fontSize="20">{timeLeft}</text>
            </svg>
            <div className="seconds">secondi</div>
        </div>
    );
};

export default Timer;

