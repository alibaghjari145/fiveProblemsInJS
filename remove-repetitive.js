export function removerRepetitive(string) {
    let result = null

    let myArr = []
    myArr[0] = string[0]

    for (i = 0; i < string.length; i++) {
        if (myArr[myArr.length - 1] != string[i]) {
            myArr.push(string[i])
        }
    }

    result = myArr.join('')

    return result
}