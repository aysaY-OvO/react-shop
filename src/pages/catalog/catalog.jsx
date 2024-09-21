import Header from '../../components/header/header';
import ProductsList from '../../components/products-list/products-list';
import { catalogService } from '../../services/catalog.service';
import { useQuery } from '@tanstack/react-query';

export default function Catalog() {
  const {data} = useQuery({
    queryKey: ['products'],
    queryFn: () => catalogService.getProducts()
  })

  return (
    <div className='wrapper'>
      <Header/>
      <ProductsList data={data} />
    </div>
  )
}
