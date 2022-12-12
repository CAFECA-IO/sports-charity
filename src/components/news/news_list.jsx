import styles from "./news_list.module.css";
import contents from "../../../contents.js";
import NewsItems from "./news_items";

function NewsList() {
  const news = contents[0].main[4].content;

  const newsList = news.map((v) => {
    return (
      <NewsItems
        key={v.id}
        id={v.id}
        image={v.image}
        title={v.title}
        description={v.description}
      />
    );
  });

  return (
    <div className={styles.news}>
      <h1>最新消息</h1>
      {newsList}
    </div>
  );
}
export default NewsList;
