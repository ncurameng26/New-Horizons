import React from 'react'
import MusicCard from './MusicCard'
import "../styles/mainStyles.css"



const PlaylistContainer = () => {

  const playlist1 = "https://www.google.com/search?q=link+to+spotofy+playlist&oq=link+to+spotofy+playlist&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIGCAEQRRg50gEIMTg1M2owajeoAgCwAgA&sourceid=chrome&ie=UTF-8"
  {/* */ }

  return (
    <div className="playlistMain">
      <div className="playlistRow">
        <div className="playlistContainer">
          <MusicCard playlistLink={playlist1} playlistImage="https://placehold.jp/200x200.png" />
          <MusicCard playlistLink={playlist1} playlistImage="https://placehold.jp/200x200.png" />
          <MusicCard playlistLink={playlist1} playlistImage="https://placehold.jp/200x200.png" />
          <MusicCard playlistLink={playlist1} playlistImage="https://placehold.jp/200x200.png" />
        </div>
      </div>
    </div>

  )
}

export default PlaylistContainer
