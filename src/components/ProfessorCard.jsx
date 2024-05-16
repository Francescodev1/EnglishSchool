import React from 'react';
import '../App.css';
const ProfessorCard = ({ professor }) => {
  return (
    <div className="card mb-3 professor-card m-5">
      <div className="row g-0">
        <div className="col-lg-3 col-md-4 col-sm-5 professor-image-container">
          <img src={professor.acf.foto.url} className="img-fluid rounded-start" alt={professor.acf.nome} />
        </div>
        <div className="col-lg-9 col-md-8 col-sm-7">
          <div className="card-body professor-body">
            <h5 className="card-title professor-title">{professor.acf.nome}</h5>
            <p className="card-text professor-text"><strong>Qualifications:</strong> {professor.acf.attestati}</p>
            <p className="card-text professor-text"><strong>Years of Teaching:</strong> {professor.acf.anni_insegnamento}</p>
            <p className="card-text professor-text"><small className="text-muted professor-motto">{professor.acf.descrizione_motivazionale}</small></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfessorCard;
