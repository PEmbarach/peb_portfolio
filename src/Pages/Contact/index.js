import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './contact.css'

import {
    Form,
    Button,
    Col,
    Row,
    Container,
} from "react-bootstrap";
import { axiosReq } from "../../api/axiosDefaults";


const ContactForm = () => {

    const [contactData, setContactData] = useState({
        name: "",
        email: "",
        company: "",
        message: "",
    });

    const { name, email, company, message } = contactData;
    const [submitted, setSubmitted] = useState(false);
    const navigate = useNavigate();

    const handleChange = (event) => {
        setContactData({
            ...contactData,
            [event.target.name]: event.target.value,
        });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            await axiosReq.post("/message/", contactData);
            setSubmitted(true);
            navigate('/confirmation');
        } catch (err) {
            console.log('ERROR in submit: ', err)
        }
    };

    return (
        <Row>
            <Col>
                <Container className='container'>
                    <h1>Contact Me</h1>
                    {submitted ? (
                        <p>Your message has been sent</p>
                    ) : (
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="item">
                            <Form.Label className="label">Name:</Form.Label>
                            <Form.Control
                                required={true}
                                type="text"
                                name="name"
                                value={name}
                                onChange={handleChange}
                                className="area"
                            />
                        </Form.Group>
                        <Form.Group className="item">
                            <Form.Label className="label">Email: </Form.Label>
                            <Form.Control
                                required={true}
                                type="text"
                                name="email"
                                value={email}
                                onChange={handleChange}
                                className="area"
                            />
                        </Form.Group>
                        <Form.Group className="item">
                            <Form.Label className="label" >Company:</Form.Label>
                            <Form.Control
                                required={true}
                                type="text"
                                name="company"
                                value={company}
                                onChange={handleChange}
                                className="area"
                            />
                        </Form.Group>

                        <Form.Group className="item">
                            <Form.Label className="label" >Message:</Form.Label>
                            <Form.Control
                                required={true}
                                as="textarea"
                                rows={4}
                                name="message"
                                value={message}
                                onChange={handleChange}
                                className="area"
                            />
                        </Form.Group>
                        <Button
                            className='button'
                            type="submit"
                        >
                            Submit
                        </Button>
                    </Form>
                    )}
                </Container>
            </Col>
        </Row>
    );
};

export default ContactForm;
