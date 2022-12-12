import styles from "./event_items.module.css";

function EventItems(props) {
  return (
    <a href={`/event/${props.id}`} className={styles.card}>
      <div className={styles.imgbox}>
        <img src={props.image} alt={props.id}></img>
      </div>
      <h2>{props.title}</h2>
      <p className={styles.intro}>{props.description}</p>
      <p className={styles.sort}>{props.type}</p>
    </a>
  );
}
export default EventItems;
