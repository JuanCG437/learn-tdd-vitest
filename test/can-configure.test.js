import { describe, expect, it } from 'vitest'
import { canReconfigure } from '../src/can-configure'

describe('CanReconfigure', () => {
    /* it('should be  a function', () => {
        expect(canConfigure).toBeTypeOf('function')
    }) */

    it('should throw if firts parameter is missing', () => {
        expect(() => canReconfigure()).toThrow()
    })

    it('should throw if second parameter is missing', () => {
        expect(() => canReconfigure('abc')).toThrow()
    })

    it('should throw if second parameter is not a string', () => {
        expect(() => canReconfigure('a', 123)).toThrow()
    })

    it('should return a boolean', () => {
        expect(canReconfigure('a', 'b')).toBeTypeOf('boolean')
    })

    it('should return false if strings provide have different length', () => {
        expect(canReconfigure('abc', 'de')).toBe(false)
    })

    it('should return false if strings provide have different number even with same unique letters', () => {
        expect(canReconfigure('aab', 'ab')).toBe(false)
    })

    it('should return fasle if string provided have different number of unique letters', () => {
        expect(canReconfigure('abc', 'ddd')).toBe(false)
    })

    it('should return false if strings has different order of transformation', () => {
        expect(canReconfigure('XBOX', 'XXBO')).toBe(false)
    })
})