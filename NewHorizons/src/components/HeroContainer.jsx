import React from 'react'
import "../styles/mainStyles.css"
import heroPic from "../assets/heroPic.jpg"

import heroChair from '../assets/chairHero.jpg'

const HeroContainer = () => {
  return (
    <div className="heroContainer">
      <div className="heroPicture">
        <div className="HeroCard">
          <img style={{ "width": "500px", "height": "600px" }} src={heroChair} />


        </div>
      </div>
      <div className="heroText">
        <h1> Expand Your Horizons </h1>

        <h2> I'm Kayla </h2>
        <h3 style={{ "font-size": "44px", "margin-top": "0px" }}> New Horizons is a free-form radio show featuring altrock, indie music played by yours truly -KK Slider </h3>
        <button class="button-24" role="button" > Listen Now </button>
        {/* bring to radio website */}
        {/* prob bring to spotify */}
        {/* bring to insta */}

      </div>

    </div >



  )
}

export default HeroContainer
