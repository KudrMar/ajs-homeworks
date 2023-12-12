import { getHealthColor } from '../../js/getHealthColor';
import { sortHealth } from '../../js/sortHealth';

test('getHealthColor healthy', () => {
  const character = {name: 'Маг', health: 90};
  const result = getHealthColor(character);
  expect(result).toBe("healthy");
});

test('getHealthColor wounded', () => {
  const character = {name: 'Маг', health: 30};
  const result = getHealthColor(character);
  expect(result).toBe("wounded");
});

test('getHealthColor critical', () => {
  const character = {name: 'Маг', health: 10};
  const result = getHealthColor(character);
  expect(result).toBe("critical");
});


test('sortHealth', () => {
  const characterArray = [
    {name: 'мечник', health: 10},
    {name: 'маг', health: 100},
    {name: 'лучник', health: 80},
  ];
  const haveToBe = [
    {name: 'маг', health: 100},
    {name: 'лучник', health: 80},
    {name: 'мечник', health: 10},
  ];
  const result = sortHealth(characterArray);
  expect(result).toEqual(haveToBe);
});
