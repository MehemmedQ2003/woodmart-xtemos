import React from "react";
import "./Factory.scss";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { Link } from "react-router-dom";
import { FaPencilRuler } from "react-icons/fa";
import { FaBowlingBall } from "react-icons/fa";
import { FaScissors } from "react-icons/fa6";
import { TbJumpRope } from "react-icons/tb";

const Factory = () => {
  return (
    <div className="sectionFactory">
      <Container>
        <Row>
          <Col xl={6} md={12} sm={12} className="imgCol">
            <div className="imgCollection">
              <Link className="imgLink" to="#">
                <img
                  src="https://woodmartcdn-cec2.kxcdn.com/handmade/wp-content/uploads/sites/3/2017/09/handmade-factory-1-400x320.jpg"
                  alt="..."
                />
              </Link>
              <Link className="imgLink" to="#">
                <img
                  src="https://woodmartcdn-cec2.kxcdn.com/handmade/wp-content/uploads/sites/3/2017/09/handmade-factory-4-400x320.jpg"
                  alt="..."
                />
              </Link>
            </div>
            <div className="imgCollection">
              <Link className="imgLink" to="#">
                <img
                  src="https://woodmartcdn-cec2.kxcdn.com/handmade/wp-content/uploads/sites/3/2017/09/handmade-factory-3-400x320.jpg"
                  alt="..."
                />
              </Link>
              <Link className="imgLink" to="#">
                <img
                  src="https://woodmartcdn-cec2.kxcdn.com/handmade/wp-content/uploads/sites/3/2017/09/handmade-factory-2-1200x800-1-400x320.jpg"
                  alt="..."
                />
              </Link>
            </div>
          </Col>
          <Col xl={6} md={12} sm={12} className="productCol">
            <h3>
              How our manufactory design and works with{" "}
              <p>handmade creations</p>
            </h3>
            <div className="readMores">
              <div className="readMore">
                <h5>Suspendisse vestibulum venenatis.</h5>
                <p>
                  Praesent a nostra lacus aliquet torquent molestie class
                  ullamcorper nascetur sociis mus a mi sem conubia.
                </p>
              </div>
              <div className="readMore">
                <h5>Suspendisse vestibulum venenatis.</h5>
                <p>
                  Praesent a nostra lacus aliquet torquent molestie class
                  ullamcorper nascetur sociis mus a mi sem conubia.
                </p>
              </div>
            </div>
            <div className="readMores">
              <div className="readMore">
                <h5>Suspendisse vestibulum venenatis.</h5>
                <p>
                  Praesent a nostra lacus aliquet torquent molestie class
                  ullamcorper nascetur sociis mus a mi sem conubia.
                </p>
              </div>
              <div className="readMore">
                <h5>Suspendisse vestibulum venenatis.</h5>
                <p>
                  Praesent a nostra lacus aliquet torquent molestie class
                  ullamcorper nascetur sociis mus a mi sem conubia.
                </p>
              </div>
            </div>
            <div className="buttons">
              <button className="btn1">Shop Products</button>
              <button className="btn2">Read More</button>
            </div>
          </Col>
        </Row>
        <Row>
          <h1 className="videoH1">
            Augue in parturient ullamcorper cursus a sodales fusce imperdiet
          </h1>
          <video height="300" controls>
            <source src="https://vimeo.com/66790279" type="video/mp4" />
          </video>
        </Row>
      </Container>
      <div className="lobortis">
        <Container>
          <Row>
            <h3>
              Lobortis parturient hendrerit suspendisse fringilla idvel <br />{" "}
              ridiculus hac eu massa et orci sociosqu.
            </h3>
            <Col xl={3} md={6} sm={12} className="factoryItems">
              <FaBowlingBall className="factoryIcons" />
              <h5>DESIGN PROCESS</h5>
              <p>
                Sit eu mauris et ac imperdiet facilisi facilisi nulla adipiscing
                consectetur vel aliquet at condimentum.
              </p>
            </Col>
            <Col xl={3} md={6} sm={12} className="factoryItems">
              <FaPencilRuler className="factoryIcons" />
              <h5>CREATIVE IDEAS</h5>
              <p>
                Sit eu mauris et ac imperdiet facilisi facilisi nulla adipiscing
                consectetur vel aliquet at condimentum.
              </p>
            </Col>
            <Col xl={3} md={6} sm={12} className="factoryItems">
              <FaScissors className="factoryIcons" />
              <h5>HANDMADE MASTERS</h5>
              <p>
                Sit eu mauris et ac imperdiet facilisi facilisi nulla adipiscing
                consectetur vel aliquet at condimentum.
              </p>
            </Col>
            <Col xl={3} md={6} sm={12} className="factoryItems">
              <TbJumpRope className="factoryIcons" />
              <h5>FAST DELIVERY</h5>
              <p>
                Sit eu mauris et ac imperdiet facilisi facilisi nulla adipiscing
                consectetur vel aliquet at condimentum.
              </p>
            </Col>
            <div className="bookServices">
              <Link className="link">Book Our Services</Link>
            </div>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Factory;
