import React from "react";
import Logo from "../../img/logo.png";
import sprite from "../../img/sprite.svg";
import userPhoto from "../../img/user.jpg";

export const Header = props => {
  return (
    <header className="header">
      <img src={Logo} alt="Trillo logo" className="logo" />

      <form onSubmit={e => e.preventDefault()} className="search">
        <input
          type="text"
          className="search__input"
          placeholder="Search Hotels"
        />
        <button className="search__button">
          <svg className="search__icon">
            <use xlinkHref={`${sprite}#icon-magnifying-glass`}></use>
          </svg>
        </button>
      </form>

      <nav className="user-nav">
        <div className="user-nav__icon-box">
          <svg className="user-nav__icon">
            <use xlinkHref={`${sprite}#icon-bookmark`}></use>
          </svg>
          <span className="user-nav__notification">7</span>
          <svg className="user-nav__icon">
            <use xlinkHref={`${sprite}#icon-chat`}></use>
          </svg>
          <span className="user-nav__notification">13</span>
        </div>
        <div className="user-nav__user">
          <img src={userPhoto} alt="User" className="user-nav__user-photo" />
          <span className="user-nav__user-name">Jonas</span>
        </div>
      </nav>
    </header>
  );
};
