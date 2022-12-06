import styles from "./layout.module.css";

function Layout(props) {
  return <div className={styles.main}>{props.children}</div>;
}
export default Layout;
