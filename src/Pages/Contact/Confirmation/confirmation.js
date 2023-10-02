import React from "react";
import './confirmation.css'

import {
  Col,
  Row,
  Container,
} from "react-bootstrap";


const Confirmation = () => {
  return (
    <Row className=''>
      <Col>
        <Container className=''>
          <h1 className=''>Thank you</h1>
          <p className=''>We have received your message and will be in touch soon!</p>
        </Container>
      </Col>
    </Row>
  );
};

export default Confirmation;