import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

import MainNavigation from "../components/header/main_navigation";
import EventList from "../components/events/event_list";
import NewsList from "../components/news/news_list";
import Footer from "../components/footer/footer";

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
          <Image
            src="/placement_area.png"
            alt="2021 麥寮第一屆馬拉松活動"
            width="1920"
            height="800"
          />
        </span>

        <div>
          <EventList />
        </div>

        <div>
          <NewsList />
        </div>
      </main>

      <div>
        <Footer />
      </div>
    </div>
  );
}
