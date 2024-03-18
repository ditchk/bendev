import React, { useState } from 'react'
import { Button } from '../ui/button';
import Cards from '../shared/Cards';
import { useNavigate } from 'react-router';


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

  const Navigate = useNavigate()

  const handleclick = () => {
      Navigate('/contact')
  }


  return (
    <div className="Player">
      <video id="background-video" className="video" preload='auto' autoPlay muted loop>
        <source src={src} type="video/mp4" />
      </video>
      <div className='flex justify-end mt-[29rem] lg:mt-[35rem] xl:mt-[37.5rem] bg-white h-14 md:h-14 z-10 rounded-t-3xl w-screen absolute ' />
      <div className="PlayerItems">
        <div className="ItemBox-Div">
          <h1 className="BrandName">Welcome to Bswp</h1>
          <h2 className='BrandName2'>Home for Modern websites</h2>
          <p className="TextDescription">We strive to make the best of what we have <br />and create something truly special.</p>
          <div className='flex flex-row justify-center items-center gap-2'>
          <Button className="buttonPrev" onClick={handleClick}>Explore Now</Button>
          <Button className="buttonPrev" onClick={handleclick}>Enquire Now</Button>
          </div>
        </div>
        <div className="Cards">
          <Cards />
        </div>
      </div>
    </div>
  )
}

export default Player