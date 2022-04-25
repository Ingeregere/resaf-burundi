import React from 'react'
import {  Col, Container, Row } from 'react-bootstrap'
import { useTranslation } from "react-i18next";
import '../Apropos/aproposStyle.css';
import ImagePresentation from '../assets/images/presentation.jpg'
import HomeCarousel from '../Carousel';


export default function HeroSection({}) {
  const {t} = useTranslation()
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
  
                <div className='top-line'> {t('activity_top_title')}</div>
                    <h6>
                          {t('activity_top_subtitle')}
                    </h6>
                    <p>
                        <ol>
                            <li>
                            {t('activity_1')}  
                            </li>
                            <li>
                            {t('activity_2')}  
                            </li>
                            <li>
                            {t('activity_3')}  
                            </li>
                            <li>
                            {t('activity_4')}  
                            </li>
                            <li>
                                {t('activity_5')}  
                            </li>
                            <li>
                            {t('activity_6')} 

                            </li>
                            <li>
                            {t('activity_7')} 
                            </li>
                            <li>
                            {t('activity_8')} 

                            </li>
                            <li>
                            {t('activity_9')} 

                            </li>
                        </ol>


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