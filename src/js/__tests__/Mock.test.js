
import GameSavingLoader from '../GameSavingLoader';
import read from '../reader';

jest.mock('../reader');// имитация модуля read/ превращает функции в пустые, ниже заставляем ее возвращать что-то определенное

beforeEach(() => {
  jest.resetAllMocks(); // обнуление моков

  // read.mockReturnValue({}) функция read будет возвращать обькт. не undefined.
  // То есть кидаем заглушку и возвращаем что хотим
  // console.log(getLevel())
});


test(' если вернет rejected', async () => {
  const err = new Error('error');
  read.mockRejectedValue(err);
  const obj = await GameSavingLoader.load();
  expect(obj).toEqual(err);
});
