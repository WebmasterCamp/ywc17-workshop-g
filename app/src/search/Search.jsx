import React, { useState } from 'react';
import { Container, Col, Row, Form, Button, Image, Media, Badge } from 'react-bootstrap';
import Slider from 'react-bootstrap-slider';
import Rating from 'react-rating';
import { Link } from 'react-router-dom';

import { ReactComponent as MaleFemaleIcon } from '../assets/malefemale.svg';
import { ReactComponent as MaleIcon } from '../assets/male.svg';
import { ReactComponent as FemaleIcon } from '../assets/female.svg';

import '../hire/Hire.scss'

function CategoryPreviewFilter({ categoryName }) {
    return (
        <Container fluid>
            <Row className="justify-content-md-center">
                <Image src={`https://via.placeholder.com/75?text=${categoryName || 'no name'}`} roundedCircle></Image>
            </Row>
        </Container>
    )
}

function PersonCard() {
    return (
        <div>
        <Media style={{textDecoration: 'none'}}>
            <Image src="https://via.placeholder.com/150" roundedCircle></Image>
            <Media.Body className="px-3">
                <Link to="/profile">
                    <h3>header</h3>
                </Link>
                <div>
                    <span>name</span>
                    <Badge variant="dark" className="mx-2">Cat1</Badge>
                    <Badge variant="dark" className="mx-2">Cat1</Badge>
                </div>
                <Rating
                    start={0}
                    stop={5}
                    step={1}
                    fractions={2}
                    initialRating={2.5}
                    readonly
                ></Rating>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci laborum voluptate minima maiores mollitia tempore asperiores! Quibusdam omnis debitis pariatur quisquam id nulla, suscipit ex. Illo pariatur impedit quos debitis?
                </p>
            </Media.Body>
        </Media>
        <hr></hr>
        </div>
    )
}

function Search(){
    const [selectedGender, setSelectedGender] = useState('any');

    return (
        <Container fluid>
            <Row>   
                <Form>
                    Filters
                    <Form.Check>
                        <Form.Group controlId="category">
                            <Row>
                                <Col>
                                    <CategoryPreviewFilter categoryName="gardening" />
                                </Col>
                                <Col>
                                    <CategoryPreviewFilter categoryName="dishes" />
                                </Col>
                                <Col>
                                    <CategoryPreviewFilter categoryName="cleaning" />
                                </Col>
                            </Row>
                        </Form.Group>
                        <Form.Group controlId="location">
                            <Form.Label>location</Form.Label>
                            <Form.Control type="text" placeholder="Bangkok..."></Form.Control>
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
                        <Form.Group controlId="age">
                                <Form.Label>Age</Form.Label>
                                <br></br>
                                <Slider value={[18, 30]} min={13} max={100} step={1}></Slider>
                            </Form.Group>
                        <Form.Group controlId="wage">
                            <Form.Label>Wage</Form.Label>
                            <br></br>
                            <Slider value={[200, 300]} min={150} max={500} step={10}></Slider>
                        </Form.Group>
                        <Button>Update Filters</Button>
                    </Form.Check>
                </Form>
                <Col>
                    <div>
                        <h2>3 Results</h2>
                        <PersonCard />
                        <PersonCard />
                        <PersonCard />
                    </div>
                </Col>
            </Row>
        </Container>
    );
}
 
export default Search;