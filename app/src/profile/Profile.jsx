import React, { useState } from 'react';
import { Accordion, Card, Button, Image, Container, Media, Badge, Modal } from 'react-bootstrap';
import Rating from 'react-rating';

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
                        <Accordion.Collapse eventKey="0">
                            <Card.Body>Hello! I'm the body</Card.Body>
                        </Accordion.Collapse>
                    </Accordion.Toggle>
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
                    <Button onClick={() => setShowModal(true)}>Hire</Button>

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