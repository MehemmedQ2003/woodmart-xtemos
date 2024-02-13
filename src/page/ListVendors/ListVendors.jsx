import React from "react";
import "./ListVendors.scss";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Accordion from "react-bootstrap/Accordion";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import { IoFilterSharp } from "react-icons/io5";
import { PiSquaresFourFill } from "react-icons/pi";
import { IoMenuSharp } from "react-icons/io5";
import { RiStarSFill } from "react-icons/ri";
import { BsFillTelephoneFill } from "react-icons/bs";
import { FaAngleRight } from "react-icons/fa";



const ListVendors = () => {
  return (
    <div className="sectionListOfVendors">
      <div className="title">
        <h1>Store List</h1>
        <div>
          <Link className="vendorLink" to="#">
            HOME
          </Link>{" "}
          /
          <Link className="vendorLink" to="#">
            {" "}
            STORE LIST
          </Link>
        </div>
      </div>
      <div>
        <Container className="listContainer">
        <Row className="listRow">
          <Col xl={2} className="leftSide">
            <b>Total stores showing: 6</b>
          </Col>
          <Col xl={{ offset: 1, span: 9 }} className="rightSide">
            <Accordion className="acordion">
              <Accordion.Item eventKey="0">
                <Accordion.Header style={{ padding: 0, margin: 0 }}>
                  <div className="filters">
                    <IoFilterSharp className="filterIcon" />
                    Filter
                  </div>
                </Accordion.Header>
                <Accordion.Body>
                  <Form.Floating className="mb-3">
                    <Form.Control
                      id="floatingInputCustom"
                      type="email"
                      placeholder="name@example.com"
                    />
                    <div className="accordionApply">
                      <Link className="apply" to="#">
                        Apply
                      </Link>
                    </div>
                  </Form.Floating>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
            <div className="sort">
              <b className="sortP">Sort:</b>
              <Form.Select
                className="formSelect"
                aria-label="Default select example"
              >
                <option>Most Recent</option>
                <option value="1">Most Popular</option>
                <option value="2">Random</option>
              </Form.Select>
            </div>
            <div className="icons">
              <Link>
                <PiSquaresFourFill className="filtersIcon" />
              </Link>
              <Link>
                <IoMenuSharp className="filtersIcon" />
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
      </div>
      <Container className="itemContainer">
        <Row>
          <Col xl={4} md={6} sm={12}>
            <div className="card">
              <div className="cardAbout Card1">
                <div className="cardTitle">
                  <Link className="cardName">Ronnie Peterson</Link>
                  <div className="cardIcons">
                    <RiStarSFill />
                    <RiStarSFill />
                    <RiStarSFill />
                    <RiStarSFill />
                    <RiStarSFill />
                  </div>
                  <p className="cardAddress">
                    1446 Sarah Drive, <br /> Lake Charles, <br /> Louisiana, United States (US)     
                  </p>
                  <p className="cardTel">
                    <BsFillTelephoneFill />
                     489-147-9876
                  </p>
                </div>
                <div className="cardImg">
                  <Link className="linkImg">
                    <img className="img" src="https://woodmartcdn-cec2.kxcdn.com/handmade/wp-content/uploads/sites/3/2021/04/cropped-cropped-2-1.jpg.webp" alt="..."/>
                  </Link>
                </div>
              </div>
              <div className="cardBody">
                <Link className="bodyIcons"><FaAngleRight/></Link>
              </div>
            </div>
          </Col>
          <Col xl={4} md={6} sm={12}>
            <div className="card">
              <div className="cardAbout Card2">
                <div className="cardTitle">
                  <Link className="cardName">Bossa Handmade</Link>
                  <div className="cardIcons">
                    <RiStarSFill />
                    <RiStarSFill />
                    <RiStarSFill />
                    <RiStarSFill />
                    <RiStarSFill />
                  </div>
                  <p className="cardAddress">
                    3075 Broaddus Avenue, <br /> Colmar, <br /> Grand Est, France
                  </p>
                  <p className="cardTel">
                    <BsFillTelephoneFill />
                      612-749-6854
                  </p>
                </div>
                <div className="cardImg">
                  <Link className="linkImg">
                    <img className="img" src="https://woodmartcdn-cec2.kxcdn.com/handmade/wp-content/uploads/sites/3/2017/06/cropped-1-1.jpg.webp" alt="..."/>
                  </Link>
                </div>
              </div>
              <div className="cardBody">
                <Link className="bodyIcons"><FaAngleRight/></Link>
              </div>
            </div>
          </Col>
          <Col xl={4} md={6} sm={12}>
            <div className="card">
              <div className="cardAbout Card2">
                <div className="cardTitle">
                  <Link className="cardName">Ellen Handmade</Link>
                  <div className="cardIcons">
                    <RiStarSFill />
                    <RiStarSFill />
                    <RiStarSFill />
                    <RiStarSFill />
                    <RiStarSFill />
                  </div>
                  <p className="cardAddress">
                    267 Parrish Avenue, <br /> Dauphin, <br /> Manitoba, Canada
                  </p>
                  <p className="cardTel">
                    <BsFillTelephoneFill />
                    517-555-0133
                  </p>
                </div>
                <div className="cardImg">
                  <Link className="linkImg">
                    <img className="img" src="https://woodmartcdn-cec2.kxcdn.com/handmade/wp-content/uploads/sites/3/2017/06/cropped-4-1.jpg.webp" alt="..."/>
                  </Link>
                </div>
              </div>
              <div className="cardBody">
                <Link className="bodyIcons"><FaAngleRight/></Link>
              </div>
            </div>
          </Col>
          <Col xl={4} md={6} sm={12}>
            <div className="card">
              <div className="cardAbout Card4">
                <div className="cardTitle">
                  <Link className="cardName">Gemma Handmade</Link>
                  <div className="cardIcons">
                    <RiStarSFill />
                    <RiStarSFill />
                    <RiStarSFill />
                    <RiStarSFill />
                    <RiStarSFill />
                  </div>
                  <p className="cardAddress">
                    173 Lake Floyd Circle, <br /> Tallinn, <br /> Harju County, Estonia
                  </p>
                  <p className="cardTel">
                    <BsFillTelephoneFill />
                     202-555-0152
                  </p>
                </div>
                <div className="cardImg img1">
                  <Link className="linkImg">
                    <img className="img" src="https://woodmartcdn-cec2.kxcdn.com/handmade/wp-content/uploads/sites/3/2017/06/cropped-3-1.jpg.webp" alt="..."/>
                  </Link>
                </div>
              </div>
              <div className="cardBody">
                <Link className="bodyIcons"><FaAngleRight/></Link>
              </div>
            </div>
          </Col>
          <Col xl={4} md={6} sm={12}>
            <div className="card">
              <div className="cardAbout Card5">
                <div className="cardTitle">
                  <Link className="cardName">Sheridan Handmade</Link>
                  <div className="cardIcons">
                    <RiStarSFill />
                    <RiStarSFill />
                    <RiStarSFill />
                    <RiStarSFill />
                    <RiStarSFill />
                  </div>
                  <p className="cardAddress">
                    71 Pilgrim Avenue, <br /> Chevy Chase, <br /> Washington, United States (US)
                  </p>
                  <p className="cardTel">
                    <BsFillTelephoneFill />
                    042-324-6345
                  </p>
                </div>
                <div className="cardImg img1">
                  <Link className="linkImg">
                    <img className="img" src="https://woodmartcdn-cec2.kxcdn.com/handmade/wp-content/uploads/sites/3/2017/06/cropped-6-1.jpg.webp" alt="..."/>
                  </Link>
                </div>
              </div>
              <div className="cardBody">
                <Link className="bodyIcons"><FaAngleRight/></Link>
              </div>
            </div>
          </Col>
          <Col xl={4} md={6} sm={12}>
            <div className="card">
              <div className="cardAbout Card6">
                <div className="cardTitle">
                  <Link className="cardName">Ritchie Handmade</Link>
                  <div className="cardIcons">
                    <RiStarSFill />
                    <RiStarSFill />
                    <RiStarSFill />
                    <RiStarSFill />
                    <RiStarSFill />
                  </div>
                  <p className="cardAddress">
                    4396 Marie Street, <br /> Linköping, <br /> Östergötland, Sweden  
                  </p>
                  <p className="cardTel">
                    <BsFillTelephoneFill />
                    432-542-3471
                  </p>
                </div>
                <div className="cardImg img1">
                  <Link className="linkImg">
                    <img className="img" src="https://woodmartcdn-cec2.kxcdn.com/handmade/wp-content/uploads/sites/3/2017/06/cropped-5-1.jpg.webp" alt="..."/>
                  </Link>
                </div>
              </div>
              <div className="cardBody">
                <Link className="bodyIcons"><FaAngleRight/></Link>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      
      <div className="blogSIGNUP">
        <Container className="containerSign">
          <Row>
            <Col xl={6} sm={12} className="woodmartCol">
              <h5>LAOREET IN VITAE AMET</h5>
              <p>
                Hey You , Sign Up and connect to <p>Woodmart</p>
              </p>
            </Col>
            <Col xl={6} sm={12} className="inputCol">
              <input type="email" placeholder="Your email address" />
              <button>Sign Up</button>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default ListVendors;
