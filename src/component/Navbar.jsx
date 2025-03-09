import {Container, Nav, NavDropdown} from "react-bootstrap";
import React from "react";


function Navbar() {
    return (
        <>
            <Container>
                <div className="flex bg-gray-600 text-lg justify-between p-4">
                    <Nav className="me-auto text-xl-start">
                        <Nav.Link className="text-white" href="/">Home</Nav.Link>
                        <Nav.Link className="text-white" href="/inventory">Inventory</Nav.Link>
                        <Nav.Link className="text-white" href="/request">Requests</Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link className="text-white hover:text-blue-300" href="/login">Login</Nav.Link>
                        <Nav.Link className="text-white" href="/register">Register</Nav.Link>
                    </Nav>
                </div>
            </Container>

        </>
    )
}


export default Navbar;