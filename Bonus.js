console.log('Bonus snack')
function sliceArray(elements,start,end) {

    // controlli da fare:
    // -elementes must be an Array
    // -start, end must be a number (interger)
    // -start must be lower/equal then end
    // end <= elements.length

    start= Math.max(start,0) //prendo il valore più grande tra start e 0

    // if (start<0) {
    //     start=0
    // }

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

const newNumbers = sliceArray(numbers,-20,6) // [9,7,8] risultato atteso
console.log(newNumbers)