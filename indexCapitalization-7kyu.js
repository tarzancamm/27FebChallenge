// Given a string and an array of integers representing indices, capitalize all letters at the given indices.

// The input will be a lowercase string with no spaces and an array of digits.


const capitalize = (str, indices) => {
    let arr = str.split('')
    let validIndices = indices

    for (let i = 0; i < indices.length; i++) {
        if (indices[i] > (arr.length - 1)) {
            validIndices.splice(i, 1)
        }
    }

    for (let k = 0; k < validIndices.length; k++) {
        let letter = arr[validIndices[k]]
        arr.splice(validIndices[k], 1, letter.toUpperCase())
    }

    return arr.join('')
}


console.log(capitalize('codewars', [1, 3, 5, 50])) // cOdEwArs