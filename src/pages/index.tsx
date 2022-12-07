import styles from "../styles/Home.module.css";
import Flexslider from "../components/flexslider";
import EventList from "../components/events/event_list";
import NewsList from "../components/news/news_list";

export default function Home() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <Flexslider />
        <EventList />
        <NewsList />
      </main>
    </div>
  );
}
