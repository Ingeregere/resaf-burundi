import React from 'react';
import {Container,Row,Col} from 'react-bootstrap'
import ImagePresentation from '../assets/images/presentation.jpg'

function Presentation(props) {
    return (
        <Container>
            <h3>Notre Presentation de resaf Burundi</h3>
            <Row>
                <Col>
                <img src={ImagePresentation} alt={'Presentation'} />
                </Col>
                <Col>description du projet</Col>
            </Row>
        </Container>
    );
}

export default Presentation;