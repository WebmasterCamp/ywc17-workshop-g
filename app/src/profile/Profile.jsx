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
                        <h4>Rating</h4>
                        <Rating
                            readonly
                            initialRating={2.5}
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
                            initialRating={2.5}
                            fractions={2}
                            start={0}
                            step={1}
                            stop={5}
                        ></Rating>
                        <br></br>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque voluptatibus obcaecati aut, qui aliquam magni rerum? Rerum, accusamus asperiores aut facilis rem quas illo. Reprehenderit assumenda cupiditate dolorem omnis molestiae!
                    </Card.Body>
                    <Card.Footer><em>author</em></Card.Footer>
                </Card>
            </Container>
        </div>
    )
}
export default Profile;