// /src/pages/Home.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const Home = () => {
    return (
      <div className="home-container">
        <h1 className="home-title">Welcome to the Quiz</h1>
        <Link to="/quiz" className="home-start-link">Start Quiz</Link>
      </div>
    );
  };

export default Home;
