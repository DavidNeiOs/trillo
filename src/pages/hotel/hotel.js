import React from "react";
import Photo1 from "../../img/hotel-1.jpg";
import Photo2 from "../../img/hotel-2.jpg";
import Photo3 from "../../img/hotel-3.jpg";
import sprite from "../../img/sprite.svg";

export const HotelPage = props => {
  return (
    <main className="hotel-view">
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

      <div className="overview">
        <h1 className="overview__heading">Hotel Las Palmas</h1>
        <div className="overview__stars">
          <svg className="overview__icon-star">
            <use xlinkHref={`${sprite}#icon-star`}></use>
          </svg>
          <svg className="overview__icon-star">
            <use xlinkHref={`${sprite}#icon-star`}></use>
          </svg>
          <svg className="overview__icon-star">
            <use xlinkHref={`${sprite}#icon-star`}></use>
          </svg>
          <svg className="overview__icon-star">
            <use xlinkHref={`${sprite}#icon-star`}></use>
          </svg>
          <svg className="overview__icon-star">
            <use xlinkHref={`${sprite}#icon-star`}></use>
          </svg>
        </div>
        <div className="overview__location">
          <svg className="overview__icon-location">
            <use xlinkHref={`${sprite}#icon-location-pin`}></use>
          </svg>
          <button className="btn-inline">Alfufeira, Portugal</button>
        </div>
        <div className="overview__rating">
          <div className="overview__rating-average">8.6</div>
          <div className="overview__rating-count">429 votes</div>
        </div>
      </div>
    </main>
  );
};
