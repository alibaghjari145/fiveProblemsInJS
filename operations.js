export function operations(ops) {
    let result = null
    const myArr = ops.split(' ')
    let temp = []
    for (i = 0; i < myArr.length; i++) {
        let char = myArr[i]
        if (char === 'R') {
            temp.pop()
        } else if (char === 'D') {
            temp.push(2 * temp[temp.length - 1])
        } else if (char === '+') {
            let sum = Number(temp[temp.length - 1]) + Number(temp[temp.length - 2])
            temp.push(sum)
        } else {
            temp.push(Number(char))
        }
    }
    for (j = 0; j < temp.length; j++) {
        result += Number(temp[j])
    }

    return result
}