import Image from "next/image";

import styles from "./news_list.module.css";

function NewsList() {
  return (
    <div className={styles.news}>
      <h2>最新消息</h2>
      <div className={styles.grid}>
        <a href="" className={styles.newsbox}>
          <div className={styles.imgbox}>
            <img src="/news-1.png" alt=""></img>
          </div>
          <div className={styles.textarea}>
            <h2>標題1</h2>
            <p>
              容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容
            </p>
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

        <a href="" className={styles.newsbox}>
          <div className={styles.imgbox}>
            <img src="/news-2.png" alt=""></img>
          </div>
          <div className={styles.textarea}>
            <h2>標題2</h2>
            <p>
              內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容
            </p>
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

        <a href="" className={styles.newsbox}>
          <div className={styles.imgbox}>
            <img src="/news-3.png" alt=""></img>
          </div>
          <div className={styles.textarea}>
            <h2>標題3</h2>
            <p>
              內容內容內容內容內容內內容內容內容內容容內容內容內容內容內容內容內容內容
            </p>
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

        <a href="" className={styles.newsbox}>
          <div className={styles.imgbox}>
            <img src="/news-4.png" alt=""></img>
          </div>
          <div className={styles.textarea}>
            <h2>標題4</h2>
            <p>內容內容內容內容內容內容內容內容內容內容內容內容內容內容</p>
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
      </div>
    </div>
  );
}
export default NewsList;
