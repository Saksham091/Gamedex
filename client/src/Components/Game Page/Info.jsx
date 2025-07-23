import React from 'react';
import './Info.css';
import Navbar from '../Home/Navbar/Navbar';
import slide_image_1 from '../../assets/watch.png';

const Info = () => {
  return (
    <>
      <Navbar />
      <div className="container_main">
        <div className="content">

          {/* Game Section */}
          <div className="game">
            <img src={slide_image_1} alt="Game Cover" className="game_img_main" />

            <div className="game_right">
              <div className="name">
                <h2>Watch Dogs 2</h2>
              </div>

              <div className="info_boxes_row">
                <div className="info_box">
                  <strong>Release Date:</strong> Nov 15, 2016
                </div>
                <div className="info_box">
                  <strong>Genre:</strong> Action, Adventure
                </div>
              </div>
            </div>
          </div>

          {/* About Section */}
          <div className="list">
            <div className="list_content">
              <h2>About the game</h2>
              <p>
                Watch Dogs 2 is an open-world action-adventure game set in San Francisco. Players take on the role of Marcus Holloway, a hacker working with the group DedSec to bring down a corrupt system.
              </p>
            </div>
          </div>

          {/* Specifications Section */}
          <div className="specifications">
            <div className="section_content">
              <h2>Specifications</h2>
              <div className="specs_boxes_row">
                <div className="spec_box">
                  <h3>Minimum</h3>
                  <p>To be added...</p>
                </div>
                <div className="spec_box">
                  <h3>Recommended</h3>
                  <p>To be added...</p>
                </div>
              </div>
            </div>
          </div>

          {/* Trailer Section */}
          <div className="trailer">
            <h2>Official Trailer</h2>
            <div className="trailer_video">
              <video controls>
                <source src="https://example.com/trailer.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>

          {/* Screenshots & Video Section */}
          <div className="media_row">
            <h2 className="ss">Gameplay / Screenshots</h2>
            <div className="media_items">
              <img src="https://via.placeholder.com/400x250" alt="Gameplay Screenshot" className="ss_img" />
              <video controls className="ss_video">
                <source src="https://example.com/gameplay.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>

        </div>
      </div>
    </>
  );
};

export default Info;
