import EventItems from "./event_items";

import styles from "./event_list.module.css";

function EventList(props: { event: object }) {
  {
    //Object.keys(props.event).map((events, values) => {});
    return (
      <div className={styles.events}>
        <h2>最新活動</h2>
        <div className={styles.grid}>
          {/*console.log(events);
           <EventItems
            key={events.id}
            id={events.id}
            title={events.title}
            image={events.image}
            description={events.description}
            class={events.class}
          /> */}
          <a href="" className={styles.card}>
            <div className={styles.imgbox}>
              <img src="/Image-1.png" alt="event1"></img>
            </div>
            <h2>LINE FRIENDS 音樂路跑</h2>
            <p className={styles.intro}>
              這個路跑有配樂！2022.9.7 全球首屆「LINE FRIENDS
              音樂路跑」登陸台北路跑聯名商品全台獨家推出，等你來報名。
            </p>
            <p className={styles.sort}>其他</p>
          </a>
          <a href="" className={styles.card}>
            <div className={styles.imgbox}>
              <img src="/Image-2.png" alt=""></img>
            </div>
            <h2>運動 x 科技 x 設計 系列講座</h2>
            <p className={styles.intro}>
              本次座談特地邀請實際在運動市場上應用科技的企業代表與專家們，與設研院一同探討科技如何利用設計串聯運動產業，讓大家可以sport
              everywhere！
            </p>
            <p className={styles.sort}>講座</p>
          </a>
          <a href="" className={styles.card}>
            <div className={styles.imgbox}>
              <img src="/Image-3.png" alt=""></img>
            </div>
            <h2>台北國際運動及健身展</h2>
            <p className={styles.intro}>
              2023年3月22-25日 台北南港展覽館2館(台北市南港區經貿二路2號)
            </p>
            <p className={styles.sort}>展覽</p>
          </a>
          <a href="" className={styles.card}>
            <div className={styles.imgbox}>
              <img src="/Image-4.png" alt=""></img>
            </div>
            <h2>運動星球能量營</h2>
            <p className={styles.intro}>
              2022夏令營終於來啦~~爸爸媽媽照過來
              運動星球能量營【三鶯最強團隊X新北最強營隊】
            </p>
            <p className={styles.sort}>課程</p>
          </a>
          <a href="" className={styles.card}>
            <div className={styles.imgbox}>
              <img src="/Image-5.png" alt=""></img>
            </div>
            <h2>向海致敬-區域性水域體驗活動</h2>
            <p className={styles.intro}>
              西灣學院運動與健康教育中心攜手學務處體育與衛生保健組，共同推動國家海洋政策，帶動全民海洋教育，特辦理旨揭體驗活動。
            </p>
            <p className={styles.sort}>體驗</p>
          </a>
          <a href="" className={styles.card}>
            <div className={styles.imgbox}>
              <img src="/Image-6.png" alt=""></img>
            </div>
            <h2>黃阿瑪要跑不跑的路跑</h2>
            <p className={styles.intro}>
              黃阿瑪的後宮生活正式授權，首次大型戶外運動活動號召百萬瑪民動起來，邁開步伐，喵速衝刺！
            </p>
            <p className={styles.sort}>其他</p>
          </a>
        </div>
      </div>
    );
  }
}
export default EventList;
