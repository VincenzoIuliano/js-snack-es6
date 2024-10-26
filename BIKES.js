console.log('Object Snack')

// CREO UN ARRAY DI OGGETT: OGNI OGGETTO E' UNA BICI DA CORSA

let bikes = [
    {
        'name': 'Decathlon',
        'weight' : 4,
    },
    {
       ' name': 'Cisalfa',
        'weight' : 20,
    },
    {
        'name' : 'Nike',
        'weight' : 10,
    },
]

// console.log(bikes)

// peso di riferimento, per esempio prima bicicletta
let biciLeggera = bikes[0]
// console.log(biciLeggera)
// ciclo per scorrere tutti gli elementi dell'array
for (let i = 0; i < bikes.length; i++) {
    const elementoCorrente = bikes[i]
    // console.log(elementoCorrente)
    if (elementoCorrente.weight < biciLeggera.weight) {
        biciLeggera=elementoCorrente
    } 
}

console.log(biciLeggera)
// condizione che verifichi se il riferimento è da aggiornare - confronto riferimento con peso elemento i