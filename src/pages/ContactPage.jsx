import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

import MapComponent from '../components/MapComponent'; // Assicurati che il percorso sia corretto

import ReCAPTCHA from 'react-google-recaptcha';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    lastname: '',
    email: '',
    phone: '',
    message: '',
    tipo: '',
    stato_richiesta: 'pending',
    recaptcha: ''
  });
  const [courses, setCourses] = useState([]);
  const navigate = useNavigate();

  const recaptchaRef = React.createRef();
  
  useEffect(() => {
    // Caricare la lista dei corsi dal backend
    const fetchCourses = async () => {
      try {
        const response = await axios.get('http://localhost/quiz/wordpress/wp-json/wp/v2/corsi');
        setCourses(response.data);
      } catch (error) {
        console.error('Failed to fetch courses', error);
      }
    };

    fetchCourses();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value);  // Questo ti mostrerà quale campo viene aggiornato e il suo valore.
    setFormData(prevState => ({
        ...prevState,
        [name]: value
    }));
};



const handleSubmit = async (e) => {
  e.preventDefault();
  const recaptchaValue = recaptchaRef.current.getValue();
  console.log('reCAPTCHA token:', recaptchaValue);  // Aggiungi questo log

  if (!recaptchaValue) {
    alert('Per favore, conferma che non sei un robot.');
    return;  // Termina qui se il reCAPTCHA non è confermato
}

  setFormData({...formData, recaptcha: recaptchaValue});

  console.log('Submitting:', formData);
  try {
      const response = await fetch('http://localhost/quiz/wordpress/wp-json/wp/v2/contatto', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
              'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vbG9jYWxob3N0L3F1aXovd29yZHByZXNzIiwiaWF0IjoxNzE1Nzg3OTc5LCJuYmYiOjE3MTU3ODc5NzksImV4cCI6MTcxNTc4ODU3OSwiZGF0YSI6eyJ1c2VyIjp7ImlkIjoxLCJkZXZpY2UiOiIiLCJwYXNzIjoiZjk4Y2IxMDAyNTU1N2FjMDVjNDRmZGM0YzMxZjIyOWEifX19.1yOsfN0DdnxyutpBdecgPCLo2eHGJFirgpze_gXGrmM'
          },
          body: JSON.stringify({
              ...formData,
              recaptcha: recaptchaValue
          })
      });

      const data = await response.json();
      console.log('Server response:', data);
      if (response.ok) {
          alert('Grazie per averci contattato!');
          navigate('/');
          window.scrollTo(0, 0); // Resetta lo scroll

      } else {
          throw new Error('La risposta del server non è stata corretta.');
      }
  } catch (error) {
      console.error('Error:', error);
      alert('Errore nel invio del form. Si prega di riprovare.');
  }
};




  




  return (
    <div className="container mt-5">
  <h1 className='text-center m-5'>I nostri contatti:</h1>


<div className="contact-details text-center">
    <p><strong>Email:</strong> info@tuoazienda.com</p>
    <p><strong>Telefono:</strong> +39 012 3456789</p>
    <p><strong>Indirizzo:</strong> Via Pippo 1, 00100 Roma, Italia</p>
  </div>

  <div className="map">
    <h2 className='text-center'>Dove Siamo</h2>
    <MapComponent />
  </div>

    <br />
      <h3>Hai qualche domanda? Sei interessato ai nostri corsi? Compila il form</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Nome:</label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="lastname">Cognome:</label>
          <input
            type="text"
            className="form-control"
            id="lastname"
            name="lastname"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Telefono:</label>
          <input
            type="number"
            className="form-control"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="tipo">Interesse:</label>
          <select
        className="form-control"
        id="tipo"
        name="tipo"
        value={formData.tipo}  // Usa 'value' per il controllo completo
        onChange={handleChange}
        
      >
        <option value="" disabled>
          Scegli a quale corso sei interessato
        </option>
        {courses.map((course) => (
          <option key={course.id} value={course.acf.nome_del_corso}>
            {course.acf.nome_del_corso}
          </option>
        ))}
        <option value="Altro">Altro</option>
      </select>
        </div>
        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea
            className="form-control"
            id="message"
            name="message"
            rows="3"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <ReCAPTCHA
        className='my-4 '
          ref={recaptchaRef}
          sitekey="6Le06dcpAAAAAMJdARuOjsAVsDPEg3MMHsa-nXng"
          onChange={handleChange}
        />
        <button type="submit" className="btn btn-primary my-2">Send</button>
      </form>
    </div>
  );
};

export default ContactPage;
