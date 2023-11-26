import React from 'react'
import "../styles/mainStyles.css"

const MusicCard = (props) => {
  return (
    <div className="playlist">
      <div className="enlargeImg">
        <div className="card">
          <a className={props.imageSize} href={props.playlistLink}><img src={props.playlistImage} /></a>
        </div>
      </div>
      <h1> {props.playlistName} </h1>
    </div >
  )
}

export default MusicCard
