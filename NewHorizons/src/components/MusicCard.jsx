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
      <h2> {props.playlistName} </h2>
      <h3> {props.playlistDesc} </h3>
    </div >
  )
}

export default MusicCard
