import { Link } from 'react-router-dom';

import styles from './style.module.scss';

import laptop from '../../assets/image/laptop.png';
import watch from '../../assets/image/watch.png';
import phone from '../../assets/image/phone.png';
import tablet from '../../assets/image/tablet.png';

export default function Categories() {
  return (
    <div className={styles.categories}>
      <div className={styles.title}>
        <h2>Shop our latest offers and categories</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque in est dui, aliquam, tempor. Faucibus morbi turpis. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>

      <ul className={styles.list}>
        <li className={`${styles.laptop} ${styles.item}`}>
          <Link to='/catalog'>
            <img src={laptop} width={500} height={337} alt="ноутбук" />
            <div className={styles.description}>
              <p>Laptops</p>
              <h3>True Laptop Solution</h3>
            </div>
          </Link>
        </li>
        <li className={`${styles.watch} ${styles.item}`}>
          <Link to='/catalog'>
            <img src={watch} width={381} height={270} alt="часы" />
            <div className={styles.description}>
              <p>Watch</p>
              <h3>Not just stylisht</h3>
            </div>
          </Link>
        </li>
        <li className={`${styles.phone} ${styles.item}`}>
          <Link to='/catalog'>
            <img src={phone} width={312} height={367} alt="телефон" />
            <div className={styles.description}>
              <p>Phones</p>
              <h3>Your day to day life</h3>
            </div>
          </Link>
        </li>
        <li className={`${styles.tablet} ${styles.item}`}>
          <Link to='/catalog'>
            <img src={tablet} width={312} height={425} alt="планшет" />
            <div className={styles.description}>
              <p>Tablet</p>
              <h3>Empower your work</h3>
            </div>
          </Link>
        </li>
      </ul>
    </div>
  )
}
