function storeCatalogue(dataRows) {
    let initialsMap = new Map();
    for (let dataRow of dataRows) {
        let [productName, productsPrice] = dataRow.split(/\s:\s/g);
        let initial = productName[0];
        if (!initialsMap.has(initial)) {
            initialsMap.set(initial, new Map());
        }

        let productsMap = initialsMap.get(initial);
        productsMap.set(productName, productsPrice);
    }

    let sortedInitials = [...initialsMap.entries()].sort(sortAlphabetically);
    for (let [initial, productsMap] of sortedInitials) {
        console.log(initial);
        let sortedProducts = [...productsMap.entries()].sort();
        for (let [name, price] of sortedProducts) {
            console.log(`${name}: ${price}`)
        }
    }

    function sortAlphabetically(a, b) {
        let firstCriteria = b[0].length - a[0].length;
        if (firstCriteria !== 0) {
            return firstCriteria;
        } else {
            return a[0].localeCompare(b[0]);
        }
    }
}

storeCatalogue([
    'Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10'
]);