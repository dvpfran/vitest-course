import { it, expect, describe } from 'vitest';
import { add } from './math';

describe('add()', () => {
  it('should summarize all number values in an array', () => {
    // AAA
    // Arrange
    const numbers = [1, 2];
  
    // Act
    const result = add(numbers);
    const expectedResult = numbers.reduce((prevValue, curValue) => prevValue + curValue, 0);
  
    // Assert
    expect(result).toBe(expectedResult);
  });
  
  it('should yield NaN if a least one invalid number is provived', () => {
    const inputs = ['invalid', 1];
  
    const result = add(inputs);
  
    expect(result).toBeNaN();
  });
  
  it('shoudl yield a correct sum if an array of numeric string values is provived', () => {
    const numbers = ['1', '2'];
    const result = add(numbers);
    const expectedResult = numbers.reduce((prevValue, curValue) => +prevValue + +curValue, 0);
    expect(result).toBe(expectedResult);
  
  });
  
  it('should yield 0 if an empty arary is provived', () => {
    const numbers = [];
    const result = add(numbers);
    expect(result).toBe(0);
  });
  
  it('should throw an error if no value is passed into the function', () => {
    const resultFn = () => {
      add();
    };
  
    expect(resultFn).toThrow();
  });
  
  it('should throw an error if provived with multiple arguments instead of an array', () => {
    const num1 = 1;
    const num2 = 2;
  
    const result = () => {
      add(num1, num2)
    };
  
    expect(result).toThrow(/is not iterable/);
  });
});
