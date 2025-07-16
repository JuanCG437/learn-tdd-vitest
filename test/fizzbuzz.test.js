import { describe, expect, it } from 'vitest';
import { fizzbuzz } from '../src/fizzbuzz';

describe('fizzbuzz', () => {
    // This test is redundant and has been
    // subsequently deactivated
    /* it('should be a function', () => {
        expect(typeof fizzbuzz).toBe('function')
    }) */

    it('should throw if not number is provided as parameter', () => {
        expect(() => fizzbuzz()).toThrow()
    })

    it('should throw a specific error message if not number is provided', () => {
        expect(() => fizzbuzz(NaN)).toThrow('parameter provided must be a number')
    })

    it('should return 2 if number provided is 2', () => {
        expect(fizzbuzz(2)).toBe(2)
    })

    it('should return "fizz" if number provided is multiple of 3', () => {
        expect(fizzbuzz(6)).toBe('Fizz')
        expect(fizzbuzz(9)).toBe('Fizz')
        expect(fizzbuzz(12)).toBe('Fizz')
    })

    it('should return "Buzz" if number provided is multiple of 5', () => {
        expect(fizzbuzz(10)).toBe('Buzz')
    })

    it('should return "FizzBuzz" if number provided is multiple of 3 y 5', () => {
        expect(fizzbuzz(15)).toBe('FizzBuzz')
        expect(fizzbuzz(30)).toBe('FizzBuzz')
    })

    it('should return "Buzzwoff" if number provided is multiple of 5 y 7', () => {
        expect(fizzbuzz(35)).toBe('Buzzwoff')
    })

    /*
    it('should throw if input is not a numer', () => {
        expect(() => fizzbuzz('a')).toThrow('number must be a number');
    
    });

    it('should return "Fizz" if number is divisible by 3', () => {
        expect(fizzbuzz(9)).toBe('Fizz');
    });

    it('should return "FizzBuzz" if number is divisible by 3 and 5', () => {
        expect(fizzbuzz(15)).toBe('FizzBuzz');
    });

    it('should return the number as a string if not divisible by 3 or 5', ()=> {
        expect(fizzbuzz(7)).toBe('7');
    });
    */
});