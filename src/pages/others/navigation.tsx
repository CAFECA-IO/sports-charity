import styles from "../../styles/navigation.module.css";
import Image from "next/image";

import MainNavigation from "../../components/header/main_navigation";
import Footer from "../../components/footer/footer";

function NavPage() {
  return (
    <div>
      <MainNavigation />

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
            <a href="/others">其他資訊</a>{" "}
            <Image
              src="/arrowright.svg"
              alt="arrow"
              width={10}
              height={10}
            ></Image>
            <a href="/others/navigation">網站導覽</a>
          </nav>
          <h1>網站導覽</h1>
        </span>
        <div className={styles.content}>
          <p>
            本網站依照「無障礙網頁開發規範」原則設計，遵循無障礙網站設計之規範提供網頁導盲磚（:::）、網站導覽（Site
            Navigator）、鍵盤快速鍵（Access
            Key）等設計方式。下列為本網站使用鍵盤快速鍵（Access
            Key）操作方式說明：
            <br />
            <br />
            本網站的便捷鍵（Accesskey，也稱為快速鍵）設定如下： <br />
            <br />
            Alt +
            U：上方選單連結區，此區塊列有功能選單連結及各語言版本選單連結。
            <br />
            Alt + C：中間主要內容顯示區，此區塊呈現各網頁的資訊內容。
            <br /> Alt + B：下方選單連結區，此區塊列有功能選單連結。
          </p>
          <div className={styles.flexbox}>
            <div className={styles.ticket}>
              <p>1. 活動專區</p>
              <ul>
                <li>
                  <a href="">1-1. 講座</a>
                </li>
                <li>
                  <a href="">1-2. 體驗</a>
                </li>
                <li>
                  <a href="">1-3. 課程</a>
                </li>
                <li>
                  <a href="">1-4. 展覽</a>
                </li>
                <li>
                  <a href="">1-5. 其他</a>
                </li>
              </ul>
            </div>

            <div className={styles.ticket}>
              <p>2. 公告專區</p>
              <ul>
                <li>
                  <a href="">2-1. 最新消息</a>
                </li>
                <li>
                  <a href="">2-2. 系統公告</a>
                </li>
              </ul>
            </div>

            <div className={styles.ticket}>
              <p>3. 運動統計</p>
              <ul>
                <li>
                  <a href="">3-1. 文本</a>
                </li>
                <li>
                  <a href="">3-2. 圖表</a>
                </li>
              </ul>
            </div>

            <div className={styles.ticket}>
              <p>4. 其他資訊</p>
              <ul>
                <li>
                  <a href="">4-1. 全站搜尋</a>
                </li>
                <li>
                  <a href="">4-2. 網站導覽</a>
                </li>
                <li>
                  <a href="">4-3. 隱私權</a>
                </li>
                <li>
                  <a href="">4-4. 政府網站資料開放宣告</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
export default NavPage;
