import style from "./styles.module.css";
import { Link } from "react-router-dom";
import video from "../../assets/videogamesbackground.mp4";

const Landing = () => {
  return (
    <>
      <div className={style.container}>
        <video className={style.video} src={video} autoPlay loop muted />
        <section className={style.landing}>
          <div className={style.welcome}>
            <h1 className={style.title}>The Game Catalog</h1>
            <Link to={"/games"} className={style.button}>
              Enter
            </Link>
            <div className="welcome__box" />
          </div>
        </section>
      </div>
    </>
  );
};

export default Landing;
