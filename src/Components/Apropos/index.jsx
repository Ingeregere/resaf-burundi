import React from 'react'
import {  Col, Container, Row } from 'react-bootstrap'
import './aproposStyle.css';
import { useTranslation } from "react-i18next";
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
                  flexDirection: 'row-reverse'
                  }
            }>
                <Col md={6}>
                
              <div className='mt-5'>
                <div className='top-line'>{t('apropos_mission_top_title')}</div>
                    <h3 >
                      {t('apropos_mission_top_subtitle')}
                    </h3>
                    <p>
                     {t('apropos_mission_paragraph')}
                    </p>
                    <h3 >
                      {t('apropos_vision_top_subtitle')}
                    </h3>
                    <p>
                    {t('apropos_vision_paragraph')}
                    </p>
                    <h3 >
                      {t('apropos_value_top_subtitle')}
                    </h3>
                    <p>
                    {t('apropos_value_paragraph')}
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