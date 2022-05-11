import React from 'react';
import MedForm from './MedForm';
import { useNavigate } from 'react-router-dom';

const AddMed = ({ history, books, setBooks }) => {
  const navigate = useNavigate()
  const handleOnSubmit = (book) => {
    setBooks([book, ...books]);
    navigate('/');
  };

  return (
    <React.Fragment>
      <MedForm handleOnSubmit={handleOnSubmit} />
    </React.Fragment>
  );
};

export default AddMed;