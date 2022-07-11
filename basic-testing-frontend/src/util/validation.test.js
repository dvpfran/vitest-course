import { it, expect, describe } from 'vitest';

import { validateStringNotEmpty, validateNumber } from './validation';

describe('validateStringNotEmpty()', () => {
  it('should throw an error because string is empty', () => {
    const input = '';
    const validateFn = () => validateStringNotEmpty(input);
    expect(validateFn).toThrowError();
  });
  
  it('should throw an error with a message that contains a reason (must not be empty)', () => {
    const input = '';
    const validateFn = () => validateStringNotEmpty(input);
    expect(validateFn).toThrowError(/must not be empty/);
  });

  it('should throw an error if any other value than a string is provided', () => {
    const inputNum = 1;
    const inputBool = 1;
    const inputObj = {};

    const validationFnNum = () => validateStringNotEmpty(inputNum);
    const validationFnBool = () => validateStringNotEmpty(inputBool);
    const validationFnObj = () => validateStringNotEmpty(inputObj);

    expect(validationFnNum).toThrow();
    expect(validationFnBool).toThrow();
    expect(validationFnObj).toThrow();
  });
});

describe('validateStringNotEmpty()', () => {
  it('should not throw an error if NaN is provided', () => {
    const input = NaN;
    const validationFn = () => validateNumber(input);
    expect(validationFn).toThrow();
  });

  it('should throw an error with a message that contains a reason (invalid number)', () => {
    const input = NaN;
    const validationFn = () => validateNumber(input);
    expect(validationFn).toThrow()
  });

  it('should throw an error if a non-numeric valeu is provived', () => {
    const input = '1';
    const validationFn = () => validateNumber(input);
    expect(validationFn).toThrow(/Invalid number/);
  });

  it('should not throw an error, if a number is provived', () => {
    const input = 1;
    const validationFn = () => validateNumber(input);
    expect(validationFn).not.toThrow();
  });
});