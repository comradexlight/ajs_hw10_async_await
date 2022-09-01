import GameSavingLoader from '../GameSavingLoader';

test('Positive test of the load method of the GameSavingLoader class', async () => {
  const data = await GameSavingLoader.load();
  expect(data).toEqual(
    {
      id: 9,
      created: 1546300800,
      userInfo: {
        id: 1, name: 'Hitman', level: 10, points: 2000,
      },
    },
  );
});
