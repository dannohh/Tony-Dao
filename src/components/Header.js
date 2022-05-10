import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <h1>Medication Management App</h1>
      <hr />
      <div className="links">
        <NavLink to="/" className="link" activeClassName="active" exact>
          Medication List
        </NavLink>
        <NavLink to="/add" className="link" activeClassName="active">
          Add Medication
        </NavLink>
      </div>
    </header>
  );
};

export default Header;  