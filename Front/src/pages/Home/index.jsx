import { useDispatch } from "react-redux";
import { NavBar, Cards } from "../../components/";
import style from "./styles.module.css";
import { useEffect, useState } from "react";
import { getAllVideogames } from "../../store/actions";

const Home = () => {
 
 
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllVideogames());
  }, []);

  return (
    <>
      <div className={style.container}>
        <NavBar />
        <div className={style.table}>
          <Cards />
        </div>
      </div>
    </>
  );
};

export default Home;
