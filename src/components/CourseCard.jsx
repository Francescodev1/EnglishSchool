import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import Spinner from './Spinner';

const CourseCard = ({ course, isLoading }) => {  // Aggiungi isLoading come prop per tracciare il caricamento
  const [detailsVisible, setDetailsVisible] = useState(false);

  const toggleDetails = () => {
    setDetailsVisible(!detailsVisible);
  };

  // Mostra lo spinner se i dati sono ancora in caricamento
  if (isLoading) {
    return <Spinner />;
  }

  return (
    <div className="custom-card card mb-4 shadow-sm">
      <img src={course.acf.immagine_del_corso.url} alt={course.title.rendered} className="custom-card-img card-img-top" />
      <div className="card-body">
        <h5 className="card-title">{course.acf.nome_del_corso}</h5>
        <p className="card-text" dangerouslySetInnerHTML={{ __html: course.acf.descrizione_corso }}></p>
        <ul className="list-group list-group-flush">
          <li className="list-group-item"><strong>Livello:</strong> {course.acf.livello_corso}</li>
          <li className="list-group-item"><strong>Durata:</strong> {course.acf.durata_del_corso}</li>
          <li className="list-group-item"><strong>Prezzo:</strong> {course.acf.prezzo_del_corso || "Non specificato"}€</li>
          {/* Bottone per mostrare/nascondere dettagli aggiuntivi */}
          <button className="btn btn-link" onClick={toggleDetails}>
            {detailsVisible ? "Nascondi Dettagli" : "Mostra Dettagli"}
          </button>
          {detailsVisible && (
            <div>
              <li className="list-group-item"><strong>Insegnante:</strong> {course.acf.insegnante_del_corso[0].post_title}</li>
              <li className="list-group-item"><strong>Orari:</strong> {course.acf.orari_lezioni.join(", ")}</li>
              <li className="list-group-item"><strong>Numero studenti per classe:</strong> {course.acf.numero_studenti_per_classe[0]}</li>
            </div>
          )}
        </ul>
      </div>
      <div className="card-footer text-muted">
        <Link to="/contact" className="btn btn-primary">Contattaci</Link>
      </div>
    </div>
  );
};

export default CourseCard;























// import React from 'react';
// import {Link} from 'react-router-dom';
// import '../App.css';  // Assicurati che i tuoi stili personalizzati siano definiti qui

// const CourseCard = ({ course }) => {
//   return (
//     <div className="custom-card card mb-4 shadow-sm">
//       <img src={course.acf.immagine_del_corso.url} alt={course.title.rendered} className="custom-card-img card-img-top" />
//       <div className="card-body">
//         <h5 className="card-title">{course.acf.nome_del_corso}</h5>
//         <p className="card-text" dangerouslySetInnerHTML={{ __html: course.acf.descrizione_corso }}></p>
//         <ul className="list-group list-group-flush">
//           <li className="list-group-item"><strong>Livello:</strong> {course.acf.livello_corso}</li>
//           <li className="list-group-item"><strong>Durata:</strong> {course.acf.durata_del_corso}</li>
//           <li className="list-group-item"><strong>Prezzo:</strong> {course.acf.prezzo_del_corso || "Non specificato"}€ </li>
//           <li className="list-group-item"><strong>Insegnante:</strong> {course.acf.insegnante_del_corso[0].post_title}</li>
//           <li className="list-group-item"><strong>Orari:</strong> {course.acf.orari_lezioni.join(", ")}</li>
//           <li className="list-group-item"><strong>Numero studenti per classe:</strong> {course.acf.numero_studenti_per_classe[0]}</li>
//         </ul>
//       </div>
//       <div className="card-footer text-muted">
//         <Link to="/contact" className="btn btn-primary">Scopri di più</Link>
//       </div>
//     </div>
//   );
// };

// export default CourseCard;
