import React, {useEffect} from 'react'
import i18next from 'i18next'
import cookies from 'js-cookie'
import { Container, Nav, Navbar,DropdownButton,Dropdown } from 'react-bootstrap'
import { Link ,useLocation} from 'react-router-dom'
import { useTranslation } from "react-i18next";
import logo from '../assets/images/logo1.png'
import './styleNavbar.css'

const languages = [
  {
    code: 'fr',
    name: 'Français',
    country_code: 'fr'
  },
  {
    code: 'en',
    name: 'English',
    country_code: 'gb '
  },
]

function Navbars() {
  const {t} = useTranslation()
  const currentLanguageCode = cookies.get('i18next')
  const currentLanguage = languages.find(l => l.code === currentLanguageCode)
  const mainContent = React.useRef(null);
  const location = useLocation();
  useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    mainContent.current.scrollTop = 0;
  }, [location]);

  useEffect(() => {
    document.body.dir = currentLanguage.dir || 'ltr'
  }, [currentLanguage,t]);
  
  return (
    <Navbar collapseOnSelect expand="lg" className={'bgNavbar'} fixed={'top'} >
  <Container>
  <Navbar.Brand as={Link} to={'/'}><img src={logo} alt={"logo"} className={'logostyle'}/></Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav " className={'borderNavbar '} />
  <Navbar.Collapse id="responsive-navbar-nav " className="justify-content-end">
    <Nav className="me-right" ref={mainContent}>
    
      <Nav.Link as={Link} to={'/'}  className={'linksimatbdi '}> <span className='titlenavbar'> {t('home_navbar')}</span></Nav.Link>
      <Nav.Link as={Link} to={'/a-propos'}  className={'linksimatbdi'}><span  className='titlenavbar'>{t('a_propos')} </span></Nav.Link>
      <Nav.Link as={Link} to={'/activity'}  className={'linksimatbdi'}><span  className='titlenavbar'>{t('activity')}</span></Nav.Link>
      <Nav.Link as={Link} to={'/contribute'}  className={'linksimatbdi'}><span  className='titlenavbar'>{t('contribute')}</span></Nav.Link>
      {/* <Nav.Link as={Link} to={'/partenariat'}  className={'linksimatbdi'}><span  className='titlenavbar'>{t('partenariat')}</span></Nav.Link> */}
    </Nav>
    <DropdownButton id="dropdown-basic-button" title={t('translate')} variant={'secondary'}>
        
        {languages.map(({code,name,country_code})=>(
           <Dropdown.Item 
              key={country_code}
              onClick={()=>i18next.changeLanguage(code)}
                disabled= {currentLanguageCode === code}
            >
             <span 
             className={`flag-icon flag-icon-${country_code} mx-2`}
             style={{opacity: code === currentLanguageCode? 0.5 : 1}}
             ></span>
                  {name}
             </Dropdown.Item>
        ))}
    </DropdownButton>
  </Navbar.Collapse>
  </Container>
</Navbar>
  )
}

export default Navbars