/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./SectionShop.scss";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";
import { PiSquaresFourLight } from "react-icons/pi";
import { IoMdMenu } from "react-icons/io";
import { MdViewCompact } from "react-icons/md";
import { RiShoppingCartLine } from "react-icons/ri";
import { CiSearch, CiHeart } from "react-icons/ci";
import { DiGitCompare } from "react-icons/di";
import { Link } from "react-router-dom";



const SectionShop = () => {
  return (
    <div className="sectionShop">
      <h1>Shop</h1>
      <Container>
        <Row className="rowSide">
          <Col xl={3} md={6} sm={12} className="leftSide">
            <h5>PRODUCT CATEGORIES</h5>
            <div className="filtered">
              <div className="filters">
                <p>
                  <Link to="#">Accessories</Link>
                </p>
                <p className="digit">15</p>
              </div>
              <div className="filters">
                <p>
                  <Link to="#">Clocks</Link>
                </p>
                <p className="digit">5</p>
              </div>
              <div className="filters">
                <p>
                  <Link to="#">Decor</Link>
                </p>
                <p className="digit">12</p>
              </div>
              <div className="filters">
                <p>
                  <Link to="#">Toys</Link>
                </p>
                <p className="digit">4</p>
              </div>
            </div>

            <hr />

            <h5>FILTER BY PRICE</h5>
            <Form.Range />
            <div className="priceFilter">
              <Form.Label className="label">
                <p>Price:</p> £0 — £600
              </Form.Label>
              <button>Filter</button>
            </div>

            <hr />

            <h5>PRODUCTS</h5>
            <div className="shopProducts">

              <hr />
              <div className="products">
                <img
                  src="https://woodmartcdn-cec2.kxcdn.com/handmade/wp-content/uploads/sites/3/2017/09/28-430x490.jpg"
                  alt="..."
                />
                <div className="imageContent">
                  <p>Photo Folder</p>
                  <b>£289.00</b>
                </div>
              </div>

              <hr />

              <div className="products">
                <img
                  src="https://woodmartcdn-cec2.kxcdn.com/handmade/wp-content/uploads/sites/3/2017/09/27-430x490.jpg"
                  alt="..."
                />
                <div className="imageContent">
                  <p>Cutlery Holder</p>
                  <b>£169.00</b>
                </div>
              </div>

              <hr />

              <div className="products">
                <img
                  src="https://woodmartcdn-cec2.kxcdn.com/handmade/wp-content/uploads/sites/3/2017/09/26-430x490.jpg"
                  alt="..."
                />
                <div className="imageContent">
                  <p>Moon Clock</p>
                  <b>£149.00</b>
                </div>
              </div>
            </div>

            <hr />

            <div className="flowerSct">
              <h5>SEMPER ERAT</h5>
              <p>Condim Sceleris Impertas Parturient</p>
              <Link to="#">View More</Link>
            </div>
          </Col>
          <Col xl={{ span: 8, offset: 1 }} md={6} sm={12} className="rightSide">
            <div className="rightTitle">
              <p xl={3} md={6} sm={12}>
                Home / <b>Shop</b>
              </p>
              <p xl={3} md={6} sm={12}>
                <b>Show: 9</b> / 12 / 24 / 36
              </p>
              <div xl={3} md={6} sm={12} className="rightIcons">
                <Link to="#">
                  <IoMdMenu className="icons" />
                </Link>
                <Link to="#">
                  <PiSquaresFourLight className="icons" />
                </Link>
                <Link to="#">
                  <MdViewCompact className="icons" />
                </Link>
              </div>
              <Form.Select
                xl={3}
                md={6}
                sm={12}
                className="formSelect"
                aria-label="Default select example"
              >
                <option>Default Sorting</option>
                <option value="1">Sort by popularity</option>
                <option value="2">Sort by latest</option>
                <option value="3">Sort by average rating</option>
              </Form.Select>
            </div>

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
          </Col>
        </Row>
        <Row>
          <div className="pagination">
            <Link to="#" className="paginationItem">
              {" "}
              &laquo;
            </Link>
            <Link to="#" className="paginationItem active">
              1
            </Link>
            <Link to="#" className="paginationItem">
              2
            </Link>
            <Link to="#" className="paginationItem">
              3
            </Link>
            <Link to="#" className="paginationItem">
              4
            </Link>
            <Link to="#" className="paginationItem">
              {" "}
              &raquo;
            </Link>
          </div>
        </Row>
      </Container>
      <div className="shopSIGNUP">
        <Container className="containerSign">
          <Row>
            <Col xl={6} sm={12} className="woodmartCol">
            <h5>LAOREET IN VITAE AMET</h5>
            <p>Hey You , Sign Up and connect to <p>Woodmart</p></p>
            </Col>
            <Col xl={6} sm={12} className="inputCol">
              <input type="email" placeholder="Your email address"/>
              <button>Sign Up</button>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default SectionShop;
