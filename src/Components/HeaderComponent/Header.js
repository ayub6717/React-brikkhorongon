import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import {FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { Navbar, Nav, Form, FormControl, Button, NavDropdown, } from 'react-bootstrap'
import classes from './../HeaderComponent/header.module.css'
function Header() {
    return (
        <>
            <Navbar className={classes.bg_1}  collapseOnSelect expand="md" bg="dark" variant="dark" >
                <Navbar.Brand href="#home">
                    <img className={classes.img_1} src="/img/brikkho.png" alt="brikkho" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse  id="responsive-navbar-nav">
                    <Nav className="mr-auto" >
                        <Nav.Link href="#features">Features</Nav.Link>
                        <Nav.Link href="#pricing">Pricing</Nav.Link>
                        <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Form inline>
                        <FormControl type="text" placeholder="Search item..." className="mr-sm-2" />
                        <Button variant="outline-info"><FontAwesomeIcon icon={faSearch} /></Button>
                    </Form>
                </Navbar.Collapse>
            </Navbar>
        </>
    )
}

export default Header