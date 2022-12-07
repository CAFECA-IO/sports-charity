import Image from "next/image";

import styles from "../../styles/indexpages.module.css";
import contents from "../../../contents.js";

function AllEventsPage() {
  const allevents = contents[0].main[2].content;

  const eventlist = allevents.map((v) => {
    return (
      <a key={v.id} href="" className={styles.ticket}>
        <div className={styles.imgbox}>
          <img src={v.image} alt={v.id}></img>
        </div>
        <div className={styles.textbox}>
          <h2>{v.title}</h2>
          <p className={styles.intro}>{v.description}</p>
        </div>
      </a>
    );
  });

  return (
    <div>
      <main className={styles.main}>
        <span className={styles.banner}>
          <nav className={styles.breadcrumb}>
            <a href="/">首頁</a>{" "}
            <Image
              src="/arrowright.svg"
              alt="arrow"
              width={10}
              height={10}
            ></Image>
            <a href="/event">活動專區</a>
          </nav>
          <h1>活動專區</h1>

          <nav className={styles.indexevent}>
            <ul>
              <li>
                <a href="">講座</a>
              </li>
              <li>
                <a href="">體驗</a>
              </li>
              <li>
                <a href="">課程</a>
              </li>
              <li>
                <a href="">展覽</a>
              </li>
              <li>
                <a href="">其他</a>
              </li>
            </ul>
          </nav>
        </span>
        <div className={styles.eventslist}>
          <div className={styles.searchbar}>
            <input id="search" type="search" placeholder="活動搜尋"></input>
            <button>
              <Image
                src="/search.svg"
                alt="search btn"
                width={17}
                height={17}
              />
            </button>
          </div>
          <div className={styles.flexbox}>{eventlist}</div>
        </div>
      </main>
    </div>
  );
}
export default AllEventsPage;
