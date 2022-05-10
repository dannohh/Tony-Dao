import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from '../components/Header';
import AddMed from '../components/AddMed';
import MedList from '../components/MedList';
import useLocalStorage from '../hooks/useLocalStorage';

const AppRouter = () => {

  const [books, setBooks] = useLocalStorage('books', []);

  return (
    <BrowserRouter>
      <div>
        <Header />
        <div className="main-content">
          <Routes>
            <Route element={<MedList />} path="/" exact={true} />
            <Route path="/add" element={<AddMed books={books} setBooks={setBooks} />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default AppRouter;