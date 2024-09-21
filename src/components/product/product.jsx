import Button from '../ui/button';

import styles from './style.module.scss';

export default function Product({product, onAddToCart}) {
  const {description, image, price, title, id} = product;

  return (
    <li id={id} className={styles.product}>
      <img src={image} width={247} height={214} alt="превью товара" />
      <div className={styles.description}>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
      <div className={styles.price}>
        <p>{price}</p>
        <Button icon='trash' width={30} height={30} text={'+ Add to cart'} handler={() => onAddToCart(product)} />
      </div>
    </li>
  );
}
