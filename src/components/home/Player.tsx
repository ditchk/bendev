import React, { useState } from 'react'
import Cards from '../shared/Cards';
import { Link } from 'react-router-dom';
import { SiFiverr, SiUpwork } from 'react-icons/si';
import { FcDribbble } from 'react-icons/fc';


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
          <h1 className="BrandName">Bswp-Stacks</h1>
          <h2 className='BrandName2'>Home for Modern websites</h2>
          <p className="TextDescription">We strive to make the best of what we have and create something truly special.</p>
          <div className='flex flex-row justify-center items-center gap-2'>
            <Link to={'#Choose a services'} className="BlogLink mt-5 z-40 bg-transparent text-teal-500 outline-teal-500" onClick={handleClick}>Get Started</Link>
            <Link to={'/blogs'} reloadDocument className="BlogLink mt-5 z-40 outline-white text-white bg-teal-950">Blog Library</Link>
          </div>
        </div>
        <div className="TopH1CardBox">
          <h3 className="HTextCard">Prefered frameworks and projects</h3>
        </div>
        <div className="Cards">
          <Cards />
        </div>
        <div className="flex flex-col pl-5 justify-start">
          <h3 className="HireTextCard">Hire me now through:</h3>
          <div className="flex flex-row gap-3">
            <Link to={'https://www.upwork.com/fl/bensonk31?s=1017484851352698949'} className="flex flex-row text-xl font-bold text-green-500 font-moon-dance justify-center items-center">
              <SiUpwork className="text-green-500 text-3xl"/>work
            </Link>
            <Link to={'https://www.fiverr.com/s/bddGlGk'} className="flex flex-row justify-center items-center">
              <SiFiverr className="text-green-700 text-5xl"/>
            </Link>
            <Link to={'https://www.fiverr.com/s/bddGlGk'} className="flex flex-row font-moon-dance text-pink-600 text-xl font-bold justify-center items-center">
              <FcDribbble className="text-green-700 text-3xl"/>ribble
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Player