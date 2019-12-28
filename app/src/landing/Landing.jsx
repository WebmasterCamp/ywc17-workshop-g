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
                    {/* <a href="https://imgur.com/VXQlpe5"><img src="https://i.imgur.com/VXQlpe5.jpg" title="source: imgur.com" /></a> */}
                        <Image src="https://i.imgur.com/VXQlpe5.jpg" fluid/>
                    </Col>
                    <Col  sm={12} lg={4} md={4} className="mb-5">
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
                       <Row style={{marginTop: '20px'}} className="d-flex">
                            <Col sm={{span: 4}} md={{span: 4}} xs={{span: 4}} md={{span: 4}} lg={{span: 4}} md={{span: 4}} style={{textAlign: 'center'}}>
                                <Link to="/hire">
                                    <Button style={{
                                        backgroundColor: '#313A3A', 
                                        border: '3px solid #313A3A', 
                                        borderRadius: '16px',
                                        color: '#FFFFFF'}} size='lg'>จ้างงาน</Button>
                                </Link>
                            </Col>
                            <Col style={{alignSelf: 'center'}}>
                                <span>
                                    หรือเลื่อนลงเพื่ออ่าน Story
                                </span>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
            <Container id="story" fluid={true} style={{backgroundColor: '#F4D25A'}}>
                <Container style={{paddingTop: '10em', minHeight: '100vh'}}>
                        <h2>
                            Homian (โฮม-เมี่ยน) หมายถึง บุคคลไร้บ้านที่ได้รับการขึ้นทะเบียน รับรองจากองค์กรแล้ว จึงหมดสภาพความไร้บ้าน
                        </h2>
                        <Row className="d-flex justify-content-center pb-5">
                        {/* <a href="https://imgur.com/1UW2UR4"><img src="https://i.imgur.com/1UW2UR4.jpg" title="source: imgur.com" /></a> */}
                            <Image src="https://i.imgur.com/1UW2UR4.jpg" width="20%" style={{objectFit: 'contain', marginRight: '1em'}}></Image>
                            {/* <a href="https://imgur.com/Dq64tBv"><img src="https://i.imgur.com/Dq64tBv.jpg" title="source: imgur.com" /></a> */}
                            <Image src="https://i.imgur.com/Dq64tBv.jpg" width="42%" style={{objectFit: 'contain'}}></Image>
                        </Row>

                        <Row className="description-popup">
                            Homesi-res (โฮม-สิ-เลต) มุ่งแสวงหาโอกาสในการทำงานแขนงต่าง ๆ ให้กับ Homian พร้อมช่วยเสริมสร้างทักษะการเรียนรู้ก่อนกลับไปดำเนินชีวิตประจำวันร่วมกับผู้อื่นและก่อนการทำงานจริง เป็นศูนย์กลางการเผยแพร่ความคิดเห็นและประสบการณ์ชีวิตที่น่าสนใจของ Homian แต่ละคน
                        </Row>
                        <Row style={{marginTop: '70px'}}>
                        <Col sm={12} xs md={7} lg={7}>
                            <p style={{backgroundColor: 'white', padding: '12px', lineHeight: '1.7'}}>
                                <h3 style={{fontFamily: 'Sarabun', marginBottom: '18px', fontWeight: 'bold'}}>“ในตอนแรก อะไรๆก็ดีครับ 
                                ธุรกิจดี ทุกอย่างดีหมดครับ จนทุกอย่างพังลงอย่างไม่คาดคิด</h3>
 

                               <h4 style={{fontFamily: 'Sarabun', lineHeight: '1.7'}}> ผมมีลูกชายกับภรรยาอยู่เคียงบ่าเคียงไหล่มาด้วยกัน
                                ตั้งแต่เริ่มธุรกิจแล้วก็ เฟื่องฟูขึ้นมาเรื่อยๆ
                                ผมทำงานตั้งแต่เช้าจรดเย็น ไม่เว้นแม้แต่วันหยุด
                                จนวันหนึ่งภรรยานอกใจ แล้วตัดสินใจไปอยู่กับสามีใหม่ 
                                ทรัพย์สินทั้งหมดก็ถูกนำไปแบ่งตามกฎหมาย แล้วสุดท้ายธุรกิจก็พังลง เป็นผลจากเรื่องส่วนตัวที่พังทลาย
                                ผมพยายามง้อเขาหลายรอบครับ แต่ไม่มีอะไรดีขึ้น 
                                บ้านที่มีอยู่ก็ถูกขาย ส่วนตัวผมไม่เหลืออะไร นอกจากอดีตที่เคยมีครอบครัวที่อบอุ่นและธุรกิจที่เคยรุ่งเรือง 
                                ผมเลยตัดสินใจเข้ามาอยู่ในกรุงเทพ เพื่อตัดสินใจจะใช้เงินเพื่อเริ่มต้นธุรกิจใหม่
                                แล้วทุกอย่างก็พังอีกรอบในปี 40 ผมก็เหลือแค่ หนังสือพิมพ์สองฉบับกับสามสิบอวัยวะที่มีอยู่เท่านั้น 
                                หางานก็ไม่ได้ จิตใจก็พังทลาย
                                ยังไงก็ตามตอนนี้ก็ทำใจได้แล้วจะเริ่มใหม่ทั้งหมด แต่ว่าด้วยตอนนี้เราเป็นคนไร้บ้าน โอกาสลดน้อยลงไปด้วย” </h4>



                            </p>
                        </Col>
                        <Col sm={12} xs md={3} lg={3}>
                            <iframe src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2F111471577031267%2Fvideos%2F521733168440225%2F&show_text=0&width=267" width="267" height="476" style={{border: 'none', overflow: 'hidden'}} scrolling="no" frameborder="0" allowTransparency="true" allowFullScreen="true"></iframe>
                        </Col>
                        </Row>
                </Container>
            </Container>
            {/* <a href="https://imgur.com/BAVojXX"><img src="https://i.imgur.com/BAVojXX.jpg" title="source: imgur.com" /></a> */}
            <Container fluid style={{
                minHeight: '100vh',
                background: "url(https://i.imgur.com/BAVojXX.jpg)",
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                <div style={{textAlign: 'center'}}>
                    <h1>
                        ร่วมช่วยเหลือคนไร้บ้าน
                    </h1>
                    <br></br>
                    <h1 className="mb-4">
                        สนับสนุนเลยตอนนี้
                    </h1>

                    <Link to="/hire">
                        <Button style={{fontFamily: 'Sarabun', padding: '1em', backgroundColor: '#313A3A'}}>
                            จ้างงาน
                        </Button>
                    </Link>
                </div>
            </Container>
            {/* <Container fluid={true}>
                <Row>
                    <Col sm lg md>
                        Footer
                    </Col>
                </Row>
            </Container> */}
        </div>
    );
}
 
export default LandingPage;

