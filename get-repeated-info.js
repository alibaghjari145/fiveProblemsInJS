export function getRepeatedInfo(number) {
    let result = number.toString()
    let myObj = {}

    for (i = 0; i < result.length; i++) {
        let myVal = ''
        for (j = 0; j < Number(result[i]); j++) {
            myVal += result[i].toString()
        }

        if (myObj[result[i]] != undefined) {
            myObj[result[i]] = myObj[result[i]] + myVal
        } else {
            myObj[result[i]] = myVal
        }

    }
    result = myObj
    return result
}