import React, { useState } from 'react';
import { Button, Form, Container, FormLabel, Row, Image, Col } from 'react-bootstrap';

import { Link } from 'react-router-dom';

import Slider from 'react-bootstrap-slider';

import { ReactComponent as MaleFemaleIcon } from '../assets/malefemale.svg';
import { ReactComponent as MaleIcon } from '../assets/male.svg';
import { ReactComponent as FemaleIcon } from '../assets/female.svg';

import './Hire.scss';

function CategoryPreview({ categoryName }) {
    return (
        <Container fluid>
            <Row className="justify-content-md-center">
                <Image src={`https://via.placeholder.com/200?text=${categoryName || 'no name'}`} roundedCircle></Image>
            </Row>
            <Row className="justify-content-md-center">
                {categoryName || 'no category name'}
            </Row>
        </Container>
    )
}

function Hire() {
    const [selectedCategory, setSelectedCategory] = useState(0);
    const [selectedGender, setSelectedGender] = useState('any');
    
    return (
        <Container>
            <h1>header text</h1>
            <Row>
                <Col>
                    <CategoryPreview categoryName="gardening"/>
                </Col>
                <Col>
                    <CategoryPreview categoryName="dishes"/>
                </Col>
                <Col>
                    <CategoryPreview categoryName="cleaning"/>
                </Col>
            </Row>

            <div>
                <Form>
                    <Form.Group controlId="location">
                        <Form.Label>location</Form.Label>
                        <Form.Control type="text" placeholder="Bangkok..."></Form.Control>
                    </Form.Group>
                    <Form.Group controlId="wage">
                        <Form.Label>Wage</Form.Label>
                        <br></br>
                        <Slider value={[200, 300]} min={150} max={500} step={10}></Slider>
                    </Form.Group>
                    <Form.Group controlId="age">
                        <Form.Label>Age</Form.Label>
                        <br></br>
                        <Slider value={[18, 30]} min={13} max={100} step={1}></Slider>
                    </Form.Group>
                    <Form.Group controlId="gender">
                        <Form.Label>gender</Form.Label>
                        <div className="d-flex justify-content-start">
                            <MaleFemaleIcon style={{ height: '40px'}} 
                                className={'gender-icon ' + (selectedGender == 'any' ? 'active' : '')}
                                onClick={() => setSelectedGender('any')}
                            />
                            <MaleIcon 
                                className={'gender-icon ' + (selectedGender == 'male' ? 'active' : '')}
                                onClick={() => setSelectedGender('male')}
                            />
                            <FemaleIcon
                                className={'gender-icon ' + (selectedGender == 'female' ? 'active' : '')}
                                onClick={() => setSelectedGender('female')}
                            />
                        </div>
                    </Form.Group>
                    <Link to="/search">
                        <Button>Search</Button>
                    </Link>
                </Form>
            </div>
        </Container>
    );
}

export default Hire;