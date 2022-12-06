import Image from "next/image";

import styles from "./news_list.module.css";

function NewsList() {
  return (
    <div className={styles.news}>
      <h2>最新消息</h2>
      <div className={styles.flexbox}>
        <a href="" className={styles.newsbox}>
          <div className={styles.imgbox}>
            <img src="/news-1.png" alt=""></img>
          </div>
          <div className={styles.textarea}>
            <h2>最新消息標題</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
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
            <h2>最新消息標題</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
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
            <h2>最新消息標題</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
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
            <h2>最新消息標題</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
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
      </div>
    </div>
  );
}
export default NewsList;
