const gifts1 = [3, 1, 2, 3, 4, 2, 5]
const gifts2 = [6, 5, 5, 5, 5]
const gifts3 = []

export const preparedGift = (list) => {
    if (!Array.isArray(list)) {
        throw new Error('input must be an array')
    }

    if (!list.every(Number.isInteger)) {
        throw new Error('All items must be integers')
    }
    
    return [...new Set(list)].sort((a, b) => a - b)
}

console.log(preparedGift(gifts1))
console.log(preparedGift(gifts2))
console.log(preparedGift(gifts3))