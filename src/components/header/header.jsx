import { Link, useLocation } from 'react-router-dom';

import styles from './style.module.scss';
import logo from '../../assets/image/svg/logo-main.svg'
import arrow from '../../assets/image/svg/arrow.svg';

import Button from '../ui/button';

export default function Header() {
  const location = useLocation();

  const endPoints = {
    main: location.pathname === '/',
    catalog:  location.pathname === '/catalog',
    cart:  location.pathname === '/cart',
  }

  return (
    <div className={styles.header}>
      <div className={styles.logo}>
        {
          endPoints.main
          ?
          <Link to='/' style={{
            pointerEvents: 'none'
          }}>
            <img src={logo} width={170} height={21} alt="логотип 'California'" />
          </Link>
          :
          <Link to='/'>
            <img src={logo} width={170} height={21} alt="логотип 'California'" />
          </Link>
        }

      </div>
      <ul className={styles.nav}>
        {
          endPoints.catalog
          ?
          <li className={styles.active}>
            <Link to='/catalog'>All products</Link>
          </li>
          :
          <li>
            <Link to='/catalog'>All products</Link>
          </li>
        }
        <li className={styles.parent}>
          <span href="#">
            Solutions
            <img src={arrow} width={12} height={8} alt="" />
            <ul className={styles.submenu}>
              <li>
                <a href="#">item 1</a>
              </li>
              <li>
                <a href="#">item 2</a>
              </li>
              <li>
                <a href="#">item 3</a>
              </li>
            </ul>
          </span>
        </li>
      </ul>
      <ul className={styles.tools}>
        <li>
          <Button icon='search' width={30} height={30} />
        </li>
          {
            endPoints.cart
            ?
            <li className={`${styles.active} ${styles.cart}`}>
              <Link to='/cart'>
                <Button icon='trash' width={50} height={30} />
              </Link>
            </li>
            :
            <li className={styles.cart}>
              <Link to='/cart'>
                <Button icon='trash' width={50} height={30} />
              </Link>
            </li>
          }
      </ul>
    </div>
  )
}
