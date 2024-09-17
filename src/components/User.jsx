import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import "./User.css";

import userImage from '/src/assets/unnamed.jpg';

function User() {
    return (
        <Container fluid className="user-component-container py-5">
            <Row className="align-items-center">
                <Col lg={6} className="text-center">
                    <img src={userImage} alt="User" className="img-fluid rounded-circle user-image custom-height" />
                </Col>

                <Col lg={6}>
                    <h1 className="display-1 user-title">Hello!</h1>
                    <p className="lead user-description">
                        I’M AN INDIA-BASED WEB DESIGNER AND DEVELOPER WORKING CLOSELY
                        WITH EARLY-STAGE STARTUP FOUNDERS TO CREATE BEAUTIFUL AND LOVABLE WEBSITES FOR THEIR BUSINESS.
                    </p>
                    <Button variant="dark" size="lg" className="contact-button">
                        Contact
                    </Button>
                </Col>
            </Row>
        </Container>
    );
}

export default User;
