import Image from "next/image";

import styles from "../../styles/indexpages.module.css";
import contents from "../../../contents.js";

function NewsPage() {
  const allnews = contents[0].main[4].content;

  const newsList = allnews.map((v) => {
    return (
      <a key={v.id} href="" className={styles.newsticket}>
        <h2>{v.title}</h2>
        <label>公告日期 {v.date}</label>
      </a>
    );
  });

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
        <div className={styles.flexbox}>{newsList}</div>
      </div>
    </main>
  );
}
export default NewsPage;
