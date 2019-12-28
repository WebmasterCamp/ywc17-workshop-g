import React from 'react';
import { Container, Row, Col, Button, Image } from 'react-bootstrap'
import './Landing.scss';
import { Link } from 'react-router-dom';

const LandingPage = () => {
    return (
        <div className="mainElement">
            <Container  fluid={true}>
                {/* Header */}
                <Row style={{padding: '0'}}>
                    <Col sm={12} lg={8} md={8} style={{paddingLeft: '0', paddingRight: '0'}}>
                        <Image src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Flag_of_None.svg/1280px-Flag_of_None.svg.png" fluid/>
                    </Col>
                    <Col  sm={12} lg={4} md={4}>
                        <div id="mainHeaderTitle" style={{marginTop: '100px'}}>
                            <h2 id="mainHeadTitle" className="headLine1">
                                <span>ไร้บ้าน</span>
                                <span>แต่ไม่</span>
                                <span>ไร้โอกาส</span>
                            </h2>
                            <h4 className="headLine2">ร่วมให้โอกาส</h4>
                             <span style={{width: '100px' ,lineHeight: '0.5'}}>มองหาโอกาสให้แก่คนไร้บ้าน
                                ที่ต้องการโอกาสในการทำงาน ในแขนงต่าง ๆ พร้อมทั้งเพิ่มการเรียนรู้ และสกิลที่สำคัญ
                                สำหรับการดำเนินชีวิตในโลกแห่งการทำงาน พร้อมทั้งเป็นศูนย์กลางพื้นที่ให้แสดงความคิดเห็น
                                และเผยแพร่ประสบการณ์ชีวิตของแต่ละคน</span>
                        </div>
                       <Row style={{marginTop: '20px'}}>
                            <Col sm={{span: 4, offset: 2}} md={{span: 4}} xs={{span: 4, offset: 2}} md={{span: 4}} lg={{span: 4, offset: 2}} md={{span: 4, offset: 2}} style={{textAlign: 'center'}}>
                                <Button style={{
                                    backgroundColor: '#FFFFFF', 
                                    border: '3px solid #313A3A', 
                                    borderRadius: '16px',
                                    color: '#313A3A'}} size='lg' >อ่าน Story</Button>
                            </Col>
                            
                            <Col sm={{span: 4}} md={{span: 4}} xs={{span: 4}} md={{span: 4}} lg={{span: 4}} md={{span: 4}} style={{textAlign: 'center'}}>
                                <Link to="/hire">
                                    <Button style={{
                                        backgroundColor: '#313A3A', 
                                        border: '3px solid #313A3A', 
                                        borderRadius: '16px',
                                        color: '#FFFFFF'}} size='lg'>จ้างงาน</Button>
                                </Link>
                            </Col>
>
                        </Row>
                    </Col>
                </Row>
            </Container>

            <Container fluid={true}>
                {/* VDO and Story */}
                <Row style={{paddin: '0'}}>
                    <Col sm xs lg={6} md={6}>เรื่องราวของคนไร้บ้าน</Col>
                    <Col sm={12} xs lg={6} md={6} style={{paddingLeft: '0', paddingRight: '0'}}>
                    <iframe 
                        width="100%" 
                        height="315px" 
                        src="https://www.youtube.com/embed/ZdZOsW2lT-A" 
                        frameborder="0" 
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                        allowfullscreen/>
                    </Col>
                    <Col lg={{span: 5, offset: 1}} md={{span: 5, offset: 1}} sm>
                        <b>Text 3</b>
                        <p style={{textAlign: 'center'}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                    </Col>
                </Row>
                {/* Mechindise */}
                <Row>
                    <Col  sm md={{span: 8, offset: 2}} lg={{span: 8, offset: 2}}>
                        <b>Text 3</b>
                        <p style={{textAlign: 'center'}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.></p>
                    </Col>
                    <Col>
                        <Image src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Flag_of_None.svg/1280px-Flag_of_None.svg.png" fluid />
                    </Col>
                </Row>
                <Row>
                    <Col  sm={{span: 1, offset: 3}} lg={{span: 3, offset: 3}} md={{span: 9, offset: 3}}>
                        <Button style={{marginRight: '12px'}} variant='info'>อ่าน Story</Button>
                        <Button variant="success">จ้างงาน</Button>
                    </Col>
                </Row>
            </Container>
            <Container fluid={true}>
                <Row>
                    <Col sm lg md>
                        Footer
                    </Col>
                </Row>
            </Container>
        </div>
    );
}
 
export default LandingPage;

