import { it, expect, describe } from 'vitest';

import { cleanNumbers, transformToNumber } from './numbers';

describe('transformToNumber() ', () => {
  it('should transform a string number to a number of type number', () => {
    const number = '1';
    const result = transformToNumber(number);
    
    expect(result).toBeTypeOf('number');
  });
  
  it('should yield NaN if input is not a number', () => {
    const input = 'a';
    const result = transformToNumber(input);
    
    expect(result).toBeNaN();
  });
});

describe('cleanNumbers()', () => {
  it('should return an array of number values if an array of string number value is provided', () => {
    const numbervalues = ['1', '2'];

    const cleanedNumbers = cleanNumbers(numbervalues);

    expect(cleanedNumbers[0]).toBeTypeOf('number');
  });

  it('should throw an error if an array with at least one empty string is provived', () => {
    const numberValues = ['', 1];

    const cleanFn = () => cleanNumbers(numberValues);

    expect(cleanFn).toThrow();
  });
});