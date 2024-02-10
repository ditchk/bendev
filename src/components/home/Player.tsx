import React, { useState } from 'react'
import { FaAnglesDown } from "react-icons/fa6";
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
        <video id="background-video" className="video" autoPlay muted loop>
            <source src={src} type="video/mp4"/>
        </video>
        <div className="PlayerItems">
            <div className="ItemBox-Div">
                <h1 className="BrandName">WELCOME TO BSWP</h1>
                <h2 className='BrandName2'>Home for Modern websites</h2>
                <p className="TextDescription">We strive to make the best of what we have <br />and create something truly special.</p>
                <FaAnglesDown className="hidden md:flex text-2xl mt-2 md:mt-10 lg:mt-24 animate-bounce cursor-pointer" onClick={scrollTo} />
                <Button className="buttonPrev" onClick={handleClick}>Explore Now</Button>
            </div>
        </div>
    </div>
  )
}

export default Player