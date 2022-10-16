import { books } from './book-collection';
import { Book } from './book'
import { BuyCallback } from './types'

export function serialize(value: unknown) {
if (value == null) {
return value + ''
}
// unknown не даст использовать
// name, genre и price без проверки
if (value instanceof Book) {
return `${value.name}, ${value.genre}, ${value.price}`
}
// остальные типы будем просто
// приводить к строке
return value;
}

export function showRating(enitiry: { rating: number}) {
    if(enitiry.rating === null) {
        return 'not rated yet'
    }

    const roundRating = Math.round(enitiry.rating)
    let rating = ''

    for(let i = 0; i < roundRating; i++) {
        rating += '⭐';
    }

    return `${rating} ${enitiry.rating.toFixed(2)}`
}

export function haveNewBook(): boolean {
    //Прописать логику
    return true
}

export function addToShelf(book: Book, shelfName = 'favorite') {
    // логика добавления книги на полку
}

export function markAsRead(...books: Book[]): void {
    // передаем массив книг, будуь отмечаться как прочитанные
    console.log(books.length)
}

export function buyRequest(book: Book) {
    const transactionId = Math.round.toString();
    return Promise.resolve(transactionId);
}

export function buy(book: Book, callback: BuyCallback) {
    buyRequest(book).then(id => {
        callback(null, id);
    }).catch((err) => {
        callback(err);
    });
}