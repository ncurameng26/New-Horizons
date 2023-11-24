import React from 'react'
import "../styles/mainStyles.css"

const MusicCard = (props) => {
  return (
    <div className="playlist">
      <div className="enlargeImg">
        <a href={props.playlistLink}><img src={props.playlistImage} />    </a>

      </div>
    </div >
  )
}

export default MusicCard
