/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./Home.scss";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa6";
import { RiShoppingCartLine } from "react-icons/ri";
import { CiSearch, CiHeart } from "react-icons/ci";
import { DiGitCompare } from "react-icons/di";
import { FaRegPaperPlane } from "react-icons/fa6";
import { SiArkecosystem } from "react-icons/si";
import { MdSmartToy } from "react-icons/md";
import { BsBagCheckFill } from "react-icons/bs";
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedin, FaPinterest,} from "react-icons/fa";



const Home = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 680,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div>
      <Container className="sectionProducts">
        <Container className="gridContainer">
          <div className="side">
            <div className="left1">
              <p>MATTIS LAOREET SAPIEN</p>
              <h1>
                Porta <br /> Consectetur <br /> Imperdiet <br /> Frigilla
              </h1>
              <Link to="#">READ MORE</Link>
            </div>
            <div className="right2">
              <p>Semper</p>
              <h3>
                Feugiat <br /> Scerelisque <br /> Imperdiet
              </h3>
              <Link to="#">READ MORE</Link>
            </div>
            <div className="right3">
              <p>Semper</p>
              <h3>
                Adispicing <br /> Sodales
              </h3>
              <Link to="#">READ MORE</Link>
            </div>
            <div className="right4"></div>
          </div>
        </Container>

        <div className="title">
          <h5>Wooden Accessories</h5>
          <h3>Featured Products</h3>
          <p>Visit our shop to see amazing creations from our designers</p>
        </div>
        <ul className="productList">
          <li>
            <Link to="#" className="active">
              Best Sellers
            </Link>
          </li>
          <li>
            <Link to="#">Featured</Link>
          </li>
          <li>
            <Link to="#">Sales</Link>
          </li>
        </ul>

        <div className="slickSlider">
          <Slider {...settings} className="sliders">
            <div className="slider sld1">
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
                  <div className="icons">
                    <FaStar style={{ color: "yellow" }} />
                    <FaStar style={{ color: "yellow" }} />
                    <FaStar style={{ color: "yellow" }} />
                    <FaStar style={{ color: "yellow" }} />
                    <FaStar style={{ color: "yellow" }} />
                  </div>
                  <p className="price">$50.00</p>
                </div>
              </div>
            </div>
            <div className="slider sld2">
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
                  <div className="icons">
                    <FaStar style={{ color: "yellow" }} />
                    <FaStar style={{ color: "yellow" }} />
                    <FaStar style={{ color: "yellow" }} />
                    <FaStar style={{ color: "yellow" }} />
                    <FaStar style={{ color: "yellow" }} />
                  </div>
                  <p className="price">$19.00</p>
                </div>
              </div>
            </div>
            <div className="slider sld3">
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
                  <div className="icons">
                    <FaStar style={{ color: "yellow" }} />
                    <FaStar style={{ color: "yellow" }} />
                    <FaStar style={{ color: "yellow" }} />
                    <FaStar style={{ color: "yellow" }} />
                    <FaStar style={{ color: "yellow" }} />
                  </div>
                  <p className="price">$8.90</p>
                </div>
              </div>
            </div>
            <div className="slider sld4">
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
                  <div className="icons">
                    <FaStar style={{ color: "yellow" }} />
                    <FaStar style={{ color: "yellow" }} />
                    <FaStar style={{ color: "yellow" }} />
                    <FaStar style={{ color: "yellow" }} />
                    <FaStar style={{ color: "yellow" }} />
                  </div>
                  <p className="price">$40.00</p>
                </div>
              </div>
            </div>
            <div className="slider sld5">
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
                  <div className="icons">
                    <FaStar style={{ color: "yellow" }} />
                    <FaStar style={{ color: "yellow" }} />
                    <FaStar style={{ color: "yellow" }} />
                    <FaStar style={{ color: "yellow" }} />
                    <FaStar style={{ color: "yellow" }} />
                  </div>
                  <p className="price">$32.00</p>
                </div>
              </div>
            </div>
            <div className="slider sld6">
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
                  <div className="icons">
                    <FaStar style={{ color: "yellow" }} />
                    <FaStar style={{ color: "yellow" }} />
                    <FaStar style={{ color: "yellow" }} />
                    <FaStar style={{ color: "yellow" }} />
                    <FaStar style={{ color: "yellow" }} />
                  </div>
                  <p className="price">$30.00</p>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </Container>

      <Container className="sectionCategories">
        <div className="title">
          <h5>Wooden Accessories</h5>
          <h3>Featured Categories</h3>
          <p>Visit our shop to see amazing creations from our designers</p>
        </div>

        <div className="slickSlider">
          <Slider {...settings} className="sliders">
            <div className="slider">
              <div className="intoSlider">
                <div className="imgScreen">
                  <div className="overlayScreen">
                    <img
                      src="https://woodmartcdn-cec2.kxcdn.com/handmade/wp-content/uploads/sites/3/2018/10/handmade-categories-6-opt.jpg"
                      alt="..."
                    />
                    <button className="btnCategories">Toys</button>
                  </div>
                  <div className="overlay">4 Products</div>
                </div>
              </div>
            </div>
            <div className="slider">
              <div className="intoSlider">
                <div className="imgScreen">
                  <div className="overlayScreen">
                    <img
                      src="https://woodmartcdn-cec2.kxcdn.com/handmade/wp-content/uploads/sites/3/2018/10/handmade-categories-4-opt.jpg"
                      alt="..."
                    />
                    <button className="btnCategories">Clocks</button>
                  </div>
                  <div className="overlay">5 Products</div>
                </div>
              </div>
            </div>
            <div className="slider">
              <div className="intoSlider">
                <div className="imgScreen">
                  <div className="overlayScreen">
                    <img
                      src="https://woodmartcdn-cec2.kxcdn.com/handmade/wp-content/uploads/sites/3/2018/10/handmade-categories-5-opt.jpg"
                      alt="..."
                    />
                    <button className="btnCategories">Accessories</button>
                  </div>
                  <div className="overlay">15 Products</div>
                </div>
              </div>
            </div>
            <div className="slider">
              <div className="intoSlider">
                <div className="imgScreen">
                  <div className="overlayScreen">
                    <img
                      src="https://woodmartcdn-cec2.kxcdn.com/handmade/wp-content/uploads/sites/3/2021/09/handmade-category-4.jpg"
                      alt="..."
                    />
                    <button className="btnCategories">Decor</button>
                  </div>
                  <div className="overlay">12 Products</div>
                </div>
              </div>
            </div>
            <div className="slider">
              <div className="intoSlider">
                <div className="imgScreen">
                  <div className="overlayScreen">
                    <img
                      src="https://woodmartcdn-cec2.kxcdn.com/handmade/wp-content/uploads/sites/3/2018/10/handmade-categories-6-opt.jpg"
                      alt="..."
                    />
                    <button className="btnCategories">Toys</button>
                  </div>
                  <div className="overlay">4 Products</div>
                </div>
              </div>
            </div>
            <div className="slider">
              <div className="intoSlider">
                <div className="imgScreen">
                  <div className="overlayScreen">
                    <img
                      src="https://woodmartcdn-cec2.kxcdn.com/handmade/wp-content/uploads/sites/3/2018/10/handmade-categories-4-opt.jpg"
                      alt="..."
                    />
                    <button className="btnCategories">Clocks</button>
                  </div>
                  <div className="overlay">5 Products</div>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </Container>

      <Container className="sectionServices">
        <div className="title">
          <h5>Wooden Accessories</h5>
          <h3>Hand Made Service</h3>
          <p>Visit our shop to see amazing creations from our designers</p>
        </div>

        <div className="servicesCreation">
          <Container>
            <Row>
              <Col xl={3} md={6} sm={12} className="creations crt1">
                <div className="creation">
                  <div className="creationIcon">
                    <FaRegPaperPlane />
                  </div>
                  <div className="cardTitle">
                    <h4>Ullamcorper</h4>
                    <p>
                      Lorem Ipsum dolor sit amet Lorem Ipsum dolor sit amet
                      Lorem Ipsum dolor sit amet
                    </p>
                  </div>
                  <Link to="#">Read More</Link>
                </div>
              </Col>
              <Col xl={3} md={6} sm={12} className="creations crt2">
                <div className="creation">
                  <div className="creationIcon">
                    <SiArkecosystem />
                  </div>
                  <div className="cardTitle">
                    <h4>Tempor</h4>
                    <p>
                      Lorem Ipsum dolor sit amet Lorem Ipsum dolor sit amet
                      Lorem Ipsum dolor sit amet
                    </p>
                  </div>
                  <Link to="#">Read More</Link>
                </div>
              </Col>
              <Col xl={3} md={6} sm={12} className="creations crt3">
                <div className="creation">
                  <div className="creationIcon">
                    <MdSmartToy />
                  </div>
                  <div className="cardTitle">
                    <h4>Dictums</h4>
                    <p>
                      Lorem Ipsum dolor sit amet Lorem Ipsum dolor sit amet
                      Lorem Ipsum dolor sit amet
                    </p>
                  </div>
                  <Link to="#">Read More</Link>
                </div>
              </Col>
              <Col xl={3} md={6} sm={12} className="creations crt4">
                <div className="creation">
                  <div className="creationIcon">
                    <BsBagCheckFill />
                  </div>
                  <div className="cardTitle">
                    <h4>Consectetur</h4>
                    <p>
                      Lorem Ipsum dolor sit amet Lorem Ipsum dolor sit amet
                      Lorem Ipsum dolor sit amet
                    </p>
                  </div>
                  <Link to="#">Read More</Link>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </Container>

      <div className="sectionSignUp">
        <Container className="containerSign">
          <div className="title">
            <h5>Laoreet in vitae amet</h5>
            <h1>
              Hey you, Sign Up <br /> Connect to woodmart
            </h1>
          </div>
          <div className="formSign">
            <input type="email" placeholder="Your email address" />
            <button className="btnSign">Sign Up</button>
          </div>
          <div className="iconSign">
            <Link to="#"><FaFacebookF className="icons fcb" /></Link>
            <Link to="#"><FaInstagram className="icons ins" /></Link>
            <Link to="#"><FaTwitter className="icons twt" /></Link>
            <Link to="#"><FaLinkedin className="icons lnk" /></Link>
            <Link to="#"><FaPinterest className="icons pnt" /></Link>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Home;
