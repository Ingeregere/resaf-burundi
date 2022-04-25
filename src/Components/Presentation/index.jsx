import React from 'react'
import {  Col, Container, Row } from 'react-bootstrap'
import { useTranslation } from "react-i18next";
import '../Apropos/aproposStyle.css';
import ImagePresentation from '../assets/images/presentation.jpg'


export default function HeroSection({}) {
  const {t} = useTranslation()
  return (
    <div className='apropos_wrapp' >
        <Container >
            <Row style={
                  {
                  display: 'flex',
                  flexDirection: 'row'
                  }
            }>
                <Col md={6}>
                
              <div className='mt-5'>
                <div className='top-line'>Presentation</div>
                    <h1 >
                    RESAF Burundi
                    </h1>
                    <p>
                     {t('apropos_mission_paragraph')}
                    </p>
              </div>
                </Col>
                <Col md={6}>
                      <img
                        className="d-block w-100"
                        src={ImagePresentation}
                        alt={'apropos'}
                      />
                
                </Col>
            </Row>
        </Container>
    </div>
  )
}