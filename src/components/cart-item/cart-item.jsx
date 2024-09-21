import {useState, useEffect} from 'react';

import styles from './style.module.scss';

export default function CartItem({product, cartList, cartHandler}) {
  const {image, price, title, id, amount} = product;

  const [productCount, setProductCount] = useState(amount);
  const [mainClassName, setMainClassName] = useState(styles.item);

  useEffect(() => {
    cartHandler();
  }, []);

  const changeProductAmount = (product) => {
    if (cartList.includes(product)) {
      cartList[cartList.indexOf(product)].amount = product.amount;
    }
    localStorage.setItem('order', JSON.stringify(cartList));
    cartHandler();
  };

  const removeProduct = (product, evt) => {
    const target = evt.target;
    if (cartList.includes(product)) {
      cartList.splice(cartList[cartList.indexOf(product)], 1);
    }
    localStorage.setItem('order', JSON.stringify(cartList));
    setMainClassName(`${mainClassName} ${styles.fade}`);
    setTimeout(() => {
      target.closest('li').remove();
    }, 300);
    cartHandler();
  };

  const setMinValue = ({target}) => {
    let { value, min } = target;
    value = Math.max(Number(min), Number(value));
    setProductCount(value);
  };

  const onClickMinusHandler = (num) => {
    setProductCount(num > 0 ? num - 1 : num = 0);
    product.amount !== 0 ? product.amount -= 1 : product.amount = 0;
    changeProductAmount(product);
  }

  const onClickPlusHandler = (num) => {
    setProductCount(num + 1);
    product.amount += 1;
    changeProductAmount(product);
  };

  return (
    <li className={mainClassName} id={id}>
      <img src={image} width={150} height={110} alt="" />
      <div>
        <p>{title}</p>
      </div>
      <div className={styles.price}>
        <p>{price}</p>
      </div>
      <div className={styles.count}>
        <button type='button' onClick={() => onClickMinusHandler(productCount)} className={styles.minus}>-</button>
        <input type="number" value={productCount} onChange={setMinValue} aria-label='количество товара' readOnly />
        <button type='button' onClick={() => onClickPlusHandler(productCount)} className={styles.plus}>+</button>
      </div>
      <div className={styles.remove}>
        <button onClick={(evt) => removeProduct(product, evt)} type='button'>+</button>
      </div>
    </li>
  )
}
