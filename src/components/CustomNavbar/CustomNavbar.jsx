import React, {useEffect, useState} from 'react';
import BurgerButton from './BurgerButton';
import {Link} from 'react-router-dom';
import styles from './CustomNavbar.module.css';
import Logo from '../Logo';
import {Container} from 'react-bootstrap';
import ThemeToggle from '../ThemeToggle';
import SearchInput from '../SearchInput';
import UserButtons from '../UserButtons';

const CustomNavbar = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);


  const toggleMenu = () => {
    setIsOpenMenu((prevState) => !prevState);
    document.querySelector('body').classList.toggle('modal-open');
  }

  const handleClickMenuItem = () => {
    setIsOpenMenu(false);
  }

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Очистка слушателя события при размонтировании компонента
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`${styles.root} ${scrolled ? styles.scrolled : ''}`}>
      <Container>
        <div className={styles.navbar}>
          <div className={styles.left}>
            <div className={styles.logo_container}>
              <Link to="/">
                <Logo/>
              </Link>
              <div className={styles.logo_rect}></div>
            </div>
            <div className={`${styles.navMenu_container} ${isOpenMenu ? styles.open : ''}`}>
              <nav className={`${styles.navMenu}`}>
                <ul className={styles.list}>
                  <li className={styles.listItem} onClick={handleClickMenuItem}>
                    <Link to="/catalog">Каталог</Link>
                  </li>
                  <li className={styles.listItem} onClick={handleClickMenuItem}>
                    <Link to="/brands">Бренды</Link>
                  </li>
                  <li className={styles.listItem} onClick={handleClickMenuItem}>
                    <Link to="/about">О сайте</Link>
                  </li>
                  <li className={styles.listItem} onClick={handleClickMenuItem}>
                    <Link to="/contact">Контакты</Link>
                  </li>
                </ul>
              </nav>
              <div className={styles.theme_container}>
                <ThemeToggle className={styles.themeToggle}/>
                <span className={styles.copy}>© Yousuf</span>
              </div>
            </div>
          </div>
          <div className={styles.actions}>
            <SearchInput formClassName={styles.searchInput}/>
            <UserButtons className={styles.actions} />
          </div>
          <BurgerButton open={isOpenMenu} onClick={toggleMenu} className={styles.burgerBtn} />
        </div>
      </Container>
    </div>
  );
};

export default CustomNavbar;
