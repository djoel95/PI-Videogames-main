import style from './styles.module.css';

const Loader = () => {
  return (
    <div className={style.overlay}>
      <div className={style.container}>
        <div className={style.customLoader}></div>
      </div>
    </div>
  )
}

export default Loader;