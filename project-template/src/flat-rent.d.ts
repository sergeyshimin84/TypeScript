declare module 'flat-rent-sdk' {

    export type backendPort = 3040
    export type localStorageKey = 'flat-rent-db' | string
    
    export interface database {
        id: string,
        title: string,
        details: string,
        photos: string[],
        coordinates: number[],
        bookedDates: string[],
        price: number
    }

    export function cloneDate(date: string): string

    export function addDays(date: string, days:string): string

    export interface FlatRentSdk {
        get: {
            id: string
        }
        search: {
            parameters: {
                city: string
                checkInDate: Date
                checkOutDate: Date
                priceLimit?: number | undefined
            }
        }
        book: {
            flatId: number
            checkInDate: Date
            checkOutDate: Date
        }
        _assertDatesAreCorrect: {
            checkInDate: Date
            checkOutDate: Date
        }
        _resetTime: {
            date: Date
        }
        _calculateDifferenceInDays: {
            startDate: string
            endDate: string
        }
        _generateDateRange: {
            from: string
            to: string
        }
        _generateTransactionId: number
        _areAllDatesAvailable: {
            flat: string
            dateRange: string
        }
        _formatFlatObject: {
            flat: string
            nightNumber: number
        }
        _readDatabase: string | undefined
        _writeDatabase: {
            database: string
        }
        _syncDatabase: {
            database: string
        }
    }
}