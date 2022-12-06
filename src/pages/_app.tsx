import "../styles/globals.css";
import type { AppProps } from "next/app";
import { appWithTranslation } from "next-i18next";
import MainNavigation from "../components/header/main_navigation";
import Footer from "../components/footer/footer";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <MainNavigation />
      <Component {...pageProps} />
      <Footer />
    </>
  );
};
export default appWithTranslation(App);
