import GameSaving from './GameSaving';
import json from './parser';
import read from './reader';


export default class GameSavingLoader {
  static async load() {
    try {
      const data = await read();
      const value = await json(data);
      const save = await new GameSaving(JSON.parse(value));
      // console.log(save);
      return save;
    } catch (error) {
      return error;
    }
  }
}
