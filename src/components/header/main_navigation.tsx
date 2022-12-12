import Image from "next/image";
import Link from "next/link";
import Head from "next/head";

import styles from "./main_navigation.module.css";

function MainNavigation() {
  return (
    <header className={styles.header}>
      <Head>
        <title>SportsTW</title>
        <meta name="description" content="Sports Public Welfare Platform" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <input type="checkbox" id="menu_control" />

      <nav className={styles.navl}>
        <ul>
          <li>
            <Link href="/">
              <Image
                className={styles.logo}
                src="/omni_logo.png"
                alt="OMNI SPORTS Logo"
                width={150}
                height={70}
              />
            </Link>
          </li>
          <li>
            <div className={styles.subnav}>
              <button className={styles.subbtn}>活動專區</button>
              <div className={styles.subnavcontent}>
                <a href="/event">講座</a>
                <a href="/event">體驗</a>
                <a href="/event">課程</a>
                <a href="/event">展覽</a>
                <a href="/event">其他</a>
              </div>
            </div>
          </li>
          <li>
            <div className={styles.subnav}>
              <button className={styles.subbtn}>公告專區</button>
              <div className={styles.subnavcontent}>
                <a href="/news">最新消息</a>
                <a href="/news">系統公告</a>
              </div>
            </div>
          </li>
          <li>
            <div className={styles.subnav}>
              <button className={styles.subbtn}>運動統計</button>
              <div className={styles.subnavcontent}>
                <a href="/sport">文本</a>
                <a href="/sport">圖表</a>
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
                  width={20}
                  height={20}
                />
              </button>
            </div>
          </li>
          <li>
            <Link href="/others/navigation">
              <button className={styles.menubtn}>網頁導覽 </button>
            </Link>
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
      <label htmlFor="menu_control" className={styles.burgerbtn}>
        <span>選單</span>
      </label>
    </header>
  );
}
export default MainNavigation;
