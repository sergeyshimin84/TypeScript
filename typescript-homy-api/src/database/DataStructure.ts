// Структура данных.
import {Place} from '../place/Place';
// Дженерик, places использует тип Record, который принимает строку и Place.
export interface DataStructure {
  places: Record<string, Place>;
}
