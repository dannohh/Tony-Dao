import React from 'react';
import MedForm from './MedForm';

const AddMed = ({ history, books, setBooks }) => {
  const handleOnSubmit = (book) => {
    setBooks([book, ...books]);
    history.push('/');
  };

  return (
    <React.Fragment>
      <MedForm handleOnSubmit={handleOnSubmit} />
    </React.Fragment>
  );
};

export default AddMed;