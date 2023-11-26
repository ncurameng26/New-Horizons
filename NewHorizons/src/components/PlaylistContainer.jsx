import React from 'react'
import MusicCard from './MusicCard'
import "../styles/mainStyles.css"
import KKSlider from '../assets/kkslider.jpg'



const PlaylistContainer = () => {

  const masterPlaylist = "https://open.spotify.com/playlist/5gz8qOjBdLTyRdHomPlnzf?si=c360848967804ed2"
  const firstPlaylist = "https://open.spotify.com/playlist/5VtxDWTfuahhD41opFjhXF?si=ec452fb94bf44862"
  const secondPlaylist = 'https://open.spotify.com/playlist/4K8tdC6l09hUQIeEvpQeY8?si=6f252b9debe84eb7'
  const thirdPlaylist = 'https://open.spotify.com/playlist/6pS8VDKA0Trm7Jcfx5a69u?si=b93590b70ade4100'
  const fourthPlaylist = 'https://open.spotify.com/playlist/7ygFncTAflr0e3dY8y1qvu?si=109d64f7df9c4c26'
  {/* */ }

  return (
    <div className="playlistMain">


      <div className="HeroPlaylist">
        <MusicCard playlistLink={masterPlaylist} playlistImage={KKSlider} playlistName="Master List" />
      </div>


      <div className="playlistRow">
        <div className="playlistContainer">
          <MusicCard playlistLink={firstPlaylist} playlistImage={KKSlider} playlistName="a lot going on" />
          <MusicCard playlistLink={secondPlaylist} playlistImage={KKSlider} playlistName="real cowboy hours" />
          <MusicCard playlistLink={thirdPlaylist} playlistImage={KKSlider} playlistName="Watch Your Mouth" />
          <MusicCard playlistLink={fourthPlaylist} playlistImage={KKSlider} playlistName="Move In Weekend" />
        </div>
      </div>
    </div>

  )
}

export default PlaylistContainer
