// /src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './app/store';
import Navbar from './components/Navbar';
import Footer from './components/Footer'; // Importa il componente Footer
import Homepage from './pages/Homepage';
import QuizPage from './pages/QuizPage';
import ContactPage from './pages/ContactPage';
import ProfessorsPage from './pages/ProfessorsPage';
import CoursePage from './pages/CoursePage';
import ArticlesPage from './pages/ArticlesPage';

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <div className="d-flex flex-column min-vh-100">
          <Navbar />
          
            <Routes>
              <Route path="/" element={<Homepage />} />
              <Route path="/quiz" element={<QuizPage />} />
              <Route path="/professors" element={<ProfessorsPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/coursepage" element={<CoursePage />} />
              <Route path="/articles" element={<ArticlesPage />} />
            </Routes>
          
          <Footer />
        </div>
      </Router>
    </Provider>
  );
};

export default App;
