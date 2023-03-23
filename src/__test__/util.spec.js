import {
  checkIsEmpty,
  invalidNumber,
  add,
  operation,
  maxNumber,
  areaOfCircle,
  square,
  simpleinterest,
} from '../util';

it('checkIsEmpty returns true for empty string', () => {
  expect(checkIsEmpty('')).toBe(true);
});

it('checkIsEmpty returns false for non-empty string', () => {
  expect(checkIsEmpty('Hello')).toBe(false);
});

it('invalidNumber returns true for NaN', () => {
  expect(invalidNumber(NaN)).toBe(true);
});

it('invalidNumber returns false for valid number', () => {
  expect(invalidNumber(5)).toBe(false);
});

it('add returns the sum of two numbers', () => {
  expect(add(2, 3)).toBe(5);
});

it('operation returns the result of addition', () => {
  expect(operation(2, 3, '+')).toBe(5);
});

it('operation returns the result of subtraction', () => {
  expect(operation(5, 3, '-')).toBe(2);
});

it('operation returns the result of multiplication', () => {
  expect(operation(2, 3, '*')).toBe(6);
});

it('operation returns false for empty inputs', () => {
  expect(operation('', 3, '*')).toBe(false);
});

it('maxNumber returns the maximum number in the array', () => {
  expect(maxNumber([3, 6, 2, 8])).toBe(8);
});

it('maxNumber returns the minimum number in the array if type is set to min', () => {
  expect(maxNumber([3, 6, 2, 8], 'min')).toBe(2);
});

it('areaOfCircle returns the area of a circle for a given radius', () => {
  expect(areaOfCircle(5)).toBe(78.5);
});

it('square returns the square of a given number', () => {
  expect(square(5)).toBe(25);
});

it('simpleinterest returns the simple interest for valid inputs', () => {
  expect(simpleinterest(5000, 5, 3)).toBe(750);
});

it('simpleinterest returns an error message for empty rate input', () => {
  expect(simpleinterest(5000, '', 3)).toBe('Please provide me rate');
});
