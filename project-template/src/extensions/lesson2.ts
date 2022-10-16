import { SearchFormData } from './lesson2';
import { User } from './../user';

export function getUserData (username: string, avatarUrl: string) {
    //Логика получения пользовательских данных из localStorage 
    //по ключу user который содержит объект с полями username и avatarUrl
    return [username, avatarUrl]
};

export function getFavoritesAmount (favoritesAmount: number) {
    //Функция принимает из localStorage ключ favoritesAmount
    //содержащий количество добавленных предметов
    return favoritesAmount
};

export function renderUserBlock (username: string, avatarUrl: string, favoritesAmount?: number) {
    //Функция принимает имя пользователя ссылку на аватар 
    //и количество избранных (не обязательное поле '?').
    //Вывести блок пользователя с этими данными.
    return renderBlock(
        'user-block',
        `
        <div class="header-container">
        <img class="avatar" src="${avatarUrl}" alt="Wade Warren" />
        <div class="info">
            <p class="name">${username}</p>
            <p class="fav">
                <i class="heart-icon${favoritesAmount ? ' active' : ''}"></i>${favoritesAmount}
            </p>
        </div>
        </div>
        `
    )
};

export interface SearchFormData extends User {
    //Написать структуру для полей поиска.
    user: []
    username: string
    avatarUrl: string
    favoritesAmount: number
};

export const form: SearchFormData = {
    user: [],
    username: 'User',
    avatarUrl: '../public/avatar.png',
    favoritesAmount: 3
}

export function searchForm (search: SearchFormData): void {
    //Функция поиска принимает как аргумент переменную интерфейса SearchFormData, выводит
    //полученный аргумент в консоль и ничего не возвращает (void, без return).
    console.log(search)
};