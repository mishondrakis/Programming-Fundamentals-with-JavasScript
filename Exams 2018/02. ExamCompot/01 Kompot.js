function input(arr) {
    let cherryKg = 0;
    let peachKg = 0;
    let plumKg = 0;
    let fruitsForRakia = 0;


    for (let line of arr) {

        let [fruit, quantity] = line.split(/\s+/g); // we may have more than one empty space.

        switch (fruit) {
            case 'cherry':
                cherryKg += +quantity;
                break;
            case 'peach':
                peachKg += +quantity;
                break;
            case 'plum':
                plumKg += +quantity;
                break;

            default:
                fruitsForRakia += +quantity;
                break;
        }
    }
    let cherryKompots = Math.floor(((cherryKg * 1000) / 9) / 25);
    let peachKompots = Math.floor(((peachKg * 1000) / 140) / 2.5);
    let plumKompots = Math.floor(((plumKg * 1000) / 20) / 10);

    let rakiaLitters = fruitsForRakia * 0.2;

    console.log(`Cherry kompots:${cherryKompots}`);
    console.log(`Peach kompots:${peachKompots}`);
    console.log(`Plum kompots:${plumKompots}`);
    console.log(`Rakia litters:${rakiaLitters.toFixed(2)}`);
}

input(['cherry 1.2',
    'peach 2.2',
    'plum 5.2',
    'peach 0.1',
    'cherry 0.2',
    'cherry 5.0',
    'plum 10',
    'cherry 20.0',
    'papaya 20']
);