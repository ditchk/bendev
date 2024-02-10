import React, { useState } from 'react'
import { Button } from '../ui/button';

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
        <video id="background-video" className="video" autoPlay preload='auto' muted loop>
            <source src={src} type="video/mp4"/>
        </video>
        <div className='flex lg:hidden justify-end mt-72 md:mt-96 bg-white h-8 md:h-10 rounded-t-3xl w-full absolute border-t-2 border-teal-100' />
        <div className="PlayerItems">
            <div className="ItemBox-Div">
                <h1 className="BrandName">WELCOME TO BSWP</h1>
                <h2 className='BrandName2'>Home for Modern websites</h2>
                <p className="TextDescription">We strive to make the best of what we have <br />and create something truly special.</p>
                <Button className="buttonPrev" onClick={handleClick}>Explore Now</Button>
            </div>
        </div>
    </div>
  )
}

export default Player