import { Header } from "../Components/Header";
import { Player } from "../Components/Player";

import "../Styles/global.scss";
import styles from "../Styles/app.module.scss";

import { PlayerContextProvider } from "../contexts/playerContext";

function MyApp({ Component, pageProps }) {
  return (
    <PlayerContextProvider>
      <div className={styles.wrapper}>
        <main>
          <Header />
          <Component {...pageProps} />
        </main>
        <Player />
      </div>
    </PlayerContextProvider>
  );
}

export default MyApp;
