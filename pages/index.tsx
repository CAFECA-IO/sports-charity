import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

import MainNavigation from "./components/header/main_navigation";

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

        <div className={styles.events}>
          <h2>最新活動</h2>
          <div className={styles.grid}>
            <a href="" className={styles.card}>
              <div className={styles.imgbox}>
                <img src="/apple.png" alt=""></img>
              </div>
              <h2>LINE FRIENDS 音樂路跑</h2>
              <p>這個路跑有配樂</p>
              <h4>其他</h4>
            </a>

            <a href="" className={styles.card}>
              <div className={styles.imgbox}>
                <img src="/vercel.svg" alt=""></img>
              </div>
              <h2>運動 x 科技 x 設計 系列講座</h2>
              <p></p>
              <h4>講座</h4>
            </a>

            <a href="" className={styles.card}>
              <div className={styles.imgbox}>
                <img src="/green.png" alt=""></img>
              </div>
              <h2>台北國際運動及健身展</h2>
              <p></p>
              <h4>展覽</h4>
            </a>

            <a href="" className={styles.card}>
              <div className={styles.imgbox}>
                <img src="/green.png" alt=""></img>
              </div>
              <h2>運動星球能量營</h2>
              <p></p>
              <h4>課程</h4>
            </a>

            <a href="" className={styles.card}>
              <div className={styles.imgbox}>
                <img src="/green.png" alt=""></img>
              </div>
              <h2>向海致敬-區域性水域體驗活動</h2>
              <p></p>
              <h4>體驗</h4>
            </a>

            <a href="" className={styles.card}>
              <div className={styles.imgbox}>
                <img src="/green.png" alt=""></img>
              </div>
              <h2>黃阿瑪要跑不跑的路跑</h2>
              <p></p>
              <h4>其他</h4>
            </a>
          </div>
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
