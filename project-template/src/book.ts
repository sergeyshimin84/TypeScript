import { Product } from './product';
import { Genre } from './constannts';
import { Reviews, Author, BookAuthor } from './types'

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

export class Book implements Ratingable, Product {
    name: string;
    genre: Genre;
    price: number;
    author: BookAuthor;
    reviews: Reviews[];
    rating: number;

    constructor ( 
        name: string,
        genre: Genre,
        price: number,
        author: BookAuthor,
        reviews?: Review[] 
        ): BookValues { 
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
