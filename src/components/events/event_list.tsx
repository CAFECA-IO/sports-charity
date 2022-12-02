import styles from "./event_list.module.css";

function EventList() {
  return (
    <div className={styles.events}>
      <h2>最新活動</h2>
      <div className={styles.grid}>
        <a href="" className={styles.card}>
          <div className={styles.imgbox}>
            <img src="/apple.png" alt=""></img>
          </div>
          <h2>LINE FRIENDS 音樂路跑</h2>
          <p>這個路跑有配樂！2022.9.7 全球首屆</p>
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
  );
}
export default EventList;
