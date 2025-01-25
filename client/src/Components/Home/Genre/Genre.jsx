import './Genre.css';

import slide_image_1 from '../../../assets/action.png';
import slide_image_2 from '../../../assets/racing.png';
import slide_image_3 from '../../../assets/horror.png';
import slide_image_4 from '../../../assets/survival.png';
import slide_image_5 from '../../../assets/sports.png';
import slide_image_6 from '../../../assets/adventure.png';
import slide_image_7 from '../../../assets/strategy.png';
import slide_image_8 from '../../../assets/fighting.png';
import slide_image_9 from '../../../assets/world.png';



function Genre() {
  return (
    <div class="container_gen">
    <h2 class="heading_gen">Most Popular Genre</h2>
    <div class="card">
        <div class="genre action">
            <img class="card-img" src={slide_image_1} alt="Action" />
            <span>Action</span>
        </div>
        <div class="genre racing">
            <img class="card-img" src={slide_image_2} alt="Racing" />
            <span>Racing</span>
        </div>
        <div class="genre horror">
            <img class="card-img" src={slide_image_3} alt="Horror" />
            <span>Horror</span>
        </div>
        <div class="genre survival">
            <img class="card-img" src={slide_image_4} alt="Survival" />
            <span>Survival</span>
        </div>
        <div class="genre sports">
            <img class="card-img" src={slide_image_5} alt="Sports" />
            <span>Sports</span>
        </div>
        <div class="genre adventure">
            <img class="card-img" src={slide_image_6} alt="Adventure" />
            <span>Adventure</span>
        </div>
        <div class="genre strategy">
            <img class="card-img" src={slide_image_7} alt="Strategy" />
            <span>Strategy</span>
        </div>
        <div class="genre fighting">
            <img class="card-img" src={slide_image_8} alt="Fighting" />
            <span>Fighting</span>
        </div>
        <div class="genre world">
            <img class="card-img" src= {slide_image_9} alt="Open World" />
            <span>Open World</span>
        </div>
    </div>
</div>

  );
}

export default Genre;