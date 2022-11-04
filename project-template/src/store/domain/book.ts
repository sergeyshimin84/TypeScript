import { Author } from './author.js'
import { Genre } from './genre.js'

export class Book {
  constructor(
    private readonly provider: string,
    public readonly originalId: string,
    public readonly name: string,
    public readonly genre: Genre,
    public readonly description: string,
    public readonly pages: number,
    public readonly price: number,
    public readonly author: Author
  ) {}

  /**
   * Возможно совпадение ID в разных источниках
   * Поэтому генерируем ID для внутреннего использования
   * Настоящий ID также доступен через originalId
   */
  get id () {
    return this.provider + '-' + this.originalId
  }

  /**
   * Этот метод можно использовать для установления источника
   */
  public isProvidedBy(providerName: string): boolean {
    return this.provider === providerName
  }
}
