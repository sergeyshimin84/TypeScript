export class Collection<V, K extends number | string | symbol = string> {
  protected items: Partial<Record<K, V>> = {}

  public get size(): number {
    return Object.keys(this.items).length
  }

  public set(key: K, value: V): void {
    this.items[key] = value
  }

  public get(key: K): V | null {
    return this.items[key] ?? null
  }

  public has(key: K): boolean {
    return this.items[key] != null
  }

  public delete(key: K): boolean {
    if (this.has(key)) {
      delete this.items[key]
      return true
    }

    return false
  }

  public clear(): void {
    this.items = {} as Record<K, V>
  }
}
