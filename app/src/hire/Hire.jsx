import React from 'react';
import { Button, Form, Container, FormLabel, Row, Image, Col } from 'react-bootstrap';

import Slider from 'react-bootstrap-slider';

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
                            <div>
                                Male + female    
                            </div>
                            <div>
                                Male
                            </div>
                            <div>
                                Female
                            </div>
                        </div>
                    </Form.Group>
                    <Button>Search</Button>
                </Form>
            </div>
        </Container>
    );
}

export default Hire;