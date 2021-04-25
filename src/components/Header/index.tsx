import { useContext } from 'react';
import format from 'date-fns/format';
import ptBR from 'date-fns/locale/pt-BR';

import { MdWbSunny } from 'react-icons/md';
import { FaMoon } from 'react-icons/fa';
import { ThemeContext } from '../../contexts/ThemeContext';

import styles from './styles.module.scss'

export default function Header () {
  const { toggleTheme, currentTheme } = useContext(ThemeContext);


  const currentDate = format(new Date(), 'EEEEEE, d MMMM', {
    locale: ptBR,
  });

  return (
    <header className={styles.headerContainer}>
      <img src="/logo.svg" alt="Podcastr"/>

      <p>O melhor para você ouvir, sempre</p>

      <div className={styles.toggleTheme}>
      
      {currentTheme === 'theme-dark' ? <MdWbSunny onClick={toggleTheme} className={styles.iconLight}/> : <FaMoon color="#2E384D" onClick={toggleTheme} className={styles.iconNight}/>}
      </div>
      <span>{currentDate}</span>
    </header>
  );
}