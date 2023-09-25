import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import style from "./styles.module.css";
import { FaDownload, FaShare } from "react-icons/fa";


const Detail = () => {
  const { id } = useParams();
  const [videoGame, setVideoGame] = useState({});
  const [backgroundImage, setBackgroundImage] = useState("");


  useEffect(() => {
    axios(`http://localhost:3001/videogames/${id}`).then(({ data }) => {
      if (data.background_image) {
        setBackgroundImage(data.background_image);
      } else {
        window.alert("No hay personajes con ese ID");
      }
      console.log(data);
      setVideoGame(data);

    });

    return () => {

      setVideoGame({});
      setBackgroundImage("");
    };
  }, [id]);

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = videoGame?.image;
    link.download = `${videoGame?.name}.jpg`;
    link.click();
  };

  const handleShare = () => {
    const url = window.location.href;
    navigator.clipboard.writeText(url);
    alert("¡URL copiada al portapapeles!");
  };

  if (!videoGame.name) {
    return null;
  }

  return (
    <div
      className={style.detailContainerForm}
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <div className={style.container}>
        <h2>{videoGame.name}</h2>
        <div className={style.containerImage}>
          <img
            className={style.img}
            src={
              videoGame.background_image
                ? videoGame.background_image
                : videoGame.image
            }
            alt="not found"
          />
        </div>
        <div className={style.buttonsContainer}>
          <button onChange={handleDownload}>
            <FaDownload />
            Download
          </button>
          <button onChange={handleShare}>
            <FaShare />
            Share
          </button>
        </div>
        <div className={style.detailContainerGroup}>
          <div className={style.containerBaseText}>
            <h4>Release Date: {videoGame.released}</h4>
            <h4>Rating: {videoGame.rating}</h4>
            <h4>Platforms: {videoGame.platforms}</h4> {/* Display the platforms */}
            <h4>Genres: {videoGame.genres}</h4> {/* Display the genres */}
            <h4 dangerouslySetInnerHTML={{ __html: videoGame.description }}></h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;