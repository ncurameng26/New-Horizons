import React from 'react'
import "../styles/mainStyles.css"

const HeroContainer = () => {
  return (
    <div>
      <div className="heroContainer">
        <div className="heroPicture">
          <div className="enlargeImg">
            <img src="https://placehold.co/500x300" />

          </div>
        </div>
        <div className="heroText">
          <h1> My name is KK slider and im a loser </h1>
          <h2> Check out my music </h2>
          <h3> Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis iure asperiores assumenda deleniti tenetur soluta similique enim molestiae fugit, est magnam illum repellendus maiores aspernatur incidunt hic, exercitationem quisquam qui. </h3>
          <button class="button-24" role="button"> Contact </button>

        </div>
      </div>
    </div>


  )
}

export default HeroContainer
