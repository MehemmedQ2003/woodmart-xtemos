/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./Blog.scss";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { FaRegMessage } from "react-icons/fa6";
import { IoShareSocialOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const Blog = () => {
  return (
    <div className="sectionBlog">
      <h1>Blog</h1>
      <Container>
        <Row>
          <Col xl={4} md={6} sm={12} className="colBlog">
            <div className="blogItems one">
              <div className="date">
                <p>
                  22 <br /> JUN
                </p>
              </div>
              <Link to="#" className="name">
                Home Decor
              </Link>
            </div>
            <p className="title">Minimalist Japanese-inspired furniture</p>
            <div className="feedbackName">
              <p>By</p>
              <p>
                <img
                  src="https://woodmart.xtemos.com/wp-content/uploads/2018/10/avatar-home.jpg.webp"
                  alt="..."
                />
              </p>
              <p className="messageShare">
                S.Rogers
                <FaRegMessage />
                <IoShareSocialOutline />
              </p>
            </div>
            <p className="feedback">
              Ac haca ullamcorper donec ante habi tasse donec imperdiet eturpis
              varius per a augue magna hac. Nec hac et vestibulum duis a
              tincidunt ...
            </p>
            <p className="continue">
              <Link to="#" className="reading">
                CONTINUE READING...
              </Link>
            </p>
          </Col>
          <Col xl={4} md={6} sm={12} className="colBlog">
            <div className="blogItems two">
              <div className="date">
                <p>
                  16 <br /> JUN
                </p>
              </div>
              <Link to="#" className="name">
                Home Decor
              </Link>
            </div>
            <p className="title">New home decor from John Doerson</p>
            <div className="feedbackName">
              <p>By</p>
              <p>
                <img
                  src="https://woodmart.xtemos.com/wp-content/uploads/2018/10/avatar-home.jpg.webp"
                  alt="..."
                />
              </p>
              <p className="messageShare">
                S.Rogers
                <FaRegMessage />
                <IoShareSocialOutline />
              </p>
            </div>
            <p className="feedback">
              Ullamcorper condimentum erat pretium velit at ut a nunc id a adeu
              vestibulum nibh urna nam consequat erat molestie lacinia rhoncus.
              Nis...
            </p>
            <p className="continue">
              <Link to="#" className="reading">
                CONTINUE READING...
              </Link>
            </p>
          </Col>
          <Col xl={4} md={6} sm={12} className="colBlog">
            <div className="blogItems three">
              <div className="date">
                <p>
                  16 <br /> JUN
                </p>
              </div>
              <Link to="#" className="name">
                Design Trends
              </Link>
            </div>
            <p className="title">The big design: Wall likes pictures</p>
            <div className="feedbackName">
              <p>By</p>
              <p>
                <img
                  src="https://woodmart.xtemos.com/wp-content/uploads/2018/10/avatar-home.jpg.webp"
                  alt="..."
                />
              </p>
              <p className="messageShare">
                S.Rogers
                <FaRegMessage />
                <IoShareSocialOutline />
              </p>
            </div>
            <p className="feedback">
              Parturient in potenti id rutrum duis torquent parturient sceler
              isque sit vestibulum a posuere scelerisque viverra urna. Egestas
              tristi...
            </p>
            <p className="continue">
              <Link to="#" className="reading">
                CONTINUE READING...
              </Link>
            </p>
          </Col>
          <Col xl={4} md={6} sm={12} className="colBlog">
            <div className="blogItems four">
              <div className="date">
                <p>
                  14 <br /> JUN
                </p>
              </div>
              <Link to="#" className="name">
                Home Decor
              </Link>
            </div>
            <p className="title">Sweet seat: functional seat for IT folks</p>
            <div className="feedbackName">
              <p>By</p>
              <p>
                <img
                  src="https://woodmart.xtemos.com/wp-content/uploads/2018/10/avatar-home.jpg.webp"
                  alt="..."
                />
              </p>
              <p className="messageShare">
                S.Rogers
                <FaRegMessage />
                <IoShareSocialOutline />
              </p>
            </div>
            <p className="feedback">
              A sed a risusat luctus esta anibh rhoncus hendrerit blandit nam
              rutrum sitmiad hac. Cras a vestibulum a varius adipiscing ut
              dignissim ...
            </p>
            <p className="continue">
              <Link to="#" className="reading">
                CONTINUE READING...
              </Link>
            </p>
          </Col>
          <Col xl={4} md={6} sm={12} className="colBlog">
            <div className="blogItems five">
              <div className="date">
                <p>
                  14 <br /> JUN
                </p>
              </div>
              <Link to="#" className="name">
                Decoration
              </Link>
            </div>
            <p className="title">Creative water features and exterior</p>
            <div className="feedbackName">
              <p>By</p>
              <p>
                <img
                  src="https://woodmart.xtemos.com/wp-content/uploads/2018/10/avatar-home.jpg.webp"
                  alt="..."
                />
              </p>
              <p className="messageShare">
                S.Rogers
                <FaRegMessage />
                <IoShareSocialOutline />
              </p>
            </div>
            <p className="feedback">
              Adipiscing hac imperdiet id blandit varius scelerisque at sagittis
              libero dui dis volutpat vehicula mus sed ut. Lacinia dui rutrum
              arcu...
            </p>
            <p className="continue">
              <Link to="#" className="reading">
                CONTINUE READING...
              </Link>
            </p>
          </Col>
          <Col xl={4} md={6} sm={12} className="colBlog">
            <div className="blogItems six">
              <div className="date">
                <p>
                  14 <br /> JUN
                </p>
              </div>
              <Link to="#" className="name">
                Decoration
              </Link>
            </div>
            <p className="title">Reinterprets decor the classic bookshelf</p>
            <div className="feedbackName">
              <p>By</p>
              <p>
                <img
                  src="https://woodmart.xtemos.com/wp-content/uploads/2018/10/avatar-home.jpg.webp"
                  alt="..."
                />
              </p>
              <p className="messageShare">
                S.Rogers
                <FaRegMessage />
                <IoShareSocialOutline />
              </p>
            </div>
            <p className="feedback">
              Aliquet parturient scele risque scele risque nibh pretium
              parturient suspendisse platea sapien torquent feugiat parturient
              hac amet. Vo...
            </p>
            <p className="continue">
              <Link to="#" className="reading">
                CONTINUE READING...
              </Link>
            </p>
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

export default Blog;
