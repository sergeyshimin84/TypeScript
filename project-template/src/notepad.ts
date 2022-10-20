import { Product } from './product.js'

export class Notepad implements Product {
  name: string
  price: number

  constructor(name: string, price: number) {
    this.name = name
    this.price = price
  }

  getProductDescription(): string {
    return `Notepad "${this.name}"`
  }
}
