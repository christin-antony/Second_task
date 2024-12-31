"use client";

import React, { useState, useRef } from 'react';
import { BsFillPlayFill, BsPauseFill } from 'react-icons/bs';
import "../styles/CustomVideoPlayer.css";

const CustomVideoPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [showPlayButton, setShowPlayButton] = useState(true);
  const videoRef = useRef(null);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
      setShowPlayButton(isPlaying);
    }
  };

  const handleVideoEnd = () => {
    setIsPlaying(false);
    setShowPlayButton(true);
  };

  return (
    <div className="video-container">
      <video
        ref={videoRef}
        className="video-element"
        onEnded={handleVideoEnd}
        src="/video/videoplayback.mp4"
      >
        Your browser does not support the video tag.
      </video>
      
      {showPlayButton && (
        <button onClick={togglePlay} className="play-button">
          <BsFillPlayFill className="play-icon" />
        </button>
      )}
    </div>
  );
};

export default CustomVideoPlayer;