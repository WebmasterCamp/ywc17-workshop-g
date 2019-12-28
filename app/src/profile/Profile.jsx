import React from 'react';
import { Accordion, Card, Button, Image, Container, Media, Badge } from 'react-bootstrap';
import Rating from 'react-rating';

function Profile() {
    return (
        <div>
            <Accordion>
                <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="0">
                        Click me!
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="0">
                        <Card.Body>Hello! I'm the body</Card.Body>
                    </Accordion.Collapse>
                </Card>
            </Accordion>
            <Container fluid>
                <Media>
                    <Image src="https://via.placeholder.com/300" roundedCircle style={{padding: '2em'}}></Image>
                    <Media.Body className="mt-5">
                        <h3>นายดำ ศักดิ์ชัย</h3>
                        <p>
                        เพศ : ชาย<br></br>
                        อายุ : 40 ปี<br></br>
                        ประสบการณ์ทำงาน : ทหารเกณฑ์ <br></br>
                        สถานสงเคราะห์ : บางกอกน้อย <br></br>
                        </p>
                        <h4>ทักษะ</h4>
                        <div>
                            <Badge className="mx-2" variant="dark">ตัดไม้</Badge>
                            <Badge className="mx-2" variant="dark">เลื่อยไม้</Badge>
                            <Badge className="mx-2" variant="dark">ดายหญ้า</Badge>
                            <Badge className="mx-2" variant="dark">ความรู้ด้านพืชพรรณ</Badge>
                            {/* <Badge className="mx-2" variant="dark">Skill1</Badge>
                            <Badge className="mx-2" variant="dark">Skill1</Badge> */}
                        </div>
                        <h4>Rating</h4>
                        <Rating
                            readonly
                            initialRating={5}
                            fractions={2}
                            start={0}
                            step={1}
                            stop={5}
                        ></Rating>

                    <br />
                    <Button>Hire</Button>

                    </Media.Body>
                </Media>


                <hr></hr>

                <h3>Comments</h3>

                <Card>
                    <Card.Body>
                        <Rating
                            readonly
                            initialRating={5}
                            fractions={2}
                            start={0}
                            step={1}
                            stop={5}
                        ></Rating>
                    </Card.Body>
                    <Card.Footer><em>ชื่อผู้ให้คะแนน : ดารณี แสงสี</em></Card.Footer>
                </Card>
            </Container>
        </div>
    )
}
export default Profile;