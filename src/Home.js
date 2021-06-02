import React from "react"
import CarouselContainer from "./custom/CarouselContainer";

import logo from "./images/logos/voirme4.png"

// components
import Nav from "./Nav"

// css
import "./scss/home.scss"

const Home = () => {
  return (
    <div className="home-window">
      <Nav />

      <div className="top">
        <div className="new-logo">
          <img src={logo} alt="logo"></img>
        </div>

        <i className="far fa-heart"></i>
      </div>

      <div className="home-reel">
        <CarouselContainer />
      </div>

      <div className="deals">
        <div className="container-header">
          <h3>Deals of the Week</h3>
          <i className="fas fa-arrow-right"></i>
        </div>

        <div className="deals-content"></div>
      </div>

      <div className="new-arrivals">
        <div className="container-header">
          <h3>New Arrivals</h3>
          <i className="fas fa-arrow-right"></i>
        </div>

        <div className="new-arrivals-content"></div>
      </div>

      <div className= "recommendations">
        <div className="container-header">
          <h3>You May Also Like</h3>
        </div>

        <div className="recommendations-content"></div>
      </div>

    </div>
  )
}

export default Home