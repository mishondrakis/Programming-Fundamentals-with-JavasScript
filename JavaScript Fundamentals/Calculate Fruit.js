function buyFruit(fruit,gramFruit,price) {

    let kgFruit = gramFruit /1000;
    let sum = price * kgFruit;

    console.log(`I need ${sum.toFixed(2)} leva to buy ${kgFruit.toFixed(2)} kilograms ${fruit}.`);
}

buyFruit('orange',2500,1.80);