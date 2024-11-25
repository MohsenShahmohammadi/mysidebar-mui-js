import { Route, Routes } from "react-router-dom";
import React from "react";
import HomePage from "./pages/HomePage";
import AboutUs from "./pages/AboutUs";
import Blog from "./pages/Blog";
import ContactUs from "./pages/ContactUs";
import Customers from "./pages/Customers";
import ImageGallery from "./pages/ImageGallery";
import Products from "./pages/Products";


const Router = () => {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<HomePage/>}/>
        <Route exact path="/products" element={<Products/>}/>
        <Route exact path="/customers" element={<Customers/>}/>
        <Route exact path="/aboutus" element={<AboutUs/>}/>
        <Route exact path="/contactus" element={<ContactUs/>}/>
        <Route exact path="/blog" element={<Blog/>}/>
        <Route exact path="/imagegallery" element={<ImageGallery/>}/>
      </Routes>
    </>
  );
};

export default Router;
