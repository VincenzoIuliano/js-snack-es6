console.log('Object Snack')

// CREO UN ARRAY CONTENTE COME OGGETTI DELLE SQUADRE DI CALCIO CON DELLE CARATTERISTICHE CHE ASSEGNO SUCCESSIVAEMNTE

let footballClubs = [
    {
        'nome' : 'Inter',
        'puntifatti' : 0 ,
        'fallisubiti' : 0,
    },
    {
        'nome' : 'Milan',
        'puntifatti' : 0,
        'fallisubiti' : 0,
    },
    {
        'nome' : 'Juventus',
        'puntifatti' : 0,
        'fallisubiti' : 0,
    },
    {
        'nome' : 'Napoli',
        'puntifatti' : 0,
        'fallisubiti' : 0,
    },
]

// ASSEGNO NUMERI RANDOM AI PARAMENTRI A 0

for (let i=0 ; i < footballClubs.length ; i++) {
    footballClubs[i]["puntifatti"]=Math.round(Math.random()*100 + 1);
    footballClubs[i]["fallisubiti"]=Math.round(Math.random()*100 + 1);
}

console.log(footballClubs)

let newArray = []

for (let i = 0; i < footballClubs.length; i++) {
    newArray.push(footballClubs[i].nome);
    newArray.push(footballClubs[i].puntifatti);
}

console.log(newArray)