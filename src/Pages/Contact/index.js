import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import './contact.css'

import {
    Form,
    Button,
    Col,
    Row,
    Container,
    Alert
} from "react-bootstrap";
import { axiosReq } from "../../api/axiosDefaults";


const ContactForm = () => {

    const [contactData, setContactData] = useState({
        name: "",
        email: "",
        company: "",
        message: "",
    });

    const { name,  email, company, message } = contactData;
    const [errors, setErrors] = useState({});
    const history = useHistory();

    const handleChange = (event) => {
        setContactData({
            ...contactData,
            [event.target.name]: event.target.value,
        });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log(contactData)
        try {
            await axiosReq.post("/contact/", contactData);
            history.push("/confirmation");
        } catch (err) {
            // console.log('ERROR in submit: ', err)
            setErrors(err.response?.data);
        }
    };

    return (
        <Row classame=''>

            <Col>
                <Container className=''>
                    <h1 className=''>Contact Us</h1>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group>
                            <Form.Label>Name</Form.Label>
                            <Form.Control
                                type="text"
                                name="name"
                                value={name}
                                onChange={handleChange}
                            />
                        </Form.Group>
                        {errors.name?.map((message, idx) => (
                            <Alert variant="warning" key={idx}>
                                {message}
                            </Alert>
                        ))}

                        <Form.Group>
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                                type="text"
                                name="email"
                                value={email}
                                onChange={handleChange}
                            />
                        </Form.Group>
                        {errors.email?.map((message, idx) => (
                            <Alert variant="warning" key={idx}>
                                {message}
                            </Alert>
                        ))}

                        <Form.Group>
                            <Form.Label>Company</Form.Label>
                            <Form.Control
                                type="text"
                                name="company"
                                value={company}
                                onChange={handleChange}
                            />
                        </Form.Group>

                        <Form.Group>
                            <Form.Label>Message</Form.Label>
                            <Form.Control
                                as="textarea"
                                rows={4}
                                name="message"
                                value={message}
                                onChange={handleChange}
                            />
                        </Form.Group>
                        {errors.message?.map((message, idx) => (
                            <Alert variant="warning" key={idx}>
                                {message}
                            </Alert>
                        ))}

                        <Button
                            className=''
                            type="submit"
                        >
                            Submit
                        </Button>
                        {errors.non_field_errors?.map((message, idx) => (
                            <Alert key={idx} variant="warning" className="mt-3">
                                {message}
                            </Alert>
                        ))}
                    </Form>
                </Container>
            </Col>
        </Row>
    );
};

export default ContactForm;