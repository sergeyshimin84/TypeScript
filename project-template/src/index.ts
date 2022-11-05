import { Author } from './store/domain/author.js'
import { Book } from './store/domain/book.js'
import { Genre } from './store/domain/genre.js'
import { SearchFilter } from './store/domain/search-filter.js'
import { BukvoedProvider } from './store/providers/bukvoed/bukvoed-provider.js'
import { OzonProvider } from './store/providers/ozon/ozon-provider.js'

const ozon = new OzonProvider()
const bukvoed = new BukvoedProvider()
let book = Book

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
  const allResults: Book[] = []
  allResults.concat(results[0], results[1])
  // работаем с ними как с единым целым
  allResults.sort(sortByPrice)
})

interface RemoveBookFromFavorites {
    // id может быть строкой или числом
    (id: string | number): Promise<string | number>
    }
    // но здесь указывается только string
    // при этом ошибок не возникает
    const removeBook: RemoveBookFromFavorites = (id: string | number) => {
    // здесь должна быть реализация
    return Promise.resolve(id)
}

removeBook.call(null, 5)

// в функции можно свободно использовать this
// однако в данной функции контекст не установлен
// и this будет undefined
function printBookSummary(this: Book, printItalic = false) {
    let openingTag = ''
    let closingTag = ''
    
    if (printItalic) {
        openingTag = '<i>'
        closingTag = '</i>'
    }
    console.log(
        openingTag,
        'Book "' + this.name + '"',
        'in genre "' + this.genre + '"',
        'by ' + this.author.firstName + '' + this.author.lastName + ',',
        this.pages + ' pages',
        '- ' + this.price + ' rub.',
        closingTag
    )
}
// печатаем обычным шрифтом
printBookSummary.call(harryPotter)
// печатаем курсивом
printBookSummary.call(harryPotter, true)

console.log(
    book.name,
    book['author'] == null ? 'UNKNOWN' : book['author'].toUpperCase(),
    book['genre'] == null ? 'UNKNOWN' : book['genre'].toUpperCase()
)

