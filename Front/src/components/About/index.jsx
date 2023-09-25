import React from "react";
import {
  SiGithub,
  SiReact,
  SiRedux,
  SiReactrouter,
  SiNodedotjs,
  SiExpress,
  SiSequelize,
  SiPostgresql,
  SiAxios,
  SiDotenv,
} from "react-icons/si";
import { useNavigate } from "react-router-dom";
import style from "./styles.module.css";
import { Link } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();
  return (
    <section className={style.about}>
      <div className={style.aboutcontainer}>
        <h1 className={style.aboutTitle}>The Game Catalog</h1>
        <p className={style.aboutText}>
          This was made as a proof of knowledge acquired on the{" "}
          <Link
            to="https://www.soyhenry.com/"
            className={style.aboutLink}>
            SoyHenry's
          </Link>{" "}
          bootcamp by{" "}
          <Link
            to="https://github.com/djoel95"
            className={style.aboutLink}
          >
            Joel Lopez 
          </Link>{" "}
          whit the next technologies...
        </p>
        <div className={style.aboutTecnologies}>
          <div className={style.aboutTecnologiesSide}>
            <h2 className={style.aboutTecnologiesTitle}>FrontEnd</h2>
            <ul className={style.aboutTecnologiesList}>
              <li className={style.aboutTecnologiesItem}>
                <SiReact size={70} />
                <h3>React</h3>
                <div>
                  <small>Version: 18.2.0</small>
                </div>
              </li>
              <li className={style.aboutTecnologiesItem}>
                <SiReact size={70} />
                <h3>React-Icons</h3>
                <div>
                  <small>Version: 4.4.0</small>
                </div>
              </li>
              <li className={style.aboutTecnologiesItem}>
                <SiRedux size={70} />
                <h3>Redux Toolkit</h3>
                <div>
                  <small>Version: 1.8.5</small>
                </div>
              </li>
              <li className={style.aboutTecnologiesItem}>
                <SiRedux size={70} />
                <h3>React-Redux</h3>
                <div>
                  <small>Version: 8.0.2</small>
                </div>
              </li>
              <li className={style.aboutTecnologiesItem}>
                <SiReactrouter size={70} />
                <h3>React-Router</h3>
                <div>
                  <small>Version: 6.4.0</small>
                </div>
              </li>
              <li className={style.aboutTecnologiesItem}>
                <SiAxios size={70} />
                <h3>Axios</h3>
                <div>
                  <small>Version: 1.4.0</small>
                </div>
              </li>
            </ul>
          </div>
          <div className={style.aboutTecnologiesSide}>
            <h2 className={style.aboutTecnologiesTitle}>BackEnd</h2>
            <ul className={style.aboutTecnologiesList}>
              <li className={style.aboutTecnologiesItem}>
                <SiNodedotjs size={70} />
                <h3>Node.js</h3>
                <div>
                  <small>Version: 18.16.0</small>
                </div>
              </li>
              <li className={style.aboutTecnologiesItem}>
                <SiExpress size={70} />
                <h3>Express.js</h3>
                <div>
                  <small>Version: 4.18.2</small>
                </div>
              </li>
              <li className={style.aboutTecnologiesItem}>
                <SiSequelize size={70} />
                <h3>Sequelize</h3>
                <div>
                  <small>Version: 6.32.1</small>
                </div>
              </li>
              <li className={style.aboutTecnologiesItem}>
                <SiPostgresql size={70} />
                <h3>Postgres</h3>
                <div>
                  <small>Version: 14</small>
                </div>
              </li>
              <li className={style.aboutTecnologiesItem}>
                <SiDotenv size={70} />
                <h3>Dotenv</h3>
                <div>
                  <small>Version: 16.3.1</small>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <p className={style.aboutText2}>
          You can find the source code of this project on{" "}
          <Link
            to="https://github.com/chrisvill2312/PI-Videogames"
            className={style.aboutLink}
          >
          <SiGithub /> GitHub
          </Link>
        </p>

      </div>
      <button
        className={style.btn}
        onChange={() => {
          navigate("/videogames");
        }}
      >
        Go back to the game list...
      </button>

    </section>
    
  );
};

export default About;