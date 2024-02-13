/* eslint-disable jsx-a11y/anchor-is-valid */
import "./SectionHeader.scss";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";

const SectionHeader = () => {
  return (
    <div className="sectionHeader">
      <hr />
      <Container>
        <ul className="wrapper">
          <li className="list">
            <Link to="/">Home</Link>
          </li>
          <li className="list">
            <Link to="/src/page/Shop">Shop</Link>
          </li>
          <li className="list">
            <Link to="/src/page/Blog">Blog</Link>
          </li>
          <li className="list">
            <Link to="/src/page/Factory">Our Factory</Link>
          </li>
          <li className="list">
            <Link to="/src/page/ListVendors" >List Of Vendors</Link>
          </li>
          <li className="list">
            <Link to="/src/page/Vendor" >Vendor Page</Link>
          </li>
        </ul>
      </Container>

      <hr />
    </div>
  );
};

export default SectionHeader;
