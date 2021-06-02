import React from "react"
import { NavLink } from "react-router-dom"

import Nav from "../../Nav"

import "../../scss/menShoesAndClothes.scss"

const MenShoesComponent = () => {
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

      {/* ####### sneakers ######### */}
      <div className="sneakers" id="sneakers">
        <div className="section-header">
          <h3>Sneakers</h3>
        </div>

        <div className="section-content"></div>
      </div>

      {/* ######## formal ######### */}
      <div className="formal" id="formal">
        <div className="section-header">
          <h3>Formal</h3>
        </div>

        <div className="section-content"></div>
      </div>

      {/* ######### boots ######## */}
      <div className="boots" id="boots">
        <div className="section-header">
          <h3>Boots</h3>
        </div>

        <div className="section-content"></div>
      </div>
    </div>
  )
}

export default MenShoesComponent