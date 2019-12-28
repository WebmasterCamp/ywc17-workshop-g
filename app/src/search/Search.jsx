import React, { useState } from 'react';
import { Container, Col, Row, Form, Button, Image, Media, Badge } from 'react-bootstrap';
import Slider from 'react-bootstrap-slider';
import Rating from 'react-rating';
import { Link, useLocation } from 'react-router-dom';

import { ReactComponent as MaleFemaleIcon } from '../assets/malefemale.svg';
import { ReactComponent as MaleIcon } from '../assets/male.svg';
import { ReactComponent as FemaleIcon } from '../assets/female.svg';

import p1 from "../img/1.jpg";
import p2 from "../img/2.jpg";
import p3 from "../img/3.jpg";
import p4 from "../img/4.jpg";

import '../hire/Hire.scss'

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

class Search extends React.Component{
    // const [selectedGender, setSelectedGender] = useState('any');

    setSelectedGender = (sex) => {
        this.setState({
            selectedGender: sex
        })
    }
    constructor(props){
        super(props);
        this.state = {
            selectedGender: 'any',
            data: [
                {   id: 0,
                    quote: "สลากแดง แพลงชีวิต",
                    img: p2,
                    name: "นายดำ ศักดิ์ชัย",
                    sex: 'ชาย',
                    age: 50,
                    exp: "ทหารเกณฑ์",
                    skill: ['ตัดไม้', 'เลื่อยไม้', 'ดายหญ้า', 'ความรู้ด้านพืชพรรณ'],
                    location: 'บางกอกน้อย',
                    rate: 5,
                    review: [
                        {
                            review: 'ขยันขันแข็ง แรงดี ทำงานได้ภายในเวลาที่กำหนด',
                            reviewer: 'ดารณี แสงสี',
                            rate: 5
                        }
                    ],
                    Story: ' "ดำ" เกษตรกรรับจ้างในไร่มันสัมปะหลัง จังหวัดนครราชสีมา กลับต้องมาทำหน้าที่รับใช้สังคมตอนอายุ 21 ปี ชีวิตพลิกผลันครั้งยิ่งใหญ่โดยไม่รู้เนื้อ รู้ตัว หลังออกจากกองทัพอย่างไร้เงินเก็บ ไร้การรองรับทางความสามารถ ทำให้ "ดำ" จำใจต้องย้ายเข้ามาหางานในกรุงเทพฯ หวังใช้ชีวิต "ร่อนเร่" ได้อย่างมีคุณภาพมากยิ่งขึ้น'
                },
                {   id: 1,
                    quote: "ถูกที่ ผิดเวลา",
                    img: p1,
                    name: "นางวิไลลักษณ์ ชูขำ",
                    sex: 'หญิง',
                    age: 56,
                    exp: "คนรับใช้",
                    skill: ['ทำความสะอาดบ้าน'],
                    location: 'ทวีวัฒนา',
                    rate: 5,
                    review: [
                        {
                            review: 'ป้าทำงานเก่งมากค่ะ ตรงต่อเวลา มีความรับผิดชอบต่องานที่ได้รับมอบหมาย',
                            reviewer: 'ภาคินทร์ ดำรงธรรมม์',
                            rate: 5
                        }
                    ],
                    Story: ' เหตุการณ์ต้มยำกุ้ง ปี 40 ได้ผันชีวิตให้ “วิไลลักษณ์” เปลี่ยนไปตลอดกาล จากที่เคยมีสุข ได้ทำงานรับใช้ภายในบ้านหลังใหญ่ มีรายได้ที่มั่นคง มีที่อยู่อาศัยและมิตรภาพที่ดี อยู่สุขสบาย กลับพลิกเปลี่ยนจากหน้ามือไปเป็นหลังมือ เมื่อเจ้านายของเธอต้องตัดใจเลิกจ้างคนรับใช้ที่ซื่อสัตย์ไปด้วยเหตุผลทางเศรษฐกิจ ...จะให้ทำใจยอมรับภายในระยะเวลาอันสั้นได้อย่างไร เมื่อความเป็นจริง มันโหดร้ายเกินกว่าที่หญิงชราคนหนึ่งจะต้องพบเจอ'
                },
                {   id: 2,
                    quote: "ผู้ชายในฝัน",
                    img: p3,
                    name: "นางปรีณา ดวงใจ",
                    sex: 'หญิง',
                    age: 62,
                    exp: "ขายพวงมาลัยตามสี่แยกไฟแดง",
                    skill: ['เย็บปักถักร้อย'],
                    location: 'บางซื่อ',
                    rate: 5,
                    review: [
                        {
                            review: 'ตั้งใจทำการ ทำงาน ช่วยงานในบ้านได้หลากหลายประเภท ทั้งทำความสะอาด วางใจให้เลี้ยงดููลูกหลาน สอนเย็บถักร้อยได้',
                            reviewer: 'ทองกวาว แสงใส',
                            rate: 5
                        }
                    ],
                    Story: 'การตัดสินใจที่ผิด ความรักที่สวยงามในวันนั้น นำสู่ชีวิตที่ไร้ทางเลือกในวันนี้ "ปรีณา" เด็กสาวกับความมั่นคงในรัก เลือกที่จะใช้ชีวิตร่วมกับชายคนหนึ่ง ร่วมทุกข์ ร่วมสุขฉันสามีภรรยา น่าผิดหวังที่ตอนจบกลับไม่สวยงามเช่นการเริ่มต้น วันวานที่เคยหอมหวาน แปรเปลี่ยนไปเป็นขมเปร่า เมื่อสามีของเธอ พบหญิงสาวคนใหม่ ที่ทั้งสาวกว่า สวยกว่า "ปรีณา" จึงถูกปล่อยปะละเลยให้ไร้บ้านและไร้ความหวังอยู่ข้างถนนแต่เพียงผู้เดียวในที่สุด'
                },
                {   id: 3,
                    quote: "ความหวังในความจริง",
                    img: p4,
                    name: "นายณเดชน์ มีอุดม",
                    sex: 'ชาย',
                    age: 24,
                    exp: "ชาวนา",
                    skill: ['การทำเกษตรกรรมอย่างถูกต้อง'],
                    location: 'ราชเทวี',
                    rate: 5,
                    review: [
                        {
                            review: 'ความสามารถหลากหลาย มีปฏิสัมพันธ์ที่ดีกับสมาชิกคนอื่น ๆ ในโรงงาน',
                            reviewer: 'ษรรยา บางระจัน',
                            rate: 5
                        }
                    ],
                    Story: 'เมื่อคุณพ่อเลี้ยงเดี่ยวอย่าง "ณเดชน์" ชาวนา จังหวัดพิจิตร เจอวิกฤตความกดดันทางเศรษฐกิจ ข้าวที่เคยขายได้ ถูกกดราคาต่ำ ลูก ๆ ที่ยังเล็กต่างต้องใช้ชีวิตต่อ หัวหน้าครอบครัวอย่างเขา จึงตัดสินใจเข้ามาหาความหวังในเมืองกรุงฯ แม้จะเป็นเมืองหลวง แต่เนื่องจากภาวะทางเศรษฐกิจที่ตกต่ำ ทำให้มีตำแหน่งว่างงานไม่มาก ท้ายที่สุด "ณเดชน์" จึงไร้งานทำ ไร้เงินเก็บ ทั้งยังกระดากอายที่จะกลับไปใช้ชีวิตต่อในบ้านเกิดร่วมกับลูก ๆ จึงเลือกใช้ชีวิตร่อนเร่ ไร้ที่อยู่ในกรุงเทพฯ แสวงหาความหวังที่จะมีงานทำต่อไป'
                },
                {   id: 4,
                    quote: "ล้มทั้งยืน",
                    img: p2,
                    name: "นายฉัตรชัย ศิริอำไพ",
                    sex: 'ชาย',
                    age: 38,
                    exp: "นักธุรกิจ",
                    skill: ['การตลาด'],
                    location: 'ห้วยขวาง',
                    rate: 5,
                    review: [
                        {
                            review: 'มีความตั้งใจในการทำงาน พูดจาฉะฉาน มีคุณลักษณะที่พึงประสงค์',
                            reviewer: 'ริณรดา รักษา',
                            rate: 5
                        }
                    ],
                    Story: ' ธุรกิจที่ประสบความสำเร็จมักเเลกมาด้วยความเสี่ยงเสมอ "ฉัตรชัย" ได้เข้าใจความหมายของการหมดเนื้อ หมดตัวอย่างแท้จริง เมื่อธุรกิจขนาดกลางที่เขาได้สรรสร้างขึ้นมาด้วยมือของตัวเอง ล้มพังไม่เป็นท่า ชีวิตด้วยตัวคนเดียว ไร้คู่ครอง ทำให้เขาตัดสินใจที่จะเข้ามาหางานภายในเมืองหลวง ในใจผิดหวังอย่างสุดซึ้ง ใครล่ะ จะคาดคิด ว่าตัวเองจะสามารถตกลงมาจากจุดที่สูงสุด มาสู่จุดที่ต่ำที่สุดในชีวิตได้ขนาดนี้ การเข้ากรุงฯ ครั้งนี้ "ฉัตรชัย" ต้องการโอกาสในการใช้ชีวิตต่อ มั่นใจจะไม่ให้มีการผิดพลาดซ้ำเป็นครั้งที่สอง'
                },
    
            ]
        }    
    }
    render(){
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
                                        className={'gender-icon ' + (this.selectedGender == 'any' ? 'active' : '')}
                                        onClick={() => this.setSelectedGender('any')}
                                    />
                                    <MaleIcon 
                                        className={'gender-icon ' + (this.selectedGender == 'male' ? 'active' : '')}
                                        onClick={() => this.setSelectedGender('male')}
                                    />
                                    <FemaleIcon
                                        className={'gender-icon ' + (this.selectedGender == 'female' ? 'active' : '')}
                                        onClick={() => this.setSelectedGender('female')}
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
                        <h1>(n) Results</h1>
                        {this.state.data.map(item => {
                            return <>
                                <Media>
                                <Image src={item.img} roundedCircle style={{width: '150px', height: '150px'}}></Image>
                                <Media.Body className="px-3">
                                    <h3><Link to={{pathname: "/profile?id="+item.id}}>{item.quote}</Link></h3>
                                    <div>
                                        <span>{item.name}</span>
                                        {item.skill.map(skillItem => {
                                            return <Badge variant="dark" className="mx-2">{skillItem}</Badge>
                                        })}
                                    </div>
                                    <Rating
                                        start={0}
                                        stop={5}
                                        step={1}
                                        fractions={2}
                                        initialRating={item.rate}
                                        readonly
                                    ></Rating>
                                <p>
                                    {item.Story}
                                </p>
                                </Media.Body>
                            </Media>
                            <hr />
                            </>
                            
                        })
                        }

                        
                    </Col>
                </Row>
            </Container>
        );
    }
}
 
export default Search;