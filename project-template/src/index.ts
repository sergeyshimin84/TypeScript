import { renderSearchFormBlock } from './search-form'
import { renderSearchStubBlock } from './search-results'
import { renderUserBlock } from './user'
import { renderToast } from './lib'
import { Book } from './book'
import { books } from './book-collection'

window.addEventListener('DOMContentLoaded', () => {
  renderUserBlock('User', '../public/avatar.png', 0);
  renderSearchFormBlock(dateFrom, dateTo);
  renderSearchStubBlock();
  renderToast(
      {text: 'Это пример уведомления. Используйте его при необходимости', type: 'success'},
      {name: 'Понял', handler: () => {console.log('Уведомление закрыто')}}
  )
})

function findSuitableBook (genre: string, pagesLimit: number, multipleRecommendations = true): Book | Book[] {
    const findAlgorithm = (book: Book) => {
      return book.genre === genre && book.pagesAmount <= pagesLimit
    }
  
    if (multipleRecommendations) {
      return books.filter(findAlgorithm)
    } else {
      return books.find(findAlgorithm)
    }
  }
  
  const recommendedBook = findSuitableBook('fantasy', 1000)
  
  if (recommendedBook instanceof Book) {
    console.log(recommendedBook.name)
  } else {
    console.log(recommendedBook[0].name)
  }
