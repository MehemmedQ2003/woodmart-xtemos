/* eslint-disable jsx-a11y/iframe-has-title */
import React from "react";
import "./Vendor.scss";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import { RiStarSFill, RiShoppingCartLine } from "react-icons/ri";
import { CiSearch, CiHeart } from "react-icons/ci";
import { DiGitCompare } from "react-icons/di";

const Vendor = () => {
  return (
    <div className="sectionVendor">
      <Container>
        <Row className="productRow">
          <Col xl={3} md={6} sm={12}>
            <h5>PRODUCT CATEGORIES</h5>
            <div className="productLinks">
              <Link to="#" className="productLink">
                Accessories
              </Link>
              <Link to="#" className="productLink">
                Clocks
              </Link>
              <Link to="#" className="productLink">
                Docer
              </Link>
              <Link to="#" className="productLink">
                Toys
              </Link>
              <Link to="#" className="productLink">
                Uncategorized
              </Link>
            </div>
            <hr />
            <div className="location">
              <h5>STORE LOCATION</h5>
              <iframe
                width="100%"
                height="300"
                src="https://www.google.com/maps/embed?pb=!1m24!1m12!1m3!1d736.3619844297668!2d50.118969828604925!3d40.371707763408786!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m9!3e2!4m3!3m2!1d40.3718402!2d50.118975899999995!4m3!3m2!1d40.3718279!2d50.1187858!5e1!3m2!1saz!2saz!4v1704885695320!5m2!1saz!2saz"
                style={{ border: 0 }}
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>

            <hr />

            <div className="contact">
              <h5>CONTACT VENDOR</h5>
              <FloatingLabel
                style={{
                  border: "1px solid rgba(0,0,0,0.1)",
                  color: "#777",
                  fontSize: "14px",
                }}
                controlId="floatingTextarea"
                label="Your Name"
                className="my-3"
              >
                <Form.Control type="email" placeholder="name@example.com" />
              </FloatingLabel>
              <FloatingLabel
                style={{
                  border: "1px solid rgba(0,0,0,0.1)",
                  color: "#777",
                  fontSize: "14px",
                }}
                controlId="floatingInput"
                label="you@example.com"
                className="my-3"
              >
                <Form.Control type="email" placeholder="name@example.com" />
              </FloatingLabel>
              <FloatingLabel
                style={{
                  border: "1px solid rgba(0,0,0,0.1)",
                  color: "#777",
                  fontSize: "14px",
                }}
                controlId="floatingTextarea"
                label="Type your message..."
              >
                <Form.Control as="textarea" style={{ height: "200px" }} />
              </FloatingLabel>
              <button className="productBtn">Send Message</button>
            </div>

            <hr />

            <div className="ratedProduct">
              <h5>PRODUCTS</h5>
              <div className="shopProducts">
                <div className="products">
                  <img
                    src="https://woodmartcdn-cec2.kxcdn.com/handmade/wp-content/uploads/sites/3/2017/06/finaly-banner-handmade-1-opt.jpg"
                    alt="..."
                  />
                  <div className="imageContent">
                    <p>Wall Photo</p>
                    <div className="Producticons">
                      <RiStarSFill style={{ color: "#EABE12" }} />
                      <RiStarSFill style={{ color: "#EABE12" }} />
                      <RiStarSFill style={{ color: "#EABE12" }} />
                      <RiStarSFill style={{ color: "#EABE12" }} />
                      <RiStarSFill style={{ color: "#EABE12" }} />
                    </div>
                    <b>£599.00</b>
                  </div>
                </div>

                <hr />

                <div className="products">
                  <img
                    src="https://woodmartcdn-cec2.kxcdn.com/handmade/wp-content/uploads/sites/3/2017/06/finaly-banner-handmade-5-1-opt.jpg"
                    alt="..."
                  />
                  <div className="imageContent">
                    <p>Paper Rabbit</p>
                    <div className="Producticons">
                      <RiStarSFill style={{ color: "#EABE12" }} />
                      <RiStarSFill style={{ color: "#EABE12" }} />
                      <RiStarSFill style={{ color: "#EABE12" }} />
                      <RiStarSFill style={{ color: "#EABE12" }} />
                      <RiStarSFill style={{ color: "#EABE12" }} />
                    </div>
                    <b>£169.00</b>
                  </div>
                </div>
              </div>
            </div>
          </Col>

          <Col xl={{ offset: 1, span: 8 }} md={6} sm={12}>
            <div className="Products">
              <div className="sortProduct">
                <Row>
                  <Col xl={6} md={6} sm={12}>
                    <div className="enterProduct">
                      <FloatingLabel
                        controlId="floatingText"
                        label="Enter ptoduct name"
                        className="mb-3"
                      >
                        <Form.Control type="text" placeholder="productName" />
                      </FloatingLabel>
                      <button className="productButton">Search</button>
                    </div>
                  </Col>
                  <Col xl={{ offset: 1, span: 5 }} md={6} sm={12}>
                    <Form.Select aria-label="Default select example" className="select">
                      <option value="1">Default Sorting</option>
                      <option value="2">Sort by Popularity</option>
                      <option value="3">Sort by average rating</option>
                      <option value="4">Sort by latest</option>
                      <option value="5">Sort by price: low to high</option>
                      <option value="6">Sort by price: high to low</option>
                    </Form.Select>
                  </Col>
                </Row>

                <div className="slickSlider">
                  <div className="sliders d-flex">
                    <div className="slider">
                      <div className="intoSlider">
                        <div className="imgScreen">
                          <img
                            src="https://woodmartcdn-cec2.kxcdn.com/handmade/wp-content/uploads/sites/3/2017/06/finaly-banner-handmade-1-opt-430x491.jpg"
                            alt="..."
                          />
                          <div className="overlay">
                            <div className="overlayIcons">
                              <Link to="#" className="icons">
                                <RiShoppingCartLine />
                              </Link>
                              <Link to="#" className="icons">
                                <CiSearch />
                              </Link>
                              <Link to="#" className="icons">
                                <DiGitCompare />
                              </Link>
                              <Link to="#" className="icons">
                                <CiHeart />
                              </Link>
                            </div>
                          </div>
                        </div>
                        <div className="productPrice">
                          <h5>Wall Photo</h5>
                          <Link to="#">Decor</Link>
                          <p className="price">$50.00</p>
                        </div>
                      </div>
                    </div>
                    <div className="slider">
                      <div className="intoSlider">
                        <div className="imgScreen">
                          <img
                            src="https://woodmartcdn-cec2.kxcdn.com/handmade/wp-content/uploads/sites/3/2017/06/finaly-banner-handmade-3-opt-430x491.jpg"
                            alt="..."
                          />
                          <div className="overlay">
                            <div className="overlayIcons">
                              <Link to="#" className="icons">
                                <RiShoppingCartLine />
                              </Link>
                              <Link to="#" className="icons">
                                <CiSearch />
                              </Link>
                              <Link to="#" className="icons">
                                <DiGitCompare />
                              </Link>
                              <Link to="#" className="icons">
                                <CiHeart />
                              </Link>
                            </div>
                          </div>
                        </div>
                        <div className="productPrice">
                          <h5>Mr Cactus</h5>
                          <Link to="#">Decor</Link>
                          <p className="price">$19.00</p>
                        </div>
                      </div>
                    </div>
                    <div className="slider">
                      <div className="intoSlider">
                        <div className="imgScreen">
                          <img
                            src="https://woodmartcdn-cec2.kxcdn.com/handmade/wp-content/uploads/sites/3/2017/06/finaly-banner-handmade-7-1-opt-430x491.jpg"
                            alt="..."
                          />
                          <div className="overlay">
                            <div className="overlayIcons">
                              <Link to="#" className="icons">
                                <RiShoppingCartLine />
                              </Link>
                              <Link to="#" className="icons">
                                <CiSearch />
                              </Link>
                              <Link to="#" className="icons">
                                <DiGitCompare />
                              </Link>
                              <Link to="#" className="icons">
                                <CiHeart />
                              </Link>
                            </div>
                          </div>
                        </div>
                        <div className="productPrice">
                          <h5>Decoration wooden wall</h5>
                          <Link to="#">Decor</Link>
                          <p className="price">$8.90</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="sliders d-flex">
                    <div className="slider">
                      <div className="intoSlider">
                        <div className="imgScreen">
                          <img
                            src="https://woodmartcdn-cec2.kxcdn.com/handmade/wp-content/uploads/sites/3/2017/06/finaly-banner-handmade-2-opt-430x491.jpg"
                            alt="..."
                          />
                          <div className="overlay">
                            <div className="overlayIcons">
                              <Link to="#" className="icons">
                                <RiShoppingCartLine />
                              </Link>
                              <Link to="#" className="icons">
                                <CiSearch />
                              </Link>
                              <Link to="#" className="icons">
                                <DiGitCompare />
                              </Link>
                              <Link to="#" className="icons">
                                <CiHeart />
                              </Link>
                            </div>
                          </div>
                        </div>
                        <div className="productPrice">
                          <h5>Hand bracelet</h5>
                          <Link to="#">Accessories</Link>
                          <p className="price">$40.00</p>
                        </div>
                      </div>
                    </div>
                    <div className="slider">
                      <div className="intoSlider">
                        <div className="imgScreen">
                          <img
                            src="https://woodmartcdn-cec2.kxcdn.com/handmade/wp-content/uploads/sites/3/2017/06/finaly-banner-handmade-6-opt-430x491.jpg"
                            alt="..."
                          />
                          <div className="overlay">
                            <div className="overlayIcons">
                              <Link to="#" className="icons">
                                <RiShoppingCartLine />
                              </Link>
                              <Link to="#" className="icons">
                                <CiSearch />
                              </Link>
                              <Link to="#" className="icons">
                                <DiGitCompare />
                              </Link>
                              <Link to="#" className="icons">
                                <CiHeart />
                              </Link>
                            </div>
                          </div>
                        </div>
                        <div className="productPrice">
                          <h5>Wall Clock</h5>
                          <Link to="#">Clocks</Link>
                          <p className="price">$32.00</p>
                        </div>
                      </div>
                    </div>
                    <div className="slider">
                      <div className="intoSlider">
                        <div className="imgScreen">
                          <img
                            src="https://woodmartcdn-cec2.kxcdn.com/handmade/wp-content/uploads/sites/3/2017/06/finaly-banner-handmade-4-opt-430x491.jpg"
                            alt="..."
                          />
                          <div className="overlay">
                            <div className="overlayIcons">
                              <Link to="#" className="icons">
                                <RiShoppingCartLine />
                              </Link>
                              <Link to="#" className="icons">
                                <CiSearch />
                              </Link>
                              <Link to="#" className="icons">
                                <DiGitCompare />
                              </Link>
                              <Link to="#" className="icons">
                                <CiHeart />
                              </Link>
                            </div>
                          </div>
                        </div>
                        <div className="productPrice">
                          <h5>Classic Bear</h5>
                          <Link to="#">Toys</Link>
                          <p className="price">$30.00</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="sliders d-flex">
                    <div className="slider">
                      <div className="intoSlider">
                        <div className="imgScreen">
                          <img
                            src="https://woodmartcdn-cec2.kxcdn.com/handmade/wp-content/uploads/sites/3/2017/09/25-430x490.jpg"
                            alt="..."
                          />
                          <div className="overlay">
                            <div className="overlayIcons">
                              <Link to="#" className="icons">
                                <RiShoppingCartLine />
                              </Link>
                              <Link to="#" className="icons">
                                <CiSearch />
                              </Link>
                              <Link to="#" className="icons">
                                <DiGitCompare />
                              </Link>
                              <Link to="#" className="icons">
                                <CiHeart />
                              </Link>
                            </div>
                          </div>
                        </div>
                        <div className="productPrice">
                          <h5>Classic Bear</h5>
                          <Link to="#">Toys</Link>
                          <p className="price">$30.00</p>
                        </div>
                      </div>
                    </div>
                    <div className="slider">
                      <div className="intoSlider">
                        <div className="imgScreen">
                          <img
                            src="https://woodmartcdn-cec2.kxcdn.com/handmade/wp-content/uploads/sites/3/2017/09/11-430x490.jpg"
                            alt="..."
                          />
                          <div className="overlay">
                            <div className="overlayIcons">
                              <Link to="#" className="icons">
                                <RiShoppingCartLine />
                              </Link>
                              <Link to="#" className="icons">
                                <CiSearch />
                              </Link>
                              <Link to="#" className="icons">
                                <DiGitCompare />
                              </Link>
                              <Link to="#" className="icons">
                                <CiHeart />
                              </Link>
                            </div>
                          </div>
                        </div>
                        <div className="productPrice">
                          <h5>Classic Bear</h5>
                          <Link to="#">Toys</Link>
                          <p className="price">$30.00</p>
                        </div>
                      </div>
                    </div>
                    <div className="slider">
                      <div className="intoSlider">
                        <div className="imgScreen">
                          <img
                            src="https://woodmartcdn-cec2.kxcdn.com/handmade/wp-content/uploads/sites/3/2017/09/3-430x490.jpg"
                            alt="..."
                          />
                          <div className="overlay">
                            <div className="overlayIcons">
                              <Link to="#" className="icons">
                                <RiShoppingCartLine />
                              </Link>
                              <Link to="#" className="icons">
                                <CiSearch />
                              </Link>
                              <Link to="#" className="icons">
                                <DiGitCompare />
                              </Link>
                              <Link to="#" className="icons">
                                <CiHeart />
                              </Link>
                            </div>
                          </div>
                        </div>
                        <div className="productPrice">
                          <h5>Classic Bear</h5>
                          <Link to="#">Toys</Link>
                          <p className="price">$30.00</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
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

export default Vendor;
