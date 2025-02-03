import axios from 'axios';
import { CartItem, Product } from '../types/types';

class CatalogService {
  private cartList: CartItem[];

  constructor() {
    this.cartList = [];
  }

  async getProducts(): Promise<Product[]> {
    const {data} = await axios.get('http://localhost:3000/products');
    return data;
  }

  async getCartProducts(): Promise<CartItem[]> {
    const {data} = await axios.get('http://localhost:3000/cart');
    return data;
  }
}

export const catalogService = new CatalogService();
