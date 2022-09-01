import { GameSaving } from '../GameSaving';

test('Positive test of the GameSaving class', () => {
  const save = new GameSaving(9, 1546300800, {
    id: 1, name: 'Hitman', level: 10, points: 2000,
  });
  expect(save).toEqual(
    {
      id: 9,
      created: 1546300800,
      userInfo: {
        id: 1, name: 'Hitman', level: 10, points: 2000,
      },
    },
  );
});
