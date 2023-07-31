
import React from 'react';

interface Props {
  imageSrc : string;
  destination : string;
}


function Card({imageSrc, destination} : Props) {
  return (
    <div className="card">
      <img src={imageSrc} alt="Card Image" className="card-image" />
      <div className="card-content">
        <h2 className="card-title">Card Title</h2>
        <a className="card-button" href={destination}>
          go somewhere
        </a>
      </div>
    </div>
  );
};

export default Card;
