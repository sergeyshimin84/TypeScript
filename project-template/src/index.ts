import {upperCase} from './string-helper'
import {search, lookup} from 'google-books-search'

console.log(upperCase('Harry Potter'))
console.log(upperCase(''))

console.log(Math.max(1, 2))
console.log(search, lookup)

search('harry potter and the sorcerer\'s stone', function(error, results) {
    if (error) {
        console.log(error)
    } else {
        console.log('Search results', results)
    }
})

search(
    'harry potter and the sorcerer\'s stone',
    {
        type: 'magazines'
    },
    function(error, results) {
        if (error) {
            console.log(error)
        } else {
            console.log('Search results for magazines', results)
        }
    }
)
    
lookup('xieSuAAACAAJ', function(error, result) {
    if (error) {
        console.log(error)
    } else {
        console.log('Lookup by ID result', result)
    }
})