import React, { useState } from 'react';
import { Button, Form, Container, FormLabel, Row, Image, Col } from 'react-bootstrap';

import { Link, useHistory } from 'react-router-dom';

import Slider from 'react-bootstrap-slider';

import { ReactComponent as MaleFemaleIcon } from '../assets/malefemale.svg';
import { ReactComponent as MaleIcon } from '../assets/male.svg';
import { ReactComponent as FemaleIcon } from '../assets/female.svg';

import { ReactComponent as GardeningIcon } from '../assets/gardener.svg';
import { ReactComponent as DishwasherIcon } from '../assets/dishwasher.svg';
import { ReactComponent as HouseKeeperIcon } from '../assets/housekeeper.svg';


import './Hire.scss';

function CategoryPreview({ categoryName, icon, active=false, onClick }) {
    return (
        <Container fluid onClick={onClick}>
            <Row className="justify-content-md-center">
                <div className={'cat-icon ' + (active ? 'active' : '')}>{icon}</div>
            </Row>
            <Row className="justify-content-md-center">
                {categoryName || 'no category name'}
            </Row>
        </Container>
    )
}

function Hire() {
    const history = useHistory();

    const [selectedCategory, setSelectedCategory] = useState('dishes');
    const [selectedGender, setSelectedGender] = useState('any');
    const [selectedWage, setSelectedWage] = useState([150, 500]);
    const [selectedAge, setSelectedAge] = useState([24, 62]);
    const [selectedLocation, setLocation] = useState('');

    function navigateToSearch() {
        history.push("/search", {
            selectedCategory,
            selectedGender,
            selectedWage,
            selectedAge,
            selectedLocation
        });
    }
    
    return (
        <Container className="pt-3">
            <h1 style={{textAlign: 'center'}}>คุณต้องการจ้างคนแบบไหน ?</h1>
            <Row>
                <Col>
                    <CategoryPreview categoryName="คนสวน" icon={<GardeningIcon />} active={selectedCategory == 'gardening'} onClick={() => setSelectedCategory('gardening')}/>
                </Col>
                <Col>
                    <CategoryPreview categoryName="คนล้างจาน" icon={<DishwasherIcon />} active={selectedCategory == 'dishes'} onClick={() => setSelectedCategory('dishes')}/>
                </Col>
                <Col>
                    <CategoryPreview categoryName="คนทำความสะอาด" icon={<HouseKeeperIcon />} active={selectedCategory == 'cleaning'} onClick={() => setSelectedCategory('cleaning')}/>
                </Col>
            </Row>

            <div>
                <Form onSubmit={navigateToSearch}>
                    <Form.Group controlId="location">
                        <Form.Label>ย่านที่ต้องการ</Form.Label>
                        <Form.Control type="text" placeholder="Bangkok..." onChange={c => setLocation(c.target.value)}></Form.Control>
                    </Form.Group>
                    <Form.Group controlId="wage" style={{textAlign: "center"}}>
                        <Form.Label>ค่าจ้างที่ต้องการจ่าย</Form.Label>
                        <br></br>
                        <Slider id="wage-slider" value={selectedWage} min={150} max={500} step={10} change={c => setSelectedWage(c.target.value)}  tooltip="always" tooltip_split></Slider>
                    </Form.Group>
                    <Form.Group controlId="age" style={{textAlign: "center"}}>
                        <Form.Label>ช่วงอายุ</Form.Label>
                        <br></br>
                        <Slider id="age-slider" value={selectedAge} min={24} max={62} step={1} change={c => setSelectedAge(c.target.value)} tooltip="always" tooltip_split></Slider>
                    </Form.Group>
                    <Form.Group controlId="gender">
                        <Form.Label>เพศ</Form.Label>
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
                    <Button onClick={navigateToSearch}>Search</Button>
                </Form>
            </div>
        </Container>
    );
}

export default Hire;