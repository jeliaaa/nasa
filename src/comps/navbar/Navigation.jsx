import React from 'react'
import { Button, Container, Nav, Navbar, Offcanvas } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './navigation.scss'
import LOGO from '../../img/logo.png';
const Navigation = () => {
    return (
        <header>
            <Navbar style={{ height: '100%' }} expand={'lg'} className="bg-body-tertiary mb-3">
                <Container fluid>
                    <Navbar.Brand><Link to={'/'}><img src={LOGO} style={{width:150, marginLeft: 10}} /></Link></Navbar.Brand>
                    <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-lg`} />
                    <Navbar.Offcanvas
                        id={`offcanvasNavbar-expand-lg`}
                        aria-labelledby={`offcanvasNavbarLabel-expand-lg`}
                        placement="start"
                    >
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title id={`offcanvasNavbarLabel-expand-lg`}>
                                მენიუ
                            </Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                            <Nav className="pe-3 links">
                                <Link to={'/forum'}>Questions</Link>
                                <Link to={'/feed'}>News Feed</Link>
                                <Link to={'/map'}>Map of illegal sites</Link>
                            </Nav>
                            <Nav className='profile'>
                                <Button variant='secondary'><Link to={'/profile'}>პროფილი</Link></Button>
                            </Nav>
                        </Offcanvas.Body>
                    </Navbar.Offcanvas>
                </Container>
            </Navbar>
        </header>
    )
}

export default Navigation