import React from "react";
import './styleTemoignage.css'
import { useTranslation } from "react-i18next";
import {Card, Col,Container,Button } from 'react-bootstrap'
import slideresaf1 from '../assets/images/slideresaf1.jpg'
import slideresaf2 from '../assets/images/slideresaf1.jpg'
import slideresaf3 from '../assets/images/slideresaf1.jpg'
import slideresaf4 from '../assets/images/slideresaf1.jpg'
import Slider from "react-slick/lib/slider";


const Responsive = () =>  {
  const {t} = useTranslation()

    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        }
      ]
    };
    return (
      <Container className={'temoignage'}>
         <h3>  {t('high_title_testymonie')} </h3>
        <Slider {...settings}>
            <Col md={4}>
            <Card className={'m-2'} >
                <Card.Img variant="top" src={slideresaf1} />
                <Card.Body>
                    <Card.Title> {t('testymony_title1')}  </Card.Title>
                    <Card.Text>
                      {t('testymony_description1')}
                    </Card.Text>
                    <Button size={'sm'}>{t('btn_partner')}</Button>
                    
                </Card.Body>
            </Card>

            </Col>
            <Col md={4}>
            <Card className={'m-2'}>
                <Card.Img variant="top" src={slideresaf2} />
                <Card.Body>
                    <Card.Title>{t('testymony_title2')} </Card.Title>
                    <Card.Text>
                    {t('testymony_description2')}
                    </Card.Text>
                    <Button size={'sm'}>{t('btn_partner')}</Button>
                </Card.Body>
            </Card>
            </Col>
            <Col md={4}>
            <Card className={'m-2'}>
                <Card.Img variant="top" src={slideresaf3} />
                <Card.Body>
                    <Card.Title>{t('testymony_title3')}</Card.Title>
                    <Card.Text>
                    {t('testymony_description3')}
                    </Card.Text>
                    <Button size={'sm'}>{t('btn_partner')}</Button>

                </Card.Body>
            </Card>
            </Col>
            <Col md={4}>
            <Card className={'m-2'}>
                <Card.Img variant="top" src={slideresaf4} />
                <Card.Body>
                    <Card.Title>{t('testymony_title4')}</Card.Title>
                    <Card.Text>
                    {t('testymony_description4')}
                    </Card.Text>
                    <Button size={'sm'}>{t('btn_partner')}</Button>

                </Card.Body>
            </Card>
            </Col>
       
          
        </Slider>
      </Container>
    );
}
export default Responsive