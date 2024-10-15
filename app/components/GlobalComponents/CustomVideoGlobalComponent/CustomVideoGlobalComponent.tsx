"use client";
import { useRef, useEffect, useState } from 'react';

interface CustomVideoGlobalComponentProps {
  videoSrc: string;
  fallbackVideoSrc: string; // Add fallback video source
}

const CustomVideoGlobalComponent: React.FC<CustomVideoGlobalComponentProps> = ({ videoSrc, fallbackVideoSrc }): JSX.Element => {
  const customVideoRef = useRef<HTMLVideoElement | null>(null);
  const [currentSrc, setCurrentSrc] = useState(videoSrc); // State to track current video source

  useEffect(() => {
    const video = customVideoRef.current;

    // Function to prevent pausing
    const preventPause = () => {
      if (video && video.paused) {
        video.play(); // Force play if paused
      }
    };

    // Add event listener to prevent pausing if video exists
    if (video) {
      video.addEventListener('pause', preventPause);
    }

    // Cleanup the event listener on component unmount
    return () => {
      if (video) {
        video.removeEventListener('pause', preventPause);
      }
    };
  }, []);

  const handleVideoError = () => {
    // Switch to fallback video source if there's an error
    setCurrentSrc(fallbackVideoSrc);
  };

  return (
    <div className="custom-video-section">
      <div className="custom-video-section-content">
        <video
          ref={customVideoRef}
          src={currentSrc} // Use the current source
          autoPlay
          muted
          loop
          controls={false} // Disable controls
          onError={handleVideoError} // Handle error
          className="custom-video"
          style={{
            width: '100%',
            height: 'auto',
          }}
        />
      </div>
    </div>
  );
};

export default CustomVideoGlobalComponent;
