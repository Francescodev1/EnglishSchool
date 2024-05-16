import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const HeroSection = () => (
  <div className="hero-section text-center text-white py-5">
    <div className='divprincipale p-4'>
<h1>Welcome to Our English School</h1>
    <p>Your journey to mastering English starts here.</p>
    
    <p className=' my-5 fs-5'>Dal 1980, la nostra scuola di inglese è un punto di riferimento nell'educazione linguistica, 
    offrendo corsi per tutti i livelli, da principiante a avanzato. Con un team di insegnanti madrelingua e qualificati, 
    ci impegniamo a fornire un'apprendimento efficace e coinvolgente. 
    Le nostre aule sono dotate di tecnologie all'avanguardia per un'esperienza educativa completa. 
    La nostra missione è quella di aiutarti a padroneggiare l'inglese in un ambiente stimolante e supportivo, preparandoti per il successo in un mondo globale. 
    Join us to achieve your English language goals!</p>
    
    </div>
    
  </div>
);

const CoursesPreview = () => (
  <div className="courses-preview bg-warning py-5">
    <div className="container">
      <h2>I nostri Corsi</h2>
      <p>Check out our beginner to advanced English courses.</p>
      <Link to="/coursepage" className="btn btn-success">Explore Courses</Link>
    </div>
  </div>
);

const ProfessorsPreview = () => (
  <div className="professors-preview py-5">
    <div className="container">
      <h2>I nostri Insegnanti</h2>
      <p>Our dedicated staff are experts in linguistic education.</p>
      <Link to="/professors" className="btn btn-info">Meet Teachers</Link>
    </div>
  </div>
);

const Articles = () => (
  <div className="articles bg-secondary text-white py-5">
    <div className="container">
      <h2>I nostri articoli</h2>
      <blockquote>"This school has changed my life!" - A Happy Student</blockquote>
      <Link to="/articles" className="btn btn-warning">Read Articles</Link>
    </div>
  </div>
);

const Quiz = () => (
  <div className="quiz bg-dark text-white py-5">
    <div className="container">
      <h2>Prova il quiz per testare il tuo livello di inglese</h2>
      <p>Join us for our next open day event!</p>
      <Link to="/quiz" className="btn btn-danger">Start Quiz</Link>
    </div>
  </div>
);

const ContactCTA = () => (
  <div className="contact-cta bg-info py-5 text-white">
    <div className="container">
      <h2>Get in Touch</h2>
      <p>Contact us or subscribe to our newsletter for updates.</p>
      <Link to="/contact" className="btn btn-outline-light">Contact Us</Link>
    </div>
  </div>
);


const Home = () => {
  return (
    <div className="home-page mx-1">
      <HeroSection />
      <CoursesPreview />
      <ProfessorsPreview />
      <Articles />
      <Quiz />
      <ContactCTA />
     
    </div>
  );
};

export default Home;
