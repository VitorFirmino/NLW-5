import Header from '../components/Header';
import Player from '../components/Player';
import { PlayerContextProvider } from '../contexts/PlayerContexts';
import { ThemeProvider } from '../contexts/ThemeContext';


import styles from '../styles/app.module.scss'
import '../styles/global.scss';

function MyApp({ Component, pageProps }) {
    return (
      <ThemeProvider>
      <PlayerContextProvider>
      <div className={styles.appWrapper}>
      <main>
        <Header />
        <Component {...pageProps} />
      </main>
      <Player />
    </div>
    </PlayerContextProvider>
    </ThemeProvider>
    )
};

export default MyApp
