import React from 'react';
import './Projects.css';
import projectImage1 from '/src/assets/eight-budget-management.avif';
import projectImage2 from '/src/assets/e-shopping.avif';
import { Container, Row, Col, Image } from 'react-bootstrap';

const Projects = () => {
    return (
        <>
        <div>
            <h1 className="project-heading">  SELECTED <br /> PROJECT </h1>
        </div>
        <div className="project-section">
            <Container>
                <Row>
                    <Col md={6}>
                        <Image src={projectImage1} rounded fluid />
                        <h3 className="project-title">Project One</h3>
                        <p className="project-description">
                            This is a description for project one. It has some amazing features and a cool UI/UX.
                        </p>
                    </Col>
                    <Col md={6}>
                        <Image src={projectImage2} thumbnail fluid />
                        <h3 className="project-title">Project Two</h3>
                        <p className="project-description">
                            This is a description for project two. It’s designed for performance and scalability.
                        </p>
                    </Col>
                </Row>
                </Container>

                <Container>
                <Row>
                    <Col md={6}>
                        <Image src={projectImage1} rounded fluid />
                        <h3 className="project-title">Project One</h3>
                        <p className="project-description">
                            This is a description for project one. It has some amazing features and a cool UI/UX.
                        </p>
                    </Col>
                    <Col md={6}>
                        <Image src={projectImage2} thumbnail fluid />
                        <h3 className="project-title">Project Two</h3>
                        <p className="project-description">
                            This is a description for project two. It’s designed for performance and scalability.
                        </p>
                    </Col>
                </Row>
                </Container>
        </div>
        </>
    );
};

export default Projects;
