import React from 'react';
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';
import { FaLinkedin, FaYoutube, FaInstagram } from 'react-icons/fa';

import './Footer.css';

function Footer() {
  return (
    <>
      <div className='contact-for-project'>   
          <h1>Interested In <br/>
          Working With Me?</h1>
        <Button variant="dark">Start Project</Button>
        </div>

        <div className="d-flex justify-content-between align-items-center bg-black">

    <div className="d-flex m-3 p-3">
        <Nav.Link href="#" className="text-white mx-2" target="_blank" rel="noopener noreferrer">Preference</Nav.Link>
        <Nav.Link href="#" className="text-white mx-2" target="_blank" rel="noopener noreferrer">About</Nav.Link>
        <Nav.Link href="#" className="text-white mx-2" target="_blank" rel="noopener noreferrer">FAQs</Nav.Link>
    </div>

    <div className="d-flex">
        <Button className="rounded-pill bg-white mx-2">
            <Nav.Link href="https://www.linkedin.com/in/divyansh-mishra-114955253/" className="text-black" target="_blank" rel="noopener noreferrer">
                <FaLinkedin/>
            </Nav.Link>
        </Button>
        <Button className="rounded-pill bg-white mx-2">
            <Nav.Link href="https://www.linkedin.com/in/divyansh-mishra-114955253/" className="text-black" target="_blank" rel="noopener noreferrer">
                <FaYoutube/>
            </Nav.Link>
        </Button>
        <Button className="rounded-pill bg-white mx-2">
            <Nav.Link href="https://www.linkedin.com/in/divyansh-mishra-114955253/" className="text-black" target="_blank" rel="noopener noreferrer">
                <FaInstagram/>
            </Nav.Link>
        </Button>
    </div>
</div>

    </>
  );
}

export default Footer;
