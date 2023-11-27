import React from 'react'
import MusicCard from './MusicCard'
import "../styles/mainStyles.css"
import KKSlider from '../assets/kkslider.jpg'
import first from '../assets/1.gif'
import second from '../assets/2.gif'
import third from '../assets/3.gif'
import fourth from '../assets/4.gif'




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
        <MusicCard playlistLink={masterPlaylist} playlistImage={KKSlider} playlistName="Master List" playlistDesc="9/11" />
      </div>


      <div className="playlistRow">
        <div className="playlistContainer">
          <MusicCard playlistLink={firstPlaylist} playlistImage={first} playlistName="a lot going on" playlistDesc="9/12" />
          <MusicCard playlistLink={secondPlaylist} playlistImage={second} playlistName="real cowboy hours" playlistDesc="9/13" />
        </div>
        <div className="placeholder"> &nbsp; </div>

        <div className="playlistContainer">
          <MusicCard playlistLink={thirdPlaylist} playlistImage={third} playlistName="watch your mouth" playlistDesc="9/14" />
          <MusicCard playlistLink={fourthPlaylist} playlistImage={fourth} playlistName="move in weekend" playlistDesc="9/15" />
        </div>

      </div>
    </div>

  )
}

export default PlaylistContainer
