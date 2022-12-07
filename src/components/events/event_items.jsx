import styles from "./event_list.module.css";

function EventItems() {
  return (
    <a href="" className={styles.card}>
      <div className={styles.imgbox}>
        <img src={props.image} alt={props.id}></img>
      </div>
      <h2>{props.title}</h2>
      <p className={styles.intro}>{props.description}</p>
      <p className={styles.sort}>{props.class}</p>
    </a>
  );
}
export default EventItems;
