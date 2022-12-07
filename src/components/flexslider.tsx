import styles from "../styles/flexslider.module.css";

function Flexslider() {
  return (
    <div className={styles.flexslider}>
      <img
        className={styles.picture}
        src="/placement_area.png"
        alt="2021 麥寮第一屆馬拉松活動"
      ></img>
    </div>
  );
}
export default Flexslider;
