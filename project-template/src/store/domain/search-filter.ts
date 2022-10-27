import { Author } from './author.js'
import { Genre } from './genre.js'

/**
 * Протокол фильтра, с которым должен работать каждый провайдер
 */
export interface SearchFilter {
  name: string
  author?: Author
  genre?: Genre
}
