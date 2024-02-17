import React, { useState } from 'react'
import { Button } from '../ui/button';
import Cards from '../shared/Cards';


interface PlayerProps {
  src: string;
}

const Player: React.FC<PlayerProps> = ({ src }) => {

  const [showSection, setShowSection] = useState(false);

  const handleClick = () => {
    window.location.hash = 'services';
    setShowSection(!showSection);
  };

  document.addEventListener('DOMContentLoaded', () => {
    const video = document.getElementById('background-video') as HTMLVideoElement;
    video.play();
  });

  return (
    <div className="Player">
      <video id="background-video" className="video" preload='auto' autoPlay muted loop>
        <source src={src} type="video/mp4" />
      </video>
      <div className='flex justify-end mt-[22rem] md:mt-96 lg:mt-[35rem] xl:mt-[38rem] bg-white h-10 md:h-14 z-40 rounded-t-3xl w-screen absolute border-t-8 border-gray-800' />
      <div className="PlayerItems">
        <div className="ItemBox-Div">
          <h1 className="BrandName">WELCOME TO BSWP</h1>
          <h2 className='BrandName2'>Home for Modern websites</h2>
          <p className="TextDescription">We strive to make the best of what we have <br />and create something truly special.</p>
          <Button className="buttonPrev" onClick={handleClick}>Explore Now</Button>
        </div>
        <div className="Cards">
          <Cards />
        </div>
      </div>
    </div>
  )
}

export default Player