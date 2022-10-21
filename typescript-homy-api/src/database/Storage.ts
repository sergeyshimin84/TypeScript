// Место хранения.
import {readFile, writeFile} from 'fs';
import {promisify} from 'util';
// Описание хранилища. Используем дженерик. 
export class Storage<D> {
  data: Record<string, D> = {};
// Описали параметры конструктора.
  constructor(private dbFilePath: string, private readKey: string) {}
// Чтение данных.
  public async read() {
    const fileData = await this.readAndParseFile();
// Если тип fileData не object, выводим данные в консоль. Иначе выводим ошибку.
    if (typeof fileData[this.readKey] !== 'object') {
      console.log(fileData[this.readKey]);
      throw Error(`Key "${this.readKey}" of file ${this.dbFilePath} must contain an object.`);
    }

    this.data = fileData[this.readKey];
  }
// Записываем данные.
  public async write() {
    const promisifyWriteFile = promisify(writeFile);
    const fileData = await this.readAndParseFile();
    fileData[this.readKey] = this.data;
// Ожидаем выполнения промиса.
    await promisifyWriteFile(this.dbFilePath, JSON.stringify(fileData));
  }
// Чтение файла. Преобразовываем в объект.
  private async readAndParseFile() {
    const promisifyReadFile = promisify(readFile);
    const fileText = await promisifyReadFile(this.dbFilePath, {encoding: 'utf-8'});
    return JSON.parse(fileText);
  }
}
