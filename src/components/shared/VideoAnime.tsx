

type PlayerProps ={
    src: string;
}

const VideoAnime: React.FC<PlayerProps> = ({ src })=> {

  document.addEventListener('DOMContentLoaded', () => {
    const video = document.getElementById('background-video') as HTMLVideoElement;
    video.play();
  });

  return (
    <div>
      <video id="background-video" className="vide02" preload='auto' autoPlay muted loop>
        <source src={src} type="video/mp4" />
      </video>
    </div>
  )
}

export default VideoAnime
