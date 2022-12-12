import { useEffect, useState } from "react";

import EventItems from "./event_items";
import styles from "./event_list.module.css";
import contents from "../../../contents";

function EventList() {
  const events = contents[0].main[2].content;

  const eventList = events.map((v) => {
    return (
      <EventItems
        key={v.id}
        id={v.id}
        image={v.image}
        title={v.title}
        description={v.description}
        type={v.type}
      />
      //console.log(v.type);
      /*<a key={v.key} href={`/events/${v.id}`} className={styles.card}>
    <div className={styles.imgbox}>
      <img src={v.image} alt={v.id}></img>
    </div>
    <h2>{v.title}</h2>
    <p className={styles.intro}>{v.description}</p>
    <p className={styles.sort}>{v.type}</p>
  </a>;*/
    );
  });
  //console.log(eventList);
  return (
    <div className={styles.events}>
      <h1>最新活動</h1>
      {eventList}
    </div>
  );
}
export default EventList;
