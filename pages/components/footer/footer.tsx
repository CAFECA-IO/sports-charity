import Image from "next/image";

import styles from "./footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.grid}>
        <div className={styles.logobox}>
          <Image
            src="/green.png"
            alt="OMNI SPORTS Logo"
            width={230}
            height={100}
          />
          <div className={styles.textarea}>
            <p>111001臺北市士林區至善路二段221號</p>
            <p>交通指南</p>
            <p>111001臺北市士林區力行街11號 文藝園區</p>
            <p>(02)2881-2021、(02)6610-3600</p>
          </div>
        </div>
      </div>
      <a href="https://cafeca.io" target="_blank" rel="noopener noreferrer">
        Powered by
        <span>
          <Image src="/cafeca.svg" alt="CAFECA Logo" width={72} height={20} />
        </span>
      </a>
    </footer>
  );
}
export default Footer;
