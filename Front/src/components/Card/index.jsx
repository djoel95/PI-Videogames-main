import React from 'react';
import style from "./styles.module.css";
import { Link } from "react-router-dom";

const Card = ({ name, image, id, genres, platforms, rating}) => {
  
  return (
    <>
        <Link to={`/games/${id}`}>
      <div className={`${style.Container} ${style.bb} ${style.container}`}>
        <button className={`${style.button} ${style.hidden}`}>{name}</button>
          <img className={`${style.image} ${style.hover}`} src={image} alt="" />
        <div className={style.boxCard}>
          <p className={`${style.text} ${style.hidden} ${style.info}`}>Genres: {genres}</p>
          <p className={`${style.text} ${style.hidden} ${style.info}`}>Platforms: {platforms}</p>
          <p className={`${style.text} ${style.hidden} ${style.info}`}>Rating: {rating}</p>
        </div>
      </div>
        </Link>
    </>
  );
};

export default Card;