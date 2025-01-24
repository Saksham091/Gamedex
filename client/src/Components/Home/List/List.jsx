import './List.css';
import { Link } from "react-router-dom";

import slide_image_1 from '../../../assets/watch.png';
import slide_image_2 from '../../../assets/hogwarts_vertical.jpg';
import slide_image_3 from '../../../assets/cod_vertical.jpg';
import slide_image_4 from '../../../assets/gow.jpg';
import slide_image_5 from '../../../assets/gta.png';
import slide_image_6 from '../../../assets/stray_vertical.jpg';
import slide_image_7 from '../../../assets/u_vertical.jpg';
import slide_image_8 from '../../../assets/action.png';
import slide_image_9 from '../../../assets/racing.png';
import slide_image_10 from '../../../assets/horror.png';




function List() {
    return (
        <div className='container_list'>
            <h1 className='heading_list'>Highlighted Games</h1>
            <div className='hilightes'>
                <Link to="/info">
                    <div className='genre'>
                        <img src={slide_image_1} alt="slide_image" className='game-img' />
                    </div>
                </Link>
                <div className='genre'>
                    <img src={slide_image_2} alt="slide_image" className='game-img' />
                </div>
                <div className='genre'>
                    <img src={slide_image_3} alt="slide_image" className='game-img' />
                </div>
                <div className='genre'>
                    <img src={slide_image_4} alt="slide_image" className='game-img' />
                </div>
                <div className='genre'>
                    <img src={slide_image_5} alt="slide_image" className='game-img' />
                </div>
            </div>
            <h1 className='recommended_game'>Recommended Games</h1>
            <div className='recommended'>
                <div className='genre'>
                    <img src={slide_image_6} alt="slide_image" className='game-img' />
                </div>
                <div className='genre'>
                    <img src={slide_image_7} alt="slide_image" className='game-img' />
                </div>
                <div className='genre'>
                    <img src={slide_image_8} alt="slide_image" className='game-img' />
                </div>
                <div className='genre'>
                    <img src={slide_image_9} alt="slide_image" className='game-img' />
                </div>
                <div className='genre'>
                    <img src={slide_image_10} alt="slide_image" className='game-img' />
                </div>

            </div>
        </div >
    );
}

export default List;