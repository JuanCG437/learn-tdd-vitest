import { describe, expect, it } from 'vitest'
import { preparedGift } from '../src/gift-registry'

describe('preparedGift', () => {
    it('should remove duplicates and sort the array', () => {
        const result = preparedGift([3, 1, 2, 3, 4, 2, 5])
        expect(result).toEqual([1, 2, 3, 4, 5])
    })

    it('should return an empty array if input is empty', () => {
        expect(preparedGift([])).toEqual([])
    })

    it('should return a single-element array if all values are the same', () => {
        expect(preparedGift([5,5,5])).toEqual([5])
    })

    it('should throw if any value is not integer', () => {
        expect(() => preparedGift([1, 2, 3.5])).toThrow('All items must be integers')
    })

    it('should throw if input is not an array', () => {
        expect(() => preparedGift('not an array')).toThrow('input must be an array')
    })
})