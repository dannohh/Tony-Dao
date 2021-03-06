import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useNavigate,Navigate } from 'react-router-dom';
import EditMed from '../components/EditMed'
import Header from '../components/Header';
import AddMed from '../components/AddMed';
import MedList from '../components/MedList';
import useLocalStorage from '../hooks/useLocalStorage';
import Register from '../components/Register';

const AppRouter = () => {



  const [books, setBooks] = useLocalStorage('books', []);
  const [isLoggedIn, setLogin] = useState('false')



  return (
    <BrowserRouter>
      <div>
        <Header />
        <div className="main-content">
          <Routes>
            <Route element={<Register />} path="/register" exact={true} />
            <Route element={<MedList books={books} setBooks={setBooks} />} path="/" exact={true} />
            <Route path="/add" element={<AddMed books={books} setBooks={setBooks} />} />
            <Route path="/edit">
              <Route path=":id" element={<EditMed books={books} setBooks={setBooks} />}/>
            </Route>
            <Route element={<Navigate to="/" />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default AppRouter;