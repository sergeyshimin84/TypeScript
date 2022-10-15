import { Ratingable } from './ratingable'

export type BookAuthor = Pick<Author, 'firstName' | 'lastName'>;

export type Reviews = [string, number, string][];

export interface Author extends Ratingable {
    firstName: string
    lastName: string
    birthDate: Date
    booksWritten: number
}

export type BuyCallback = (error?: Error | null, transactionId?: string) => void;