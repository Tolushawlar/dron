import React from "react";
import { Footer } from "../../components/Footer";
import Hero from "../../components/Hero";
import Navbar from "../../components/Navbar";
import Routes from "../../components/Routes";
import Testimonial from "../../components/Testimonial";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero/>
      <Routes/>
      <Testimonial/>
      <Footer/>
    </>
  );
}
