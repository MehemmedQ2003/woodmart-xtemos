import "./App.scss";
import "../node_modules/slick-carousel/slick/slick-theme.css";
import { Routes, Route } from "react-router-dom";
import React from "react";
import NavbarTOP from "./layout/nav/NavbarTOP";
import SectionHeader from "./layout/header/SectionHeader";
import Home from "./page/Home/Home";
import SectionShop from "./page/Shop/SectionShop";
import Blog from "./page/Blog/Blog";
import Factory from "./page/Factory/Factory";
import ListVendors from "./page/ListVendors/ListVendors";
import Vendor from "./page/Vendor/Vendor";
import Footer from "./layout/footer/Footer";



function App() {
  return (
    <div className="App">
      <NavbarTOP />
      <SectionHeader />
      <Routes>
        <Route path="/" index  element={<Home />} /> 
        <Route path="/src/page/Shop"element={<SectionShop />} />
        <Route path="/src/page/Blog" element={<Blog />} />
        <Route path="/src/page/Factory" element={<Factory />} />
        <Route path="/src/page/ListVendors" element={<ListVendors />} />
        <Route path="/src/page/Vendor" element={<Vendor />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
