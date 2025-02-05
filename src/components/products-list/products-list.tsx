import React from 'react';

import Product from '../product/product';

import styles from './style.module.scss';

import { ProductType } from '../../types/types';

interface ProductListPropTypes {
  data: ProductType[]
}

export default function ProductsList({data}: ProductListPropTypes) {
  const orderList = JSON.parse(localStorage.getItem('order') || '[]') === null ? [] : JSON.parse(localStorage.getItem('order') || '[]');

  const addToOrder = (item: ProductType) => {
    item.amount = 1;
    return orderList.push(item);
  };

  const changeItemAmount = (item: ProductType) => {
    orderList.forEach((prod: ProductType) => {
      if (prod.id === item.id) {
        return prod.amount += 1;
      }
    });
  };

  const addToCartHandler = (item: ProductType) => {
    if (orderList.length === 0) {
      addToOrder(item);
    } else if (orderList.length !== 0 && orderList.some((prod: ProductType) => prod.id === item.id)) {
      changeItemAmount(item);
    } else if (orderList.length !== 0 && !orderList.some((prod: ProductType) => prod.id === item.id)) {
      addToOrder(item);
    }
    localStorage.setItem('order', JSON.stringify(orderList));
  };

  return (
    <ul className={styles.products}>
      {data?.map((product) => (
        <Product product={product} key={product.id} onAddToCart={addToCartHandler} />
      ))}
    </ul>
  );
}
