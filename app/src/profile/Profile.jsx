import React, { useState } from 'react';
import { Accordion, Card, Button, Image, Container, Media, Badge, Modal } from 'react-bootstrap';
import Rating from '../common/Rating';

import p1 from "../img/1.jpg";
import p2 from "../img/2.jpg";
import p3 from "../img/3.jpg";
import p4 from "../img/4.jpg";

import Query_string from 'query-string'
import { useLocation, useParams, useRouteMatch } from 'react-router-dom';

function ConfirmationModal({show, handleClose, handleConfirm}) {
    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
            <Modal.Title>ยืนยันการจ้าง</Modal.Title>
            </Modal.Header>
            <Modal.Body>หากท่านต้องการจ้าง กรุณาคลิกตกลง</Modal.Body>
            <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
                ปิด
            </Button>
            <Button variant="primary" onClick={handleConfirm}>
                ตกลง
            </Button>
            </Modal.Footer>
        </Modal>
    )
}


function SuccessModal({show, handleClose}) {
    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
            <Modal.Title>สำเร็จ!</Modal.Title>
            </Modal.Header>
            <Modal.Body>คุณจ้างเรียบร้อยแล้ว</Modal.Body>
            <Modal.Footer>
            <Button variant="primary" onClick={handleClose}>
                ปิด
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
            Story: ' "ดำ" เกษตรกรรับจ้างในไร่มันสัมปะหลัง จังหวัดนครราชสีมา กลับต้องมาทำหน้าที่รับใช้สังคมตอนอายุ 21 ปี ชีวิตพลิกผลันครั้งยิ่งใหญ่โดยไม่รู้เนื้อ รู้ตัว หลังออกจากกองทัพอย่างไร้เงินเก็บ ไร้การรองรับทางความสามารถ ทำให้ "ดำ" จำใจต้องย้ายเข้ามาหางานในกรุงเทพฯ หวังใช้ชีวิต "ร่อนเร่" ได้อย่างมีคุณภาพมากยิ่งขึ้น',
            longStory: "ผมเลี้ยงดูตัวเองตั้งแต่เด็ก พ่อแม่ก็ทิ้ง พอคุณย่าเสีย ผมก็ไม่เหลือใครเลย นอกจากแฟนสาวของผม แต่ในวันเกิดปีที่ 21 ‘ใบแดง’ ก็ได้พรากเธอไปพร้อมกับความสุขทั้งชีวิตของผมด้วย ผมวางแผนว่าจะแต่งงานกับเธอตอนอายุ 24 หลังกลับมาจากการเกณฑ์ทหาร พอเดินทางกลับถึงบ้าน ก็พบว่า คนที่อยู่ในบ้าน ไม่ใช่แฟนผมอีกต่อไป หากแต่เป็นอีกครอบครัวหนึ่งแทน พวกเขาได้ซื้อบ้านของผมไปเมื่อปีก่อน กล่าวว่าเมื่อผู้ขาย เซ็นสัญญาเรียบร้อยแล้ว ก็ได้ย้ายหายจากไป ในตอนนั้น ชีวิตผมยิ่งกว่าโดนใบแดง ผมไม่รู้ว่าจะทำอะไรต่อไป เลยตัดสินใจจะกลับเข้าสู่กองทัพ แต่ระหว่างทางเดิน ผมก็เผอิญเจอเข้ากับแก๊งอันตรพาล พวกมันเข้ามารุมทำร้ายผม สิ่งเดียวที่ผมทำได้ตอนนั้น คือ หยิบเศษแก้วขึ้นมาฟาดลงที่กลางหัวพวกแม่งจนตายไปหนึ่ง เพราะกลัวความผิด สุดท้ายผมก็เลยกลับไปที่กองทัพไม่ได้  พวกมันไปแจ้งความว่า ผมไปฆ่าคนตาย แล้วสิ่งที่ผมทำได้ก็แค่หนีไปให้ไกลเท่าที่จะทำได้ เวลาผ่านไปหลายปีจนหมดอายุความ ผมเลยตัดสินใจว่าอยากที่จะเข้าไปทำงานกับองค์กรใหม่ โอกาสสำหรับผมไม่ต่างอะไรกับการถูกหวยเลย หากได้มาก็พร้อม ก็พยายามทำทุกอย่างที่จะทำให้ชีวิตดีขึ้นให้ได้"
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
            Story: ' เหตุการณ์ต้มยำกุ้ง ปี 40 ได้ผันชีวิตให้ “วิไลลักษณ์” เปลี่ยนไปตลอดกาล จากที่เคยมีสุข ได้ทำงานรับใช้ภายในบ้านหลังใหญ่ มีรายได้ที่มั่นคง มีที่อยู่อาศัยและมิตรภาพที่ดี อยู่สุขสบาย กลับพลิกเปลี่ยนจากหน้ามือไปเป็นหลังมือ เมื่อเจ้านายของเธอต้องตัดใจเลิกจ้างคนรับใช้ที่ซื่อสัตย์ไปด้วยเหตุผลทางเศรษฐกิจ ...จะให้ทำใจยอมรับภายในระยะเวลาอันสั้นได้อย่างไร เมื่อความเป็นจริง มันโหดร้ายเกินกว่าที่หญิงชราคนหนึ่งจะต้องพบเจอ',
            longStory: ""
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
            longStory: '',
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
            Story: 'เมื่อคุณพ่อเลี้ยงเดี่ยวอย่าง "ณเดชน์" ชาวนา จังหวัดพิจิตร เจอวิกฤตความกดดันทางเศรษฐกิจ ข้าวที่เคยขายได้ ถูกกดราคาต่ำ ลูก ๆ ที่ยังเล็กต่างต้องใช้ชีวิตต่อ หัวหน้าครอบครัวอย่างเขา จึงตัดสินใจเข้ามาหาความหวังในเมืองกรุงฯ แม้จะเป็นเมืองหลวง แต่เนื่องจากภาวะทางเศรษฐกิจที่ตกต่ำ ทำให้มีตำแหน่งว่างงานไม่มาก ท้ายที่สุด "ณเดชน์" จึงไร้งานทำ ไร้เงินเก็บ ทั้งยังกระดากอายที่จะกลับไปใช้ชีวิตต่อในบ้านเกิดร่วมกับลูก ๆ จึงเลือกใช้ชีวิตร่อนเร่ ไร้ที่อยู่ในกรุงเทพฯ แสวงหาความหวังที่จะมีงานทำต่อไป',
            longStory: "คิดถึงสุดขั้วหัวใจครับ  ไม่มีวันไหนที่ไม่อยากกลับ รอยยิ้มของลูกทั้งสองคน คงจะงดงามเหมือนในอดีตมั้งครับ ...แต่ผมกลับไปไม่ได้จริงๆ ตอนที่ผมออกมาจากบ้าน ผมออกมาด้วยความหวังและความฝันที่จะทำให้ลูกได้ใช้ชีวิตอย่างสะดวกสบาย ผมมาด้วยแผ่นหลังที่ภาคภูมิใจในความเป็นพ่อ แต่ในความเป็นจริงแล้ว อะไรหลาย ๆ อย่างมันก็ไม่เป็นไปตามที่คิดเสมอไป จากที่เคยหาเงินเลี้ยงชีพมาได้หลายชั่วอายุคน กลับกลายเป็นทำอะไรไม่ได้เลย ซื้ออะไรมาลงทุนที่กรุงเทพฯ ก็พังยับไปซะหมด ตอนนี้ไม่เหลือเงินแม้แต่แดงเดียว วัน ๆ หนึ่ง ผมใช้ชีวิตอยู่ได้เพราะการเลี้ยงดูจากองค์กร ส่วนลูก ๆ ของผม เขาก็คงอยู่กับสถานรับเลี้ยงเด็กแล้ว ผมก็แค่หวังว่าเขาจะได้รับการเลี้ยงดูที่ดี มีความสุขอย่างที่เด็กทั่วไปคนหนึ่งควรจะมี ส่วนผมก็คงต้องยืนขึ้นให้ได้ แล้วถ้าหากมีโอกาสในการทำงานผมก็จะยินดีรับไว้เป็นอย่างยิ่งครับ"
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
            longStory: '',
            Story: ' ธุรกิจที่ประสบความสำเร็จมักเเลกมาด้วยความเสี่ยงเสมอ "ฉัตรชัย" ได้เข้าใจความหมายของการหมดเนื้อ หมดตัวอย่างแท้จริง เมื่อธุรกิจขนาดกลางที่เขาได้สรรสร้างขึ้นมาด้วยมือของตัวเอง ล้มพังไม่เป็นท่า ชีวิตด้วยตัวคนเดียว ไร้คู่ครอง ทำให้เขาตัดสินใจที่จะเข้ามาหางานภายในเมืองหลวง ในใจผิดหวังอย่างสุดซึ้ง ใครล่ะ จะคาดคิด ว่าตัวเองจะสามารถตกลงมาจากจุดที่สูงสุด มาสู่จุดที่ต่ำที่สุดในชีวิตได้ขนาดนี้ การเข้ากรุงฯ ครั้งนี้ "ฉัตรชัย" ต้องการโอกาสในการใช้ชีวิตต่อ มั่นใจจะไม่ให้มีการผิดพลาดซ้ำเป็นครั้งที่สอง'
        },
    ]
    const location = useLocation();
    const match = useRouteMatch();
    const HomeLessId = match.params.id;    
    const dataH = data[HomeLessId]
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
                    <Accordion.Toggle as={Card.Header} eventKey="0" className="sarabun">
                        คลิกเพื่อดูเรื่องราวเพิ่มเติม
                        <Accordion.Collapse eventKey="0">
                            <Card.Body className="sarabun">{dataH.longStory}</Card.Body>
                        </Accordion.Collapse>
                    </Accordion.Toggle>
                </Card>
            </Accordion>
            <Container fluid>
                <Media>
                    <Image src={dataH.img} roundedCircle style={{padding: '2em', width: '400px', height: '400px'}}></Image>
                    <Media.Body className="mt-5">
                        <h3>{dataH.name}</h3>
                        <p className="sarabun">
                        เพศ : {dataH.sex}<br></br>
                        อายุ : {dataH.age} ปี<br></br>
                        ประสบการณ์ทำงาน : {dataH.exp} <br></br>
                        สถานสงเคราะห์ : {dataH.location} <br></br>
                        </p>
                        <h4>ทักษะ</h4>
                        <div>
                            {dataH.skill.map(item =>{
                                return <Badge className="mx-2 sarabun" variant="dark">{item}</Badge>
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
                    <Button onClick={() => setShowModal(true)}>จ้าง</Button>

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
                    <p className="sarabun pl-4">{item.review}</p>
                </Card>
                })}
            </Container>
        </div>
    )
}
export default Profile;