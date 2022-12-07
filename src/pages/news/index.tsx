import Image from "next/image";

import styles from "../../styles/indexpages.module.css";

function NewsPage() {
  return (
    <main className={styles.main}>
      <span className={styles.banner}>
        <nav className={styles.breadcrumb}>
          <a href="/">首頁</a>{" "}
          <Image
            src="/arrowright.svg"
            alt="arrow"
            width={10}
            height={10}
          ></Image>
          <a href="/news">公告專區</a>
        </nav>

        <h1>公告專區</h1>

        <nav className={styles.indexnews}>
          <ul>
            <li>
              <a href="">最新消息</a>
            </li>
            <li>
              <a href="">系統公告</a>
            </li>
          </ul>
        </nav>
      </span>
      <div className={styles.eventslist}>
        <div className={styles.searchbar}>
          <input id="search" type="search" placeholder="公告搜尋"></input>
          <button>
            <Image src="/search.svg" alt="search btn" width={17} height={17} />
          </button>
        </div>
        <div className={styles.flexbox}>
          <a href="" className={styles.newsticket}>
            <h2>公告標題名稱</h2>
            <label>公告日期</label>
          </a>
        </div>
        <div className={styles.flexbox}>
          <a href="" className={styles.newsticket}>
            <h2>公告標題名稱</h2>
            <label>公告日期</label>
          </a>
        </div>
        <div className={styles.flexbox}>
          <a href="" className={styles.newsticket}>
            <h2>公告標題名稱</h2>
            <label>公告日期</label>
          </a>
        </div>
        <div className={styles.flexbox}>
          <a href="" className={styles.newsticket}>
            <h2>公告標題名稱</h2>
            <label>公告日期</label>
          </a>
        </div>
        <div className={styles.flexbox}>
          <a href="" className={styles.newsticket}>
            <h2>公告標題名稱</h2>
            <label>公告日期</label>
          </a>
        </div>
        <div className={styles.flexbox}>
          <a href="" className={styles.newsticket}>
            <h2>公告標題名稱</h2>
            <label>公告日期</label>
          </a>
        </div>
      </div>
    </main>
  );
}
export default NewsPage;
