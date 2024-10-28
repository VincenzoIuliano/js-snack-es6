console.log('Bonus snack')
function sliceArray(elements,start,end) {
    // controlli da fare:
    // -elementes must be an Array
    // -start, end must be a number (interger)
    // -start must be lower/equal then end
    // end <= elements.length

    if (!Array.isArray(elements)) { // ritorna true se quello che gli passiamo è un array
        console.error('Elements must be an array')
    } 
    
    if(isNaN(start) || isNaN(end)) {
        console.error('Start or end not a number')
    }
    
    start= Math.max(start,0) //prendo il valore più grande tra start e 0

    // if (start<0) {
    //     start=0
    // }

    end = Math.min(end, elements.length) // prendo il valore al max quanto elements.length

    // // if (end>elements.length) {
    //     end = elements.length
    // }

    const result = []

    for (let i=start; i < end ; i++) {
        const el = elements[i]
        // console.log(i, el)

        result.push(el)
    };

    return result
}

const numbers = [4,6,5,9,7,8,6,1,2]
// number.slice(start,end) sarebbe equivalente

const newNumbers = sliceArray(numbers,-20,100) 
console.log(newNumbers)