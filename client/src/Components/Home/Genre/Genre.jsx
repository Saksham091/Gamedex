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
    <div className='container_gen'>
      <h1 className='heading_gen'>Most Popular Genre</h1>
      <div className='card'>
        <div className='genre'>
          <img src={slide_image_1} alt="slide_image" className='card-img' />
          <h1 className='action'>Action</h1>
        </div>
        <div className='genre'>
          <img src={slide_image_2} alt="slide_image" className='card-img' />
          <h1 className='racing'>Racing</h1>
        </div>
        <div className='genre'>
          <img src={slide_image_3} alt="slide_image" className='card-img' />
          <h1 className='horror'>Horror</h1>
        </div>
        <div className='genre'>
          <img src={slide_image_4} alt="slide_image" className='card-img' />
          <h1 className='survival'>Survival</h1>
        </div>
        <div className='genre'>
          <img src={slide_image_5} alt="slide_image" className='card-img' />
          <h1 className='sports'>Sports</h1>
        </div>
        <div className='genre'>
          <img src={slide_image_6} alt="slide_image" className='card-img' />
          <h1 className='adventure'>Adventure</h1>
        </div>
        <div className='genre'>
          <img src={slide_image_7} alt="slide_image" className='card-img' />
          <h1 className='strategy'>Strategy</h1>
        </div>
        <div className='genre'>
          <img src={slide_image_8} alt="slide_image" className='card-img' />
          <h1 className='fighting'>Fighting</h1>
        </div>
        <div className='genre'>
          <img src={slide_image_9} alt="slide_image" className='card-img' />
          <h1 className='world'>Open World</h1>
        </div>
      </div>
    </div>
  );
}

export default Genre;