import React from 'react';
import _ from 'lodash';
import Med from './Med';

const MedList = ({ books, setBooks }) => {

  const handleRemoveBook = (id) => {
    setBooks(books.filter((book) => book.id !== id));
  };

  return (
    <React.Fragment>
      <div className="book-list">
        {!_.isEmpty(books) ? (
          books.map((book) => (
            <Med key={book.id} {...book} handleRemoveBook={handleRemoveBook} />
          ))
        ) : (
          <p className="message">No medications available. Please add some medications.</p>
        )}
      </div>
    </React.Fragment>
  );
};

export default MedList;