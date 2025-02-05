import React, {useState} from 'react';

import styles from './style.module.scss';

import CartItem from '../cart-item/cart-item';
import { CartItemType } from '../../types/types';

interface CartListPropTypes {
  cartList: CartItemType[],
}

export default function CartList({ cartList }: CartListPropTypes) {
  let totalPrice: number = 0;
  const [orderPrice, setOrderPrice] = useState(totalPrice);

  const calculateOrderPrice = () => {
    const priceList: number[] = [];
    let amount;

    cartList.forEach((item: CartItemType) => {
      const price = item.price;
      amount = item.amount;
      const compilePrice: number = Number(price.slice(0, -3).replace(',', ''));
      priceList.push(Number(compilePrice * amount));
    });
    totalPrice = priceList.reduce((totalPrice, current) => totalPrice + current, 0);
    setOrderPrice(() => priceList.reduce((totalPrice, current) => totalPrice + current, 0))
  }

  return (
    <div className='wrapper'>
      <div className={styles.container}>
        <div className={styles.title}>
          <h1>Shopping cart</h1>
          <p>This is cart for the item you wish to purchase</p>
        </div>
        <div className={styles.price}>
          <h2>Total price:</h2>
          <hr />
          <p>$ {orderPrice} USD</p>
          <button type='button'>Purchase</button>
        </div>
        <ul className={styles.order}>
          {cartList?.map((item: CartItemType) => (
            <CartItem key={item.id} product={item} cartList={cartList} cartHandler={calculateOrderPrice} />
          ))}
        </ul>
      </div>
    </div>
  )
}
