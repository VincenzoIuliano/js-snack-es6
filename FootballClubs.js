console.log('Object Snack')

// CREO UN ARRAY CONTENTE COME OGGETTI DELLE SQUADRE DI CALCIO CON DELLE CARATTERISTICHE CHE ASSEGNO SUCCESSIVAEMNTE

let footballClubs = [
    {
        'nome' : 'Inter',
        'punti fatti' : 0 ,
        'falli subiti' : 0,
    },
    {
        'nome' : 'Milan',
        'punti fatti' : 0,
        'falli subiti' : 0,
    },
    {
        'nome' : 'Juventus',
        'punti fatti' : 0,
        'falli subiti' : 0,
    },
    {
        'nome' : 'Napoli',
        'punti fatti' : 0,
        'falli subiti' : 0,
    },
]

// ASSEGNO NUMERI RANDOM AI PARAMENTRI A 0

for (let i=0 ; i < footballClubs.length ; i++) {
    footballClubs[i]["punti fatti"]=Math.round(Math.random()*100 + 1);
    footballClubs[i]["falli subiti"]=Math.round(Math.random()*100 + 1);
}

console.log(footballClubs)