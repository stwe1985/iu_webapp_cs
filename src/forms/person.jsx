import "../../scss/style.scss";
import { useState } from "react";
import { Form, InputGroup } from "react-bootstrap";


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
                <Form noValidate validated={validated} onChange={handleSubmit}>
                    <InputGroup className="mb-3">
                        <InputGroup.Text id="basic-addon1">Vorname</InputGroup.Text>
                        <Form.Control required placeholder="Vorname" aria-label="Vorname" aria-describedby="basic-addon1"/>
                    </InputGroup>

                </Form>

        );

}