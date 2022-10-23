import { Genre } from './constannts';
import { Reviews, Author } from './types'

interface BookValues {
    name: string;
    genre: Genre;
    price: number;
    author: Author;
    reviews?: Reviews;
    rating: number;
}

interface IBook extends BookValues {
    showAuthor: () => void;
}

export class Book implements IBook {
    name: string;
    genre: Genre;
    price: number;
    author: Author;
    reviews: Reviews;
    rating: number;

    constructor ({ 
        name, 
        genre, 
        price, 
        author,
        rating,
        reviews = [], 
        }: BookValues) {
        this.name = name;
        this.genre = genre;
        this.price = price;
        this.author = author;
        this.reviews = reviews;
        this.rating = rating;
    }

    showAuthor = () => {
        console.log(this.author)
    }
}
