import Header from '../../components/header/header';
import CartList from '../../components/cart-list/cart-list';

export default function CartPage() {
  const cartList = JSON.parse(localStorage.getItem('order'));

  return (
    <div className='wrapper'>
      <Header />
      <CartList cartList={cartList} />
    </div>
  )
}
