import React from 'react'
import "../styles/mainStyles.css"
import band from "../assets/band.jpg"

const HeroContainer = () => {
  return (
    <div className="heroContainer">
      <div className="heroPicture">
        <div className="enlargeImg">
          <div className="HeroCard">
            <img style={{ "width": "600px", "height": "400px" }} src={band} />

          </div>

        </div>
      </div>
      <div className="heroText">
        <h1> Expand Your Horizons </h1>

        <h2> I'm Kayla, aka KK-Slider </h2>
        <h3 style={{ "font-size": "44px", "margin-top": "0px" }}> New Horizons is a free-form radio show featuring altrock, indie, blah blah blah I can write that out </h3>
        <button class="button-24" role="button" > Listen Now </button>
        {/* bring to radio website */}
        {/* prob bring to spotify */}
        {/* bring to insta */}

      </div>

    </div >



  )
}

export default HeroContainer
