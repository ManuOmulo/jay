import React from "react"
import { NavLink } from "react-router-dom"

import Nav from "../../Nav"

import "../../scss/menShoesAndClothes.scss"

const MenClothingComponent = () => {
  return (
    <div className="men-clothing-window">
      <Nav />

      <div className="back-nav">
        <NavLink
          to="/men"
          exact
          className="back-navigation"
        >
          <i class="fas fa-chevron-left"></i>
          <p>Back</p>
        </NavLink>

      </div>

      {/* ####### shirts ######### */}
      <div className="shirts" id="shirts">
        <div className="section-header">
          <h3>Shirts and T-shirts</h3>
        </div>

        <div className="section-content"></div>
      </div>

      {/* ######## hoodies ######### */}
      <div className="hoodies" id="hoodies">
        <div className="section-header">
          <h3>Hoodies</h3>
        </div>

        <div className="section-content"></div>
      </div>

      {/* ######### trousers ######## */}
      <div className="trousers" id="trousers">
        <div className="section-header">
          <h3>Trousers</h3>
        </div>

        <div className="section-content"></div>
      </div>
    </div>
  )
}

export default MenClothingComponent