import { Book } from './book'
import { Genre } from './constannts'

export const books = [
  new Book({
    name: 'Harry Potter and the Philosopher\'s Stone',
    genre: Genre.Fantasy,
    price: 980,
    author: { lastName: 'Joanne', firstName: 'Rowling' },
    rating: 4.6
  }),
//   new Book({
//     name: 'Lord of the Ring',
//     genre: 'fantasy',
//     price: 1001,
//     author: 'John Ronald Reuel Tolkien'
//   }),
//   new Book({
//     name: 'How to be productive',
//     genre: 'lifestyle',
//     price: 500,
//     author: ''
//   }),
//   new Book({
//     name: 'Game of Thrones',
//     genre: 'fantasy',
//     price: 999,
//     author: ''
//   }),
];