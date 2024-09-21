import styles from './style.module.scss';

import image from '../../assets/image/promo-image.jpg'

export default function Promo() {
  return (
    <div className={styles.promo}>
      <div className={styles.text}>
        <h1>The new phones are here take a look.</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque in est dui, aliquam, tempor. Faucibus morbi turpis.</p>
      </div>
      <button type='button' className={styles.button}>Explore</button>
      <img src={image} width={647} height={550} alt="" />
    </div>
  )
}
