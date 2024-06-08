import React, { useState } from 'react'
import Cards from '../shared/Cards';
import { Link } from 'react-router-dom';


interface PlayerProps {
  src: string;
}

const Player: React.FC<PlayerProps> = ({ src }) => {

  const [showSection, setShowSection] = useState(false);

  const handleClick = () => {
    window.location.hash = 'Choose a services';
    setShowSection(!showSection);
  };

  document.addEventListener('DOMContentLoaded', () => {
    const video = document.getElementById('background-video') as HTMLVideoElement;
    video.play();
  });



  return (
    <div className="Player">
      <video id="background-video" className="video" disableRemotePlayback preload='auto' autoPlay muted loop>
        <source src={src} type="video/mp4" />
      </video>
      <div className="PlayerItems">
        <div className="ItemBox-Div">
          <h1 className="BrandName">Bswp-</h1>
          <h2 className='BrandName2'>Home for Modern websites</h2>
          <p className="TextDescription">We strive to make the best of what we have <br />and create something truly special.</p>
          <div className='flex flex-row justify-center items-center gap-2'>
            <Link to={'#Choose a services'} className="BlogLink mt-5 z-40 bg-transparent text-teal-500 outline-teal-500" onClick={handleClick}>Get Started</Link>
            <Link to={'/blogs'} reloadDocument className="BlogLink mt-5 z-40 outline-white text-white bg-teal-950">Blog Library</Link>
          </div>
        </div>
        <div className="TopH1CardBox">
          <h1 className="HTextCard">Prefered frameworks and projects</h1>
        </div>
        <div className="Cards">
          <Cards />
        </div>
      </div>
    </div>
  )
}

export default Player