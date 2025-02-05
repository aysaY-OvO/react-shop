import axios from 'axios';
import { CartItemType, ProductType } from '../types/types';

class CatalogService {
  private cartList: CartItemType[];

  constructor() {
    this.cartList = [];
  }

  async getProducts(): Promise<ProductType[]> {
    const {data} = await axios.get('http://localhost:3000/products');
    return data;
  }

  async getCartProducts(): Promise<CartItemType[]> {
    const {data} = await axios.get('http://localhost:3000/cart');
    return data;
  }
}

export const catalogService = new CatalogService();
