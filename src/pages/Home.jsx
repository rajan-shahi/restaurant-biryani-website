import React from "react";
import Hero from "./../components/Hero/Hero";
import Services from "./../components/Services/Services";
import Banner from "./../components/Banner/Banner";
import Testimonial from "./../components/Testimonial/Testimonial";
import AppStore from "./../components/AppStore/AppStore";

export default function Home() {
  return (
    <div>
      <Hero />
      <Services />
      <Banner />
      {/* <CoverBanner /> */}
      <AppStore />
      <Testimonial />
    </div>
  );
}
