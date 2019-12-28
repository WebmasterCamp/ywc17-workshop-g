import React from 'react';
import { Accordion, Card, Row, Col, Image, Container, Media, Badge } from 'react-bootstrap';

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
                    <Media.Body>
                        <h3>Person Name</h3>
                        <p>
                            more information <br></br>
                            more information <br></br>
                            more information <br></br>
                            more information <br></br>
                        </p>
                        <h4>Skills</h4>
                        <div>
                            <Badge className="mx-2" variant="dark">Skill1</Badge>
                            <Badge className="mx-2" variant="dark">Skill1</Badge>
                            <Badge className="mx-2" variant="dark">Skill1</Badge>
                            <Badge className="mx-2" variant="dark">Skill1</Badge>
                            <Badge className="mx-2" variant="dark">Skill1</Badge>
                            <Badge className="mx-2" variant="dark">Skill1</Badge>
                        </div>
                    </Media.Body>
                </Media>
            </Container>
        </div>
    )
}
export default Profile;