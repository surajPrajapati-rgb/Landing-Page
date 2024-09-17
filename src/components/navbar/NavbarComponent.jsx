
import React from 'react';
import './navbar.css';
import Button from 'react-bootstrap/Button';


function NavbarComponent() {
  return (
    <header className="navbar">
      <div className="container">
        <div className="title">Suraj Prajapati</div>
        <Button variant="light" size="lg">Contact</Button>
      </div>
    </header>
  );
}

export default NavbarComponent;
