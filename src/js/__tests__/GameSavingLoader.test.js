
import GameSavingLoader from '../GameSavingLoader';

test('работа класса', async () => {
  const obj = await GameSavingLoader.load();
  expect(obj.save).toEqual('{"id":9,"created":1546300800,"userInfo":{"id":1,name":"Hitman","level":10,"points":2000}}');
});
