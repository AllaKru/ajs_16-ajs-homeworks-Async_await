import GameSavingLoader from './GameSavingLoader';


(async () => {
  try {
    const game = await GameSavingLoader.load();
    /* eslint-disable no-console */
    console.log(game);
  } catch (error) {
    /* eslint-disable no-console */
    console.log(error);
  }
})();
