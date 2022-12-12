import Image from "next/image";

import styles from "./news_items.module.css";

function NewsItems(props) {
  return (
    <a key={props.id} href="" className={styles.newsbox}>
      <div className={styles.imgbox}>
        <img src={props.image} alt=""></img>
      </div>
      <div className={styles.textarea}>
        <h2>{props.title}</h2>
        <p>{props.description}</p>
        <h4>
          閱讀全文{" "}
          <Image
            className={styles.arrow}
            src="/arrowright.svg"
            alt="arrow"
            width={10}
            height={10}
          ></Image>
          <Image
            className={styles.arrowred}
            src="/arrowrightred.svg"
            alt="arrow"
            width={10}
            height={10}
          ></Image>
        </h4>
      </div>
    </a>
  );
}

export default NewsItems;
