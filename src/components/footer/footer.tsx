import Image from "next/image";

import styles from "./footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.logobox}>
        <Image
          src="/omni_logo.png"
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
      <div className={styles.copyrightbox}>
        <a href="">隱私權</a>
        <a href="">政府網站資料開放宣告</a>
        <p>© 2020 Mockup. All Rights Reserved.</p>
      </div>
      <a href="https://cafeca.io" target="_blank" rel="noopener noreferrer">
        Powered by{" "}
        <Image src="/cafeca.svg" alt="CAFECA Logo" width={72} height={20} />
      </a>
    </footer>
  );
}
export default Footer;
