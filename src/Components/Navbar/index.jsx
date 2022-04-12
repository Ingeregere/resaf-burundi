import React, {useEffect} from 'react'
import { Container, Nav, Navbar,DropdownButton,Dropdown } from 'react-bootstrap'
import { Link ,useLocation} from 'react-router-dom'
import logo from '../assets/images/logo1.png'
import './styleNavbar.css'

function Navbars() {
  const mainContent = React.useRef(null);
  const location = useLocation();
  useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    mainContent.current.scrollTop = 0;
  }, [location]);
  
  return (
    <Navbar collapseOnSelect expand="lg" className={'bgNavbar'} fixed={'top'} >
  <Container>
  <Navbar.Brand as={Link} to={"/"}><img src={logo} alt={"logo"} className={'logostyle'}/></Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav " className={'borderNavbar '} />
  <Navbar.Collapse id="responsive-navbar-nav " className="justify-content-end">
    <Nav className="me-right" ref={mainContent}>
    
      <Nav.Link as={Link} to={"/"}  className={'linksimatbdi '}> <span className='titlenavbar'>Accueil</span></Nav.Link>
      <Nav.Link as={Link} to={"/Apropos"}  className={'linksimatbdi'}><span  className='titlenavbar'>A propos</span></Nav.Link>
      <Nav.Link as={Link} to={"/Activites"}  className={'linksimatbdi'}><span  className='titlenavbar'>Activités</span></Nav.Link>
      <Nav.Link as={Link} to={"/Contribuez"}  className={'linksimatbdi'}><span  className='titlenavbar'>Contribuez</span></Nav.Link>
      <Nav.Link as={Link} to={"/Partenariat"}  className={'linksimatbdi'}><span  className='titlenavbar'>Partenariat</span></Nav.Link>
    </Nav>
    <DropdownButton id="dropdown-basic-button" title="Translate" variant={'secondary'}>
        <Dropdown.Item to="/fr" as={Link}>Français</Dropdown.Item>
        <Dropdown.Item to="/en" as={Link}>English</Dropdown.Item>
    </DropdownButton>
  </Navbar.Collapse>
  </Container>
</Navbar>
  )
}

export default Navbars