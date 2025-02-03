export interface Product {
  image: string,
  title: string,
  description: string,
  price: string,
  id: string
}

export interface CartItem {
  image: string,
  title: string,
  description: string,
  price: string,
  id: string
  amount: number
}
