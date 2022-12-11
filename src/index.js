export default class ErrorRepository {
  constructor() {
      this.errors = new Map([
        [1, 'Ошибка сервера'],
        [2, 'Ошибка ввода'],
        [3, 'Ошибка вывода'],
        [4, 'Ошибка'],
      ]);
  }

  translate(code) {
    if (!this.errors.has(code)) {
      throw new Error('Unknown error')
    } else {
      return this.errors.get(code);
    }
  }
}