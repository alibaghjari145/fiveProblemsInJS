export function isBalance(input) {
    let result = null
    let char1 = 0
    let char2 = 0
    let char3 = 0
    for (i = 0; i < input.length; i++) {
        let myChar = input[i]
        if (myChar === '(') {
            char1 += 1
        } else if (myChar === ')') {
            char1 -= 1
            if (char1 < 0) {
                return result = 'Input is not balance'
            }
        } else if (myChar === '[') {
            char2 += 1
        } else if (myChar === ']') {
            char2 -= 1
            if (char2 < 0) {
                return result = 'Input is not balance'
            }
        } else if (myChar === '{') {
            char3 += 1
        } else if (myChar === '}') {
            char3 -= 1
            if (char3 < 0) {
                return result = 'Input is not balance'
            }
        }
    }
    let sum = char3 + char2 + char1
    if (sum != 0) {
        return result = 'Input is not balance'
    }
    result = 'Input is balance!'
    return result
}