import './Info.css';
import Navbar from '../../Home/Navbar/Navbar';
import slide_image_1 from '../../../assets/watch.png';
import { Link } from "react-router-dom";

function Info() {
  return (
    <>
      <Navbar />
      <div className='container_main'>
        <div className='card'>
          <img src={slide_image_1} alt="slide_image" className='game_img_main' />
          <h1 className='name'>About the game</h1>
        </div>
        <h1 className='specifications'>Specifications</h1>
        <Link to="/mission"><h1 className='list'>Mission List</h1></Link>
        <h1 className='ss'>Game play, Screenshots</h1>
        <h1 className='review'>Public Review</h1>
      </div>
    </>
  );
}

export default Info;