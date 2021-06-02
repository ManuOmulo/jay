import React from "react"
import { NavLink } from "react-router-dom"

import logo from "../images/logos/voirme4.png"

// css
import "../scss/men.scss"

import Nav from "../Nav"

const MenSection = () => {
  return (
    <div className="mens-window">
      <Nav />

      {/* ######## Logo ##########*/}
      <div className="top">
        <div className="mens-logo">
          <img src={logo} alt="logo"></img>
        </div>
      </div>

      {/* ######## Deals ########## */}
      <div className="hot-deals">
        <div className="title">
          <h3>Weekly Offers</h3>
          <i className="fas fa-arrow-right"></i>
        </div>
        <div className="deals-container" >

        </div>
      </div>

      {/* ######### Navigation ######### */}
      <div className="men-nav">
        <div className="header">
          <h4>Hot Categories</h4>
        </div>

        <div className="fashion-navigation">
          <NavLink
            to="/men/clothing#hoodies"
            exact
            className="fashion-navlink"
            activeClassName="fashion-navlink-active"
          >
            <div className="fashion-nav-image zero"></div>
            <p>Hoodies</p>
          </NavLink>

          <NavLink
            to="/men/shoes"
            exact
            className="fashion-navlink"
            activeClassName="fashion-navlink-active"
          >
            <div className="fashion-nav-image one"></div>
            <p>Formal</p>
          </NavLink>

          <NavLink
            to="/men/clothing#shirts"
            exact
            className="fashion-navlink"
            activeClassName="fashion-navlink-active"
          >
            <div className="fashion-nav-image two"></div>
            <p>Shirts</p>
          </NavLink>

          <NavLink
            to="/men/shoes"
            exact
            className="fashion-navlink"
            activeClassName="fashion-navlink-active"
          >
            <div className="fashion-nav-image three"></div>
            <p>Sneakers</p>
          </NavLink>

          <NavLink
            to="/men/clothing/#trousers"
            exact
            className="fashion-navlink"
            activeClassName="fashion-navlink-active"
          >
            <div className="fashion-nav-image four"></div>
            <p>Trousers</p>
          </NavLink>
        </div>
      </div>

      {/* ######### Suggestions ########### */}
      <div className="suggestions">
        <div className="title">
          <h3>Suggested for You</h3>
          <i className="fas fa-arrow-right"></i>
        </div>

        <div className="suggestions-container">

        </div>
      </div>

    </div>
  )
}

export default MenSection