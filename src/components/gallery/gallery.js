import React from "react";

import Photo1 from "../../img/hotel-1.jpg";
import Photo2 from "../../img/hotel-2.jpg";
import Photo3 from "../../img/hotel-3.jpg";

export const Gallery = () => {
  return (
    <div className="gallery">
      <figure className="gallery__item">
        <img src={Photo1} alt="number 1" className="gallery__photo" />
      </figure>
      <figure className="gallery__item">
        <img src={Photo2} alt="number 2" className="gallery__photo" />
      </figure>
      <figure className="gallery__item">
        <img src={Photo3} alt="number 3" className="gallery__photo" />
      </figure>
    </div>
  );
};
