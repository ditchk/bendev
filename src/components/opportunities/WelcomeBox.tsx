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
    <div className="VidepPlayer">
      <video id="background-video" className="videoPrev" preload='auto' autoPlay muted loop>
        <source src={src} type="video/mp4" />
      </video>
      <div className="OppWelcomSec">
        <div className="ItemBox-Div">
          <h1 className="BrandName">Learn and Earn</h1>
            <div className="flex flex-row justify-center items-center gap-4">
                <Button className="buttonPrev" onClick={handleClick}>Start Learning</Button>
                <Button className="buttonPrev" onClick={handleClick}>Earn now!</Button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Player