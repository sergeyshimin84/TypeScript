// Наяальная загрузка.
import {join} from 'path';
import {Place} from '../place/Place';
import {Storage} from '../database/Storage';
import { DateHelper } from '../helpers/DateHelper';
// Востанавливаем данные через асинхронную функцию.
export async function restoreData() {
  const dbPath = join(__dirname, '../../data/db.json');
// Используем дженерики для передачи типов в массив.
  const placeStorage = new Storage<Place>(dbPath, 'places');
  const bookingStorage = new Storage<Record<string, [number[], number[]]>>(dbPath, 'bookings');
  await placeStorage.read();
  await bookingStorage.read();
// Получаем дату.
  const now = new Date();
  const dateFrom = new Date(now.getFullYear(), now.getMonth(), 1);
  const dateTo = new Date(now.getFullYear(), now.getMonth(), 28);
  const availableRange = DateHelper.generateDateRange(dateFrom, dateTo);

  let keys = Object.keys(placeStorage.data);
  for (const key of keys) {
    const place = placeStorage.data[key];
    const dates: number[] = 
    place.availableDates = ;
  }
// Выводим код после завершения промиса.
  await placeStorage.write();
  return placeStorage
}
