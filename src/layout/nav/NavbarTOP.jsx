import "./NavbarTOP.scss";
import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import {
  FaFacebook,
  FaInstagram,
  FaPinterest,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { FaRegEnvelope } from "react-icons/fa6";
import { IoIosCall } from "react-icons/io";
import { CiSearch, CiHeart } from "react-icons/ci";
import { FaShoppingCart } from "react-icons/fa";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import { useState } from "react";



const NavbarTOP = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(true);
  const handleShow = () => setShow(true);
  return (
    <div>
      <Navbar expand="lg" className="Navbar">
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto leftSide">
              <NavDropdown title="English" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Azerbaijan</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Russian</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Turkish</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Country" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">
                  United States (USD)
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Deutschland (EUR)
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Turkish (TL)
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav className="rightSide">
              <div className="icons">
                <Nav.Link href="#">
                  <FaFacebook style={{ color: "white" }} />
                </Nav.Link>
                <Nav.Link href="#">
                  <FaTwitter style={{ color: "white" }} />
                </Nav.Link>
                <Nav.Link href="#">
                  <FaInstagram style={{ color: "white" }} />
                </Nav.Link>
                <Nav.Link href="#">
                  <FaYoutube style={{ color: "white" }} />
                </Nav.Link>
                <Nav.Link href="#">
                  <FaPinterest style={{ color: "white" }} />
                </Nav.Link>
              </div>
              <Nav.Link href="#">
                <FaRegEnvelope style={{ color: "white", marginRight: "5px" }} />
                NEWSLETTER
              </Nav.Link>
              <Nav.Link href="#">CONTACT US</Nav.Link>
              <Nav.Link href="#">FAQS</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Container className="headerContainer">
        <div className="handle">
          <Button variant="primary" onClick={handleShow}>
            <img
              src="https://www.svgrepo.com/show/509382/menu.svg"
              alt="..."
              className="menuIcon"
              onClick={handleShow}
            />
          </Button>

          <Offcanvas show={show} onHide={handleClose}>
            <Offcanvas.Header closeButton>
              <Offcanvas.Title>Contact with us</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body className="offcanvasBody">
              <div className="left">
                <div className="call">
                  <IoIosCall
                    className="callIcon"
                    style={{ fontSize: "45px" }}
                  />
                  <div className="callFree">
                    <p>Call toll-free</p>
                    <b>+994 12 345 67 89</b>
                  </div>
                </div>
                <div className="question">
                  <p>Any questions</p>
                  <b>hand@made.com</b>
                </div>
              </div>
              <div className="right">
                <div className="login">LOGIN / REGISTER</div>
                <div className="icons">
                  <CiSearch style={{ fontSize: "25px" }} />
                  <CiHeart style={{ fontSize: "25px" }} />
                  <FaShoppingCart style={{ fontSize: "25px" }} />
                </div>
              </div>
            </Offcanvas.Body>
          </Offcanvas>
        </div>
        <div className="left">
          <div className="call">
            <IoIosCall className="callIcon" style={{ fontSize: "45px" }} />
            <div className="callFree">
              <p>Call toll-free</p>
              <b>+994 12 345 67 89</b>
            </div>
          </div>
          <div className="question">
            <p>Any questions</p>
            <b>hand@made.com</b>
          </div>
        </div>
        <img
          src="https://woodmartcdn-cec2.kxcdn.com/handmade/wp-content/themes/woodmart/images/wood-logo-dark.svg"
          alt="woodmart"
        />
        <div className="right">
          <div className="login">LOGIN / REGISTER</div>
          <div className="icons">
            <CiSearch style={{ fontSize: "25px" }} />
            <CiHeart style={{ fontSize: "25px" }} />
            <FaShoppingCart style={{ fontSize: "25px" }} />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default NavbarTOP;
