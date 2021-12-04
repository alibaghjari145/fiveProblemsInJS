export function encoder({ inputString, repeatCount }) {
    let result = null
    let myInput = []

    for (j = 0; j < inputString.length; j++) {
        myInput.push(inputString[j])
    }
    let last = myInput.pop()
    myInput.unshift(last)

    for (i = 0; i < repeatCount; i++) {

        let temp = []
        myInput.forEach(e => (
            temp.push(myobj[e].toString())
        ))
        myInput = [...temp]
    }
    return myInput
}
myobj = {
    'a': 'b',
    'b': 'c',
    'c': 'd',
    'd': 'e',
    'e': 'f',
    'f': 'g',
    'g': 'h',
    'h': 'i',
    'i': 'j',
    'j': 'k',
    'k': 'l',
    'l': 'm',
    'm': 'n',
    'n': 'o',
    'o': 'p',
    'p': 'q',
    'q': 'r',
    'r': 's',
    's': 't',
    't': 'u',
    'u': 'v',
    'v': 'w',
    'w': 'x',
    'x': 'y',
    'y': 'z',
    'z': 'a'
}