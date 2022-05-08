import React from 'react';
import './styleFooter.css'
import {Row,Col} from 'react-bootstrap'
import WhatsappChat from './whatsapp';
import {BsHouseDoorFill} from 'react-icons/bs'
import {MdOutlineMailOutline} from 'react-icons/md'
import {ImPhone} from 'react-icons/im'
import logoFooter from '../assets/images/logofooter.png'

const Footer = () => {

    return (
            <center>
                <footer className="paddingfooter bgfooter">
                    <Row className={'mx-3'}>
                        <Col md={6} sm={12} xs={12}>
                            
                            <Row>
                                <Col>
                                <div>
                                    <img src={logoFooter} alt={"logoimage"}/>
                                </div>  
                               </Col>
                                <Col>
                                <p className={'text-white descriptionebcompany'}>
                                © 2022 <span className={'simat-burundi'}>RESAF BURUNDI, Renewable Energy and Sustainable Agro Farming Company SPRL Footer.{" "}</span>Tous les droits sont réservés. 
                                <span className={'text-center'}> {" "} le site web est développé </span> <span className={"eb-companye"}><br/>par EB-COMPANY </span>
                                </p>

                                </Col>
                            </Row>
                            
                            
                        </Col>
                        <Col md={3} sm={12} xs={12}>
                        <h5 className={' text-uppercase titlefooter'}>Adresse </h5>
                            <ul className="nav flex-column">
                                <li className="nav-item mb-2 text-white"> <BsHouseDoorFill /> Kabondo avenue Lac RWERU no 7, Bujumbura</li>
                            </ul>
                        </Col>
                      
                     
                        <Col md={3} sm={12} xs={12}>
                        <h5 className={' text-uppercase titlefooter'}>Me contacter </h5>
                            <ul className="nav flex-column">
                                <li className="nav-item mb-2 text-white"> <ImPhone />+257 61 94 93 93 </li>
                            </ul>
                        </Col>
                    </Row>
                </footer>
                <WhatsappChat />
                
            </center>
    );
};

export default Footer;