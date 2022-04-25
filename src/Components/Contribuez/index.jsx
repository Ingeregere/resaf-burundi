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
                  flexDirection: 'row-reverse'
                  }
            }>
                <Col md={6}>
                
              <div className='mt-5'>
                <div className='top-line'> {t('contribute_top_title')} </div>
                    <h6>
                    {t('contribute_top_subtitle')}
                    </h6>
                    <ol>
                      <li>{t('contribute_1')}</li>
                      <li>{t('contribute_2')}</li>
                      <li>{t('contribute_1')}</li>
                    </ol>
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