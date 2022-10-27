import { Author } from './store/domain/author.js'
import { Book } from './store/domain/book.js'
import { Genre } from './store/domain/genre.js'
import { SearchFilter } from './store/domain/search-filter.js'
import { BukvoedProvider } from './store/providers/bukvoed/bukvoed-provider.js'
import { OzonProvider } from './store/providers/ozon/ozon-provider.js'

const ozon = new OzonProvider()
const bukvoed = new BukvoedProvider()

// создаём общий фильтр для всех источников
const filter: SearchFilter = {
  name: 'it',
  genre: Genre.Horror,
  author: new Author('Stephen', 'King')
}

// описываем логику сортировки по цене
function sortByPrice(one: Book, two: Book) {
  if (one.price > two.price) {
    return 1
  } else if (one.price < two.price) {
    return -1
  } else {
    return 0
  }
}

// запрашиваем разные источники по единому протоколу
Promise.all([
  ozon.find(filter),
  bukvoed.find(filter)
]).then((results) => {
  // мерджим все результаты в один
  const allResults: Book[] = [].concat(results[0], results[1])
  // работаем с ними как с единым целым
  allResults.sort(sortByPrice)
})
