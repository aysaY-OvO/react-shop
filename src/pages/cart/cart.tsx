import React from 'react';
import Header from '../../components/header/header';
import CartList from '../../components/cart-list/cart-list';

import { CartItem } from '../../types/types';

export default function CartPage() {
  const cartList: CartItem[] = JSON.parse(localStorage.getItem('order') || '[]');

  return (
    <div className='wrapper'>
      <Header />
      <CartList cartList={cartList} />
    </div>
  )
}
