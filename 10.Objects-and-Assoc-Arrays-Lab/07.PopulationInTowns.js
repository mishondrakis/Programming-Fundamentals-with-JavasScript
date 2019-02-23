function populationInTowns(strArr) {
    let towns = new Map();
    for (let row of strArr) {
        let [town, population] = row.split(/\s*<->\s*/);
        if (!towns.has(town)) {
            towns.set(town, 0);
        }
        towns.set(town, towns.get(town) + Number(population));

    }

    for (let [town, sum] of towns){
        console.log(town + " : " + sum);
    }
}

populationInTowns(
    [
        'Istanbul <-> 100000',
        'Honk Kong <-> 2100004',
        'Jerusalem <-> 2352344',
        'Mexico City <-> 23401925',
        'Istanbul <-> 1000'
    ]
);