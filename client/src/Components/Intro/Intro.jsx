import './intro.css';
import video from "../../assets/intro.mp4";
import ReactPlayer from 'react-player';
import { useEffect } from 'react';

function Intro({ onSkip }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Enter") {
        onSkip();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onSkip]);

  return (
    <div className="intro">
      <div className="video-wrapper">
        <ReactPlayer
          url={video}
          playing={true}
          muted={true}
          width="100%"
          height="100%"
          className="react-player"
        />
      </div>
      <div className="skip-text">Press <b>Enter</b> to skip</div>
    </div>
  );
}

export default Intro;
