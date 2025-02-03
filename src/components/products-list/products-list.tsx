import Product from '../product/product';

import styles from './style.module.scss';

export default function ProductsList({data}) {
  const orderList = JSON.parse(localStorage.getItem('order')) === null ? [] : JSON.parse(localStorage.getItem('order'));

  const addToOrder = (item) => {
    item.amount = 1;
    return orderList.push(item);
  };

  const changeItemAmount = (item) => {
    orderList.forEach((prod) => {
      if (prod.id === item.id) {
        return prod.amount += 1;
      }
    });
  };

  const addToCartHandler = (item) => {
    if (orderList.length === 0) {
      addToOrder(item);
    } else if (orderList.length !== 0 && orderList.some((prod) => prod.id === item.id)) {
      changeItemAmount(item);
    } else if (orderList.length !== 0 && !orderList.some((prod) => prod.id === item.id)) {
      addToOrder(item);
    }
    localStorage.setItem('order', JSON.stringify(orderList));
  };

  return (
    <ul className={styles.products}>
      {data?.map((product) => (
        <Product list={data} product={product} key={product.id} onAddToCart={addToCartHandler} />
      ))}
    </ul>
  );
}
