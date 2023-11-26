// import React, { useRef } from 'react';

// interface VideoPlayerProps {
//  src: string;
// }

// const VideoPlayer: React.FC<VideoPlayerProps> = ({ src }) => {
//  const videoRef = useRef<HTMLVideoElement>(null);

//  const handlePlayPause = () => {
//     if (!videoRef.current) return;
//     if (videoRef.current.paused) {
//       videoRef.current.play();
//     } else {
//       videoRef.current.pause();
//     }
//  };

//  const handleMuteUnmute = () => {
//     if (!videoRef.current) return;
//     videoRef.current.muted = !videoRef.current.muted;
//  };

//  const handleFullscreen = () => {
//     if (!videoRef.current) return;
//     if (!document.fullscreenElement) {
//       videoRef.current.requestFullscreen();
//     } else {
//       document.exitFullscreen();
//     }
//  };

//  return (
//     <div className="flex flex-col h-30 w-96 relative bg-slate-500">
//       <video ref={videoRef} src={src} controls className=''>
//         Your browser does not support the video tag.
//       </video>
//       <div className="flex absolute flex-row justify-between items-center gap-2 top-36 bg-black bg-opacity-40 w-full">
//         <div>
//         <button onClick={handlePlayPause} className='text-white'>
//           {videoRef.current && videoRef.current.paused ? 'Play' : 'Pause'}
//         </button>
//         <button onClick={handleMuteUnmute} className='text-white'>
//           {videoRef.current && videoRef.current.muted ? 'Unmute' : 'Mute'}
//         </button>
//         </div>
//         <div>
//              <button onClick={handleFullscreen} className="text-white">Fullscreen</button>
//         </div>
//       </div>
//     </div>
//  );
// };

// export default VideoPlayer;