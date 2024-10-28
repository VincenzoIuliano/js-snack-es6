console.log('Bonus snack')
function sliceArray(elements,start,end) {

    // controlli da fare:
    // -elementes must be an Array
    // -start, end must be a number (interger)
    // -start must be lower/equal then end
    // end <= elements.length

    const result = []

    for (let i=start; i < end ; i++) {
        const el = elements[i]
        // console.log(i, el)

        result.push(el)
    }

    return result
}

const numbers = [4,6,5,9,7,8,6,1,2]
// number.slice(3,6) sarebbe equivalente

const newNumbers = sliceArray(numbers,3,6) // [9,7,8] risultato atteso
console.log(newNumbers)