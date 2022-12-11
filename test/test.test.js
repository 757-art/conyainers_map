import ErrorRepository from "../src/index";

test('Тестируем реализацию ошибки', () => {
    const error = new ErrorRepository();
    expect(error.translate(2)).toBe('Ошибка ввода')
});


test('Тестируем отсутствие ошибки', () => {
    const error = new ErrorRepository();
    expect(() => error.translate(5)).toThrow()
});