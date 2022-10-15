export class Collection<V, K extends number | string | symbol = string> {
    // здесь хранятся все элементы
    items: Partial<Record<K, V>> = {} as Record<K, V>
    // эмулируем свойство size
    get size(): number {
        return Object.keys(this.items).length
    }
    // добавить объект
    set(key: K, value: V): void {
        this.items[key] = value
    }
    // получить объект
    get(key: K): V {
        return this.items[key]
    }
    // проверить, есть ли объект
    has(key: K): boolean {
        return this.items[key] != null
    }
    // удалить объект, если есть
    // вернуть true если удаление выполнялось, false - если нет
    delete(key: K): boolean {
        if (this.has(key)) {
            delete this.items[key]
            return true
        }
    
        return false
    }

    // очистить все элементы
        clear(): void {
            this.items = {} as Record<K, V>
        }
    }
    