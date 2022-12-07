import Image from "next/image";

import styles from "./news_list.module.css";
import contents from "../../../contents.js";

function NewsList() {
  const news = contents[0].main[4].content;

  const newsList = news.map((v) => {
    return (
      <a key={v.id} href="" className={styles.newsbox}>
        <div className={styles.imgbox}>
          <img src={v.image} alt=""></img>
        </div>
        <div className={styles.textarea}>
          <h2>{v.title}</h2>
          <p>{v.description}</p>
          <h4>
            閱讀全文{" "}
            <Image
              src="/arrowright.svg"
              alt="arrow"
              width={10}
              height={10}
            ></Image>
          </h4>
        </div>
      </a>
    );
  });

  return (
    <div className={styles.news}>
      <h2>最新消息</h2>
      <div className={styles.flexbox}>{newsList}</div>
    </div>
  );
}
export default NewsList;
