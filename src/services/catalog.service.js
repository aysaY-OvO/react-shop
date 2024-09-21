import axios from 'axios';

class CatalogService {
  constructor() {
    this.cartList = [];
  }

  async getProducts() {
    const {data} = await axios.get('http://localhost:3000/products');
    return data;
  }

  async getCartProducts() {
    const {data} = await axios.get('http://localhost:3000/cart');
    return data;
  }
}

export const catalogService = new CatalogService();
