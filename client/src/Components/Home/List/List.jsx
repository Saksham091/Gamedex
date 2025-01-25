import './list.css';
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
        <div className="container_list">
            <h1 className="heading_list">Highlighted Games</h1>
            <div className="highlighted_games">
                <Link to="/info">
                    <div className="game_card">
                        <img src={slide_image_1} alt="Watch Dogs 2" />
                        <span className="game_title">Watch Dogs 2</span>
                    </div>
                </Link>
                <div className="game_card">
                    <img src={slide_image_2} alt="Hogwarts Legacy" />
                    <span className="game_title">Hogwarts Legacy</span>
                </div>
                <div className="game_card">
                    <img src={slide_image_3} alt="Call of Duty" />
                    <span className="game_title">Call of Duty</span>
                </div>
                <div className="game_card">
                    <img src={slide_image_4} alt="God of War" />
                    <span className="game_title">God of War</span>
                </div>
                <div className="game_card">
                    <img src={slide_image_5} alt="GTA V" />
                    <span className="game_title">GTA V</span>
                </div>
            </div>
            <h1 className="heading_list">Recommended Games</h1>
            <div className="recommended_games">
                <div className="game_card">
                    <img src={slide_image_6} alt="Stray" />
                    <span className="game_title">Stray</span>
                </div>
                <div className="game_card">
                    <img src={slide_image_7} alt="Uncharted" />
                    <span className="game_title">Uncharted</span>
                </div>
                <div className="game_card">
                    <img src={slide_image_8} alt="Action Game" />
                    <span className="game_title">Action Game</span>
                </div>
                <div className="game_card">
                    <img src={slide_image_9} alt="Racing Game" />
                    <span className="game_title">Racing Game</span>
                </div>
                <div className="game_card">
                    <img src={slide_image_10} alt="Horror Game" />
                    <span className="game_title">Horror Game</span>
                </div>
            </div>
        </div>
    );
}

export default List;
