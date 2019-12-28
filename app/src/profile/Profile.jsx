import React, { useState } from 'react';
import { Accordion, Card, Button, Image, Container, Media, Badge, Modal } from 'react-bootstrap';
import Rating from 'react-rating';

import p1 from "../img/1.jpg";
import p2 from "../img/2.jpg";
import p3 from "../img/3.jpg";
import p4 from "../img/4.jpg";

import Query_string from 'query-string'
import { useLocation, useParams } from 'react-router-dom';

function ConfirmationModal({show, handleClose, handleConfirm}) {
    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
            </Modal.Header>
            <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
            <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
                Close
            </Button>
            <Button variant="primary" onClick={handleConfirm}>
                Confirm
            </Button>
            </Modal.Footer>
        </Modal>
    )
}


function SuccessModal({show, handleClose}) {
    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
            <Modal.Title>Success!</Modal.Title>
            </Modal.Header>
            <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
            <Modal.Footer>
            <Button variant="primary" onClick={handleClose}>
                OK
            </Button>
            </Modal.Footer>
        </Modal>
    )
}


function Profile() {
    const data = [
        {   id: '0',
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
        {   id: '1',
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
        {   id: '2',
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
        {   id: '3',
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
        {   id: '4',
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
    const location = useLocation();
    const HomeLessId = location.search.split('=')[1]
    const homelessdata = data.filter(item => item.id == HomeLessId)
    const [dataH, h] = useState(homelessdata[0]);
    const [showModal, setShowModal] = useState(false);
    const [showSuccessModal, setShowSuccessModal] = useState(false);



    function handleConfirm() {
        setShowModal(false);
        setShowSuccessModal(true);
    }



    return (
        <div>
            <ConfirmationModal show={showModal} handleClose={() => setShowModal(false)} handleConfirm={handleConfirm}/>
            <SuccessModal show={showSuccessModal} handleClose={() => setShowSuccessModal(false)} />
            <Accordion>
                <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="0">
                        Click me!
                        <Accordion.Collapse eventKey="0">
                            <Card.Body>{dataH.Story}</Card.Body>
                        </Accordion.Collapse>
                    </Accordion.Toggle>
                </Card>
            </Accordion>
            <Container fluid>
                <Media>
                    <Image src={dataH.img} roundedCircle style={{padding: '2em', width: '400px', height: '400px'}}></Image>
                    <Media.Body className="mt-5">
                        <h3>{dataH.name}</h3>
                        <p>
                        เพศ : {dataH.sex}<br></br>
                        อายุ : {dataH.age} ปี<br></br>
                        ประสบการณ์ทำงาน : {dataH.exp} <br></br>
                        สถานสงเคราะห์ : {dataH.location} <br></br>
                        </p>
                        <h4>ทักษะ</h4>
                        <div>
                            {dataH.skill.map(item =>{
                                return <Badge className="mx-2" variant="dark">{item}</Badge>
                            })}
                        </div>
                        <h4>Rating</h4>
                        <Rating
                            readonly
                            initialRating={dataH.rate}
                            fractions={2}
                            start={0}
                            step={1}
                            stop={5}
                        ></Rating>

                    <br />
                    <Button onClick={() => setShowModal(true)}>Hire</Button>

                    </Media.Body>
                </Media>


                <hr></hr>

                <h3>Comments</h3>
                {dataH.review.map(item => {
                    return <Card>
                        <Card.Body>
                            <Rating
                                readonly
                                initialRating={item.rate}
                                fractions={2}
                                start={0}
                                step={1}
                                stop={5}
                            ></Rating>
                        </Card.Body>
                    <Card.Footer><em>ชื่อผู้ให้คะแนน : {item.reviewer}</em></Card.Footer>
                    <p>{item.review}</p>
                </Card>
                })}
            </Container>
        </div>
    )
}
export default Profile;