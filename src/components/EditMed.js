import React from 'react';
import MedForm from './MedForm';
import { useParams, useNavigate } from 'react-router-dom';

const EditBook = ({ books, setBooks }) => {
  const navigate = useNavigate()
  const { id } = useParams();
  const bookToEdit = books.find((book) => book.id === id);

  const handleOnSubmit = (book) => {
    const filteredBooks = books.filter((book) => book.id !== id);
    setBooks([book, ...filteredBooks]);
    navigate('/');
  };

  return (
    <div>
      <MedForm book={bookToEdit} handleOnSubmit={handleOnSubmit} />
    </div>
  );
};

export default EditBook;