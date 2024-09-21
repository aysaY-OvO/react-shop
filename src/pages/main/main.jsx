import Header from '../../components/header/header';
import Promo from '../../components/promo/promo';
import Categories from '../../components/categories/categories';

export default function Main() {

  return (
    <div className='wrapper'>
      <Header/>
      <Promo />
      <Categories />
    </div>
  )
}
