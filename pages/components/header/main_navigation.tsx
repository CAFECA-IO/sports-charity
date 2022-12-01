import Image from "next/image";
import styles from "./main_navigation.module.css";

function MainNavigation() {
  return (
    <header className={styles.header}>
      <nav>
        <ul>
          <li>
            <Image
              className={styles.logo}
              src="/green.png"
              alt="OMNI SPORTS Logo"
              width={150}
              height={70}
            />
          </li>
          <li>
            <a href="">活動專區</a>
          </li>
          <li>
            <a href="">公告專區</a>
          </li>
          <li>
            <a href="">運動統計</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
export default MainNavigation;
