function cappyJuice(dataRows) {
    let flavorsObj = {};
    let bottlesObj = {};
    for (let dataRow of dataRows) {
        let dataRowInfo = dataRow.split(/\s=>\s/g);
        let [juiceName, juiceQuantity] = [dataRowInfo[0], Number(dataRowInfo[1])];
        flavorsObj[juiceName] = flavorsObj.hasOwnProperty(juiceName) ? flavorsObj[juiceName] + juiceQuantity : juiceQuantity;
        if (flavorsObj[juiceName] >= 1000) {
            let bottlesCount = Math.floor(flavorsObj[juiceName] / 1000);
            bottlesObj[juiceName] = bottlesCount;
        }
    }

    for (let juiceName in bottlesObj) {
        console.log(`${juiceName} => ${bottlesObj[juiceName]}`);
    }
}

cappyJuice([
    'Kiwi => 234',
    'Pear => 2345',
    'Watermelon => 3456',
    'Kiwi => 4567',
    'Pear => 5678',
    'Watermelon => 6789'
]);