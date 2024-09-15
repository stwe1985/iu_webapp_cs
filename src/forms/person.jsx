import "../../scss/style.scss";
import { useState } from "react";
import { Form, InputGroup, Row, Col, FloatingLabel, Container, Button } from "react-bootstrap";



export default function Person() {



        const [validated, setValidated] = useState(false);

        const handleSubmit = (event = new Event())=> {
            const form = event.currentTarget;
            if(form.checkValidity === false) {
                event.preventDefault();
                event.stopPropagation();
            } else {
            setValidated(true);
            event.preventDefault();
            }
        }

        return (
            <section className="m-0">
                <Form noValidate validated={validated} onSubmit={handleSubmit}>
                    <Container>
                        <Row className="gx-1">
                            <Col md className="gy-1">   

                                <FloatingLabel label="Vorname">
                                    <Form.Control required size="lg" aria-label="Vorname" aria-describedby="s_name" placeholder="Vorname"/>
                                </FloatingLabel>
                            </Col>
                            <Col md className="gy-1">
                                <FloatingLabel label="Nachname">                            
                                    <Form.Control required size="lg" aria-label="Nachname" aria-describedby="l_name" placeholder="Nachname"/>
                                </FloatingLabel>
                            </Col>

                        </Row>
                        <Row className="gx-1">
                            <Col md="8" className="gy-1">
                                <FloatingLabel label="Straße">
                                    <Form.Control required size="lg" aria-label="Straße" aria-describedby="straße" placeholder="Straße"/>
                                </FloatingLabel>
                            </Col>
                            <Col xs="6" md="2" className="gy-1">
                                <FloatingLabel label="H-Nr.">
                                    <Form.Control required size="lg" aria-label="Nr." aria-describedby="hnr" placeholder="H-Nr."/>
                                </FloatingLabel>
                            </Col>
                            <Col xs="6" md="2" className="gy-1">
                                <FloatingLabel label="PLZ">
                                    <Form.Control required size="lg" aria-label="PLZ" aria-describedby="plz" placeholder="PLZ"/>
                                </FloatingLabel>
                            </Col>
                        </Row>
                        <Row className="gx-1">
                            <Col xs="12" md="12" lg="6" className="gy-1">
                                <InputGroup>
                                    <InputGroup.Text><i style={{fontSize: 28}} className="bi bi-envelope-at m-0 p-0"></i></InputGroup.Text>
                                    <Form.Control required type="email" size="lg" aria-label="email" aria-describedby="email-label"/>
                                </InputGroup>
                            </Col>
                            <Col xs="12" md="12" lg="6" className="gy-1">
                                <InputGroup>
                                    <InputGroup.Text><i style={{fontSize: 28}} className="bi-telephone m-0 p-0"></i></InputGroup.Text>
                                    <Form.Control type="tel" pattern="[0-9]{9,11}" size="lg" aria-label="phone" aria-describedby="phone"></Form.Control>
                                </InputGroup>
                            
                            </Col>
                            <Col className="gy-1 d-flex justify-content-center">
                                <Button type="submit" className="">Absenden</Button>
                            </Col>
                        </Row>
                    </Container>
                </Form>
            </section>

        );

}