"use client";
import { useRef, useEffect } from 'react';

const VideoPlayerHeroSection: React.FC = (): JSX.Element => {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const video = videoRef.current;

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

  return (
    <div className="hero-section">
      <div className="hero-section-content">
        <video
          ref={videoRef}
          src="https://videos.pexels.com/video-files/3249902/3249902-uhd_2560_1440_25fps.mp4" // Sample video URL
          autoPlay
          muted
          loop
          controls={false} // Disable controls
          className="hero-video"
          style={{
            width: '100%',
            height: 'auto',
            maxHeight: '1350px', // Adjust the max size
            maxWidth: '1150px', // Adjust the max size
          }}
        />
      </div>
    </div>
  );
};

export default VideoPlayerHeroSection;
