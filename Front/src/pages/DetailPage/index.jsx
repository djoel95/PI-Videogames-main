import { VideoGameDetails } from "../../components";
import style from "./styles.module.css";
import { NavBar } from "../../components";

const DetailPage = () => {
  return (
    <>
      <div className={style.container}>
        <NavBar />
        <div className={style.table}>
          <VideoGameDetails/>
        </div>
      </div>
    </>
  );
};

export default DetailPage;
