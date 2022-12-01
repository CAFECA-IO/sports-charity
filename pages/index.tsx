import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

import MainNavigation from "./components/header/main_navigation";
import EventList from "./components/events/event_list";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>SportsTW</title>
        <meta name="description" content="Sports Public Welfare Platform" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>
        <MainNavigation />
      </div>

      <main className={styles.main}>
        <span className={styles.flexslider}>
          <img src="/green.png" alt="2021 麥寮第一屆馬拉松活動" />
        </span>

        <div>
          <EventList />
        </div>

        <div className={styles.news}>
          <h2>最新消息</h2>
          <div className={styles.grid}>
            <a href="" className={styles.newsbox}>
              <img src="/green.png" alt=""></img>
              <h2>標題</h2>
              <p>內容</p>
              <h4>閱讀全文 </h4>
            </a>
          </div>
        </div>
      </main>

      <footer className={styles.footer}>
        <a href="https://cafeca.io" target="_blank" rel="noopener noreferrer">
          Powered by{" "}
          <span>
            <Image src="/cafeca.svg" alt="CAFECA Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
}
