import GameSavingLoader from './GameSavingLoader';
import GameSaving from './GameSaving';

(async () => {
  try {
    const saving = await GameSavingLoader.load();
    GameSaving(saving.id, saving.created, saving.userInfo);
  } catch (error) {
    throw new Error(error);
  }
})();
