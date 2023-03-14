import React from 'react';
import './styleFooter.css';
import { Row, Col } from 'react-bootstrap';
import WhatsappChat from './whatsapp';
import { BsHouseDoorFill } from 'react-icons/bs';
import { MdOutlineMailOutline } from 'react-icons/md';
import { ImPhone } from 'react-icons/im';
import { AiOutlineMail } from 'react-icons/ai';
import logoFooter from '../assets/images/logofooter.png';

const Footer = () => {
  return (
    <center>
      <footer className="paddingfooter bgfooter">
        <Row className={'mx-3'}>
          <Col md={6} sm={12} xs={12}>
            <Row>
              <Col>
                <div>
                  <img src={logoFooter} alt={'logoimage'} />
                </div>
              </Col>
              <Col>
                <p className={'text-white descriptionebcompany'}>
                  © 2022{' '}
                  <span className={'simat-burundi'}>
                    RESAF BURUNDI, Renewable Energy and Sustainable Agro Farming
                    Company SPRL Footer.{' '}
                  </span>
                  Tous les droits sont réservés.
                  <span className={'text-center'}>
                    {' '}
                    le site web est développé par
                  </span>{' '}
                  <a
                    href={'https://eb-company.com'}
                    className={'link_ebcompany'}
                    target={'_blank'}
                  >
                    <span className={'eb-companye'}> EB-COMPANY </span>
                  </a>
                </p>
              </Col>
            </Row>
          </Col>
          <Col md={3} sm={12} xs={12}>
            <h5 className={' text-uppercase titlefooter'}>Adresse </h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2 text-white">
                {' '}
                <BsHouseDoorFill /> Mairie de Bujumbura
                <br />
                Commune Ntahangwa,Gikungu,Avenue nkondo
              </li>
            </ul>
          </Col>

          <Col md={3} sm={12} xs={12}>
            <h5 className={' text-uppercase titlefooter'}>Me contacter </h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2 text-white">
                {' '}
                <ImPhone />
                +257 69 10 99 02 <br /> <AiOutlineMail /> resafburundi@gmail.com
              </li>
            </ul>
          </Col>
        </Row>
      </footer>
      <WhatsappChat />
    </center>
  );
};

export default Footer;
