import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const NavbarOC = () => {
	return (
		<Navbar bg="light" expand="lg">
			<LinkContainer to="/">
				<Navbar.Brand>Wendy Tekverk</Navbar.Brand>
			</LinkContainer>

			<Navbar.Toggle aria-controls="basic-navbar-nav" />
			<Navbar.Collapse id="basic-navbar-nav">
				<Nav className="mr-auto">
					<LinkContainer to="/">
						<Nav.Link>About</Nav.Link>
					</LinkContainer>
					<LinkContainer to="/portfolio">
						<Nav.Link>Portfolio</Nav.Link>
					</LinkContainer>
					<LinkContainer to="/contact">
						<Nav.Link>Contact</Nav.Link>
					</LinkContainer>
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	);
};
export default NavbarOC;
