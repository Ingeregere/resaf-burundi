import React from 'react'
import {  Col, Container, Row } from 'react-bootstrap'
import '../Apropos/aproposStyle.css';
import ImagePresentation from '../assets/images/presentation.jpg'
import HomeCarousel from '../Carousel';


export default function HeroSection({}) {
  return (
    <div>
        <HomeCarousel />
        <div className='apropos_wrapp'>
        <Container >
            <Row style={
                  {
                  display: 'flex',
                  flexDirection: 'row'
                  }
            }>
                <Col md={6}>
                
              <div className='mt-5'>
                <div className='top-line'>text zvvckjvjck</div>
                    <h1 >
                      hello
                    </h1>
                    <p>
                      descrption
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
    </div>
  )
}