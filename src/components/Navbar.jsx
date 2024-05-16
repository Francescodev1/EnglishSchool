import React from 'react';
import { NavLink } from 'react-router-dom';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import '../App.css';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light navsfondo ">
            <div className="container-fluid">
                <NavLink className="navbar-brand text-white" to="/">English School</NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavLink className="nav-link fw-bold" to="/">Home</NavLink>
                        </li>
                        <li className='nav-item'>
                            <NavLink className="nav-link" to="/coursepage">Corsi</NavLink> 
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link fw-bold" to="/quiz">Quiz</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/articles">Blog</NavLink>  
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link fw-bold" to="/professors">Insegnanti</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/contact">Contatti</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
