import React from 'react';
import { Container, Row, Col, Button, Image } from 'react-bootstrap'
import './Landing.css';

const LandingPage = () => {
    return (
        <div class="mainElement">
            <Container  fluid={true}>
                {/* Header */}
                <Row style={{padding: '0'}}>
                    <Col sm={12} lg={8} md={8} style={{paddingLeft: '0', paddingRight: '0'}}>
                        <Image src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Flag_of_None.svg/1280px-Flag_of_None.svg.png" fluid/>
                    </Col>
                    <Col  sm={12} lg={4} md={4}>
                        <div id="mainHeaderTitle" style={{marginTop: '100px'}}>
                            <h2 id="mainHeadTitle" class="headLine1">คนไร้บ้านต้องการ ทำงาน</h2>
                            <h4 class="headLine2">ร่วมให้โอกาส</h4>
                            <span style={{lineHeight: '0.5'}}>ร่วมกันตระหนักถึงปัญหาของคน ไร้บ้านในประเทศไทย และช่วยเหลือ</span>
                        </div>
                        <div className="row">
                            <div className="col-lg-6 col-md-6 col-sm-6 " style={{textAlign: 'center'}}>
                                <Button style={{backgroundColor: '#FFFFFF', border: '3px solid #313A3A', borderRadius: '16px'}} size='lg' >อ่าน Story</Button>
                            </div>
                            
                            <div className="col-md- col-sm-56col-lg-55"style={{textAlign: 'center'}}>
                                <Button size='lg'>จ้างงาน</Button>
                            </div>
                        </div>
                    </Col>
                </Row>
                {/* <Row >
                    <Col  sm={{span: 1, offset: 4}} lg={{span: 6, offset: 4}} md={{span: 6, offset: 4}}>

                    </Col>
                </Row> */}
            </Container>
            <Container fluid={true}>
                {/* VDO and Story */}
                <Row>
                    <Col lg={{span: 3, offset: 2}} md={{span: 3, offset: 2}} sm>
                    <iframe 
                        width="100%" 
                        height="315px" 
                        src="https://www.youtube.com/embed/ZdZOsW2lT-A" 
                        frameborder="0" 
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                        allowfullscreen/>
                    </Col>
                    <Col lg={{span: 3, offset: 1}} md={{span: 3, offset: 1}} sm>
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

