import Image from "next/image";

import styles from "../styles/flexslider.module.css";

function Flexslider() {
  return (
    <div className={styles.flexslider}>
      <Image
        className={styles.picture}
        src="/placement_area.png"
        alt="2021 麥寮第一屆馬拉松活動"
        width="1920"
        height="800"
      />
    </div>
  );
}
export default Flexslider;
