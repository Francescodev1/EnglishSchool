import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadProfessors } from '../features/professors/professorsSlice';
import ProfessorCard from '../components/ProfessorCard';

const ProfessorsPage = () => {
  const dispatch = useDispatch();
  const professors = useSelector(state => state.professors.data);

  useEffect(() => {
    dispatch(loadProfessors());
  }, [dispatch]);

  return (
    <div >
      {professors.map(prof => (
        <ProfessorCard key={prof.id} professor={prof} />
      ))}
    </div>
  );
};

export default ProfessorsPage;
