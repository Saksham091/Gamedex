import './Intro.css';
import video from "../../assets/intro.mp4"
import ReactPlayer from 'react-player'


function Intro() {

  return (
    <div className='intro'>
      <ReactPlayer url={video} playing={true} muted={true} width="100%" height="100%" className='video'/>
    </div>
  );
}

export default Intro;