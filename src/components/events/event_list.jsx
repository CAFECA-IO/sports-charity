import { useEffect, useState } from "react";

import EventItems from "./event_items";
import styles from "./event_list.module.css";
import contents from "../../../contents";

/* const data = [
  { title: "event title", content: "event content", type: "etc" },
  { title: "event title", content: "event content", type: "etc" },
];
 */
function EventList() {
  //console.log(contents);
  const events = contents[0].main[2].content;

  const eventList = events.map((v) => {
    return (
      <a key={v.id} href="" className={styles.card}>
        <div className={styles.imgbox}>
          <img src={v.image} alt={v.id}></img>
        </div>
        <h2>{v.title}</h2>
        <p className={styles.intro}>{v.description}</p>
        <p className={styles.sort}>{v.type}</p>
      </a>
    );
  });

  return (
    <div className={styles.events}>
      <h2>最新活動</h2>
      <div className={styles.grid}>{eventList}</div>
    </div>
  );
}
export default EventList;
