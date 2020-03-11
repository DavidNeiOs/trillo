import React from "react";

import Friend1 from "../../img/user-3.jpg";
import Friend2 from "../../img/user-4.jpg";
import Friend3 from "../../img/user-5.jpg";
import Friend4 from "../../img/user-6.jpg";

import User1 from "../../img/user-1.jpg";
import User2 from "../../img/user-2.jpg";

export const Details = () => {
  return (
    <div className="details">
      <div className="description">
        <p className="paragraph">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi nisi
          dignissimos debitis ratione sapiente saepe. Accusantium cumque, quas,
          ut corporis incidunt deserunt quae architecto voluptate.
        </p>
        <p className="paragraph">
          Accusantium cumque, quas, ut corporis incidunt deserunt quae
          architecto voluptate delectus, inventore iure aliquid aliquam.
        </p>
        <ul className="list">
          <li className="list__item">Close to the beach</li>
          <li className="list__item">Breakfast included</li>
          <li className="list__item">Free airport shuttle</li>
          <li className="list__item">Air conditioning and heating</li>
          <li className="list__item">Pets allowed</li>
          <li className="list__item">We speak all languages</li>
          <li className="list__item">Perfect for families</li>
          <li className="list__item">Free wi-fi in all rooms </li>
        </ul>
        <div className="recommend">
          <p className="recommend__count">
            Lucy and 3 other friends recommend this hotel.
          </p>
          <div className="recommend__friends">
            <img src={Friend1} alt="friend 1" className="recommend__photo" />
            <img src={Friend2} alt="friend 2" className="recommend__photo" />
            <img src={Friend3} alt="friend 3" className="recommend__photo" />
            <img src={Friend4} alt="friend 4" className="recommend__photo" />
          </div>
        </div>
      </div>
      <div className="user-reviews">
        <figure className="review">
          <blockquote className="review__text">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga
            doloremque architecto dicta animi, totam, itaque officia ex.
          </blockquote>
          <figcaption className="review__user">
            <img src={User1} alt="user 1" className="review__photo" />
            <div className="review__user-box">
              <p className="review__user-name">Nick Smith</p>
              <p className="review__user-date">Feb 23rd, 2020</p>
            </div>
            <div className="review__rating">7.8</div>
          </figcaption>
        </figure>
        <figure className="review">
          <blockquote className="review__text">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga
            doloremque architecto dicta animi.
          </blockquote>
          <figcaption className="review__user">
            <img src={User2} alt="user 2" className="review__photo" />
            <div className="review__user-box">
              <p className="review__user-name">Mary Thomas</p>
              <p className="review__user-date">Sep 19, 2019</p>
            </div>
            <div className="review__rating">9.3</div>
          </figcaption>
        </figure>

        <button className="btn-inline">
          Show all <span>&rarr;</span>
        </button>
      </div>
    </div>
  );
};
