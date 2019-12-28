import React, { useState } from 'react';
import { Container, Col, Row, Form, Button, Image, Media, Badge } from 'react-bootstrap';
import Slider from 'react-bootstrap-slider';
import Rating from 'react-rating';
import { Link, useLocation } from 'react-router-dom';

import { ReactComponent as MaleFemaleIcon } from '../assets/malefemale.svg';
import { ReactComponent as MaleIcon } from '../assets/male.svg';
import { ReactComponent as FemaleIcon } from '../assets/female.svg';

import { ReactComponent as GardeningIcon } from '../assets/gardener.svg';
import { ReactComponent as DishwasherIcon } from '../assets/dishwasher.svg';
import { ReactComponent as HouseKeeperIcon } from '../assets/housekeeper.svg';

import '../hire/Hire.scss';
import './Search.scss';

function CategoryPreviewFilter({ categoryName, icon, active, onClick }) {
    return (
        <Container fluid onClick={onClick}>
            <Row className={"justify-content-md-center search-cat-icon " + (active ? 'active' : '')}>
                {icon}
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
    const location = useLocation();
    
    const [selectedGender, setSelectedGender] = useState(location.state.selectedGender || 'any');
    const [selectedCategory, setSelectedCategory] = useState(location.state.selectedCategory || 'dishes');
    const [selectedWage, setSelectedWage] = useState(location.state.selectedWage || [150, 500]);
    const [selectedAge, setSelectedAge] = useState(location.state.selectedAge || [24, 62]);
    const [selectedLocation, setLocation] = useState(location.state.selectedLocation);

    return (
        <Container fluid>
            <Row>
                <Col md={{span: 3}} className="pt-4 px-4 search-sidebar">
                    <Form>
                        <Form.Group controlId="category">
                            <Row>
                                <Col>
                                    <CategoryPreviewFilter categoryName="gardening" active={selectedCategory == 'gardening'} 
                                    icon={<GardeningIcon />}
                                    onClick={() => setSelectedCategory('gardening')}
                                    />
                                </Col>
                                <Col>
                                    <CategoryPreviewFilter categoryName="dishes" active={selectedCategory == 'dishes'} icon={<DishwasherIcon />}
                                    onClick={() => setSelectedCategory('dishes')}
                                    />
                                </Col>
                                <Col>
                                    <CategoryPreviewFilter categoryName="cleaning" active={selectedCategory == 'cleaning'} icon={<HouseKeeperIcon />} 
                                    onClick={() => setSelectedCategory('cleaning')}
                                    />
                                </Col>
                            </Row>
                        </Form.Group>
                        <Form.Group controlId="location">
                            <Form.Label>location</Form.Label>
                            <Form.Control type="text" placeholder="Bangkok..." value={selectedLocation} onChange={c => setLocation(c.target.value)}></Form.Control>
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
                        <Form.Group controlId="wage">
                            <Form.Label>Wage</Form.Label>
                            <br></br>
                            <Slider id="wage-slider" tooltip="always" value={selectedWage} min={150} max={500} step={10} change={c => setSelectedWage(c.target.value)}
                                formatter={value => value[0] + ' - ' + value[1]}
                            ></Slider>
                        </Form.Group>
                        <Form.Group controlId="age">
                            <Form.Label>Age</Form.Label>
                            <br></br>
                            <Slider id="age-slider" tooltip="always" value={selectedAge} min={24} max={62} step={1} change={c => setSelectedAge(c.target.value)}
                                formatter={value => value[0] + ' - ' + value[1]}
                            ></Slider>
                            </Form.Group>
                        <Button>Update Filters</Button>
                    </Form>
                </Col>
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