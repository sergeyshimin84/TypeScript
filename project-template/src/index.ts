import { Genre } from './constannts';
import { renderSearchFormBlock } from './search-form'
import { renderSearchStubBlock } from './search-results'
import { renderUserBlock } from './user'
import { renderToast } from './lib'
import { Book } from './book'
import { books } from './book-collection'
import { BuyCallback, Reviews } from './types'
import { Genre } from './constannts'
import { buy } from './helpers'

window.addEventListener('DOMContentLoaded', () => {
  renderUserBlock('User', '../public/avatar.png', 0);
  renderSearchFormBlock(dateFrom, dateTo);
  renderSearchStubBlock();
  renderToast(
      {text: 'Это пример уведомления. Используйте его при необходимости', type: 'success'},
      {name: 'Понял', handler: () => {console.log('Уведомление закрыто')}}
  )
})

function findSuitableBook (
    genre: string, 
    pagesLimit: number, 
    multipleRecommendations = true
  ): Book | Book[] | undefined {
    const findAlgorithm = (book: Book) => {
      return book.genre === genre && book.pagesAmount <= pagesLimit;
    };
  
    if (multipleRecommendations) {
      return books.filter(findAlgorithm)
    } else {
      return books.find(findAlgorithm)
    }
  }
  
  const recommendedBook = findSuitableBook('fantasy', 1000);
  
  if (recommendedBook instanceof Book) {
    console.log(recommendedBook.name);
  } 
  
  if (recommendedBook instanceof Array) {
    console.log(recommendedBook);
  }

  const reviews: Reviews = [
    ['John', 5, 'It is my favorite book'],
    ['Mary', 3, 'I expected more from it :('],
    ['Clara', 5, 'Read it again and again!']
    ]

    // const paramsbook = {
    //     name: 'Harry Potter',
    //     genre: Genre.Fantasy,
    //     price: 1000,
    //     reviews,
    //     author: { lastName: 'Joanne', firstName: 'Rowling'},
    // }
    
    const book = new Book(paramsbook);
    console.log(book);

    const callback: BuyCallback = (error, transactionId) => {
        if(error === null || transactionId) {
           console.log('Success') 
        } else {
            console.log('Fail', error)
        }
    };

    buy(book, callback);