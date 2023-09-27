import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
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
    const history = useNavigate();

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
        <Row className=''>
            <Col>
                <Container className='container'>
                    <h1>Contact Me</h1>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="item">
                            <Form.Label className="label">Name:</Form.Label>
                            <Form.Control
                                type="text"
                                name="name"
                                value={name}
                                onChange={handleChange}
                                className="area"
                            />
                        </Form.Group>
                        {errors.name?.map((message, idx) => (
                            <Alert variant="warning" key={idx}>
                                {message}
                            </Alert>
                        ))}

                        <Form.Group className="item">
                            <Form.Label className="label">Email: </Form.Label>
                            <Form.Control
                                type="text"
                                name="email"
                                value={email}
                                onChange={handleChange}
                                className="area"

                            />
                        </Form.Group>
                        {errors.email?.map((message, idx) => (
                            <Alert variant="warning" key={idx}>
                                {message}
                            </Alert>
                        ))}

                        <Form.Group className="item">
                            <Form.Label className="label" >Company:</Form.Label>
                            <Form.Control
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
                                as="textarea"
                                rows={4}
                                name="message"
                                value={message}
                                onChange={handleChange}
                                className="area"
                            />
                        </Form.Group>
                        {errors.message?.map((message, idx) => (
                            <Alert variant="warning" key={idx}>
                                {message}
                            </Alert>
                        ))}

                        <Button
                            className='button'
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