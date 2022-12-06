import Image from "next/image";

import styles from "./main_navigation.module.css";

function MainNavigation() {
  return (
    <header className={styles.header}>
      <nav className={styles.navl}>
        <ul>
          <li>
            <Image
              src="/omni_logo.png"
              alt="OMNI SPORTS Logo"
              width={150}
              height={70}
            />
          </li>
          <li>
            <div className={styles.subnav}>
              <button className={styles.subbtn}>活動專區</button>
              <div className={styles.subnavcontent}>
                <a href="">講座</a>
                <a href="">體驗</a>
                <a href="">課程</a>
                <a href="">展覽</a>
                <a href="">其他</a>
              </div>
            </div>
          </li>
          <li>
            <div className={styles.subnav}>
              <button className={styles.subbtn}>公告專區</button>
              <div className={styles.subnavcontent}>
                <a href="">最新消息</a>
                <a href="">系統公告</a>
              </div>
            </div>
          </li>
          <li>
            <div className={styles.subnav}>
              <button className={styles.subbtn}>運動統計</button>
              <div className={styles.subnavcontent}>
                <a href="">文本</a>
                <a href="">圖表</a>
              </div>
            </div>
          </li>
        </ul>
      </nav>

      <nav className={styles.navr}>
        <ul>
          <li>
            <div className={styles.searchbar}>
              <input id="search" type="search" placeholder="全站搜尋"></input>
              <button>
                <Image
                  src="/search.svg"
                  alt="search btn"
                  width={17}
                  height={17}
                />
              </button>
            </div>
          </li>
          <li>
            <button className={styles.menubtn}>網頁導覽</button>
          </li>
          <li>
            <div className={styles.subnav}>
              <button className={styles.menubtn}>
                Language{" "}
                <Image
                  className={styles.menuarrow}
                  src="/arrowdown.svg"
                  alt="arrow"
                  width={10}
                  height={10}
                ></Image>
              </button>
              <div className={styles.subnavcontent}>
                <a href="">繁體中文</a>
                <a href="">English</a>
              </div>
            </div>
          </li>
        </ul>
      </nav>
    </header>
  );
}
export default MainNavigation;
