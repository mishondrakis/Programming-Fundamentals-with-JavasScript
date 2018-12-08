function solve(arr)
{

    let totalIncome = 0;
    
    function printResult(coins,drink,price) {
        if (coins >= price){
            console.log(`You ordered ${drink}. Price: ${price.toFixed(2)} Change: ${(coins - price).toFixed(2)}`);
            totalIncome += price;
        }
        else {
            console.log(`Not enough money for ${drink}. Need ${(price - coins).toFixed(2)}`);
        }
    }

    for (let i = 0; i < arr.length; i++){
        let currentOrder = arr[i].split(', ');

        let coins = +currentOrder[0];
        let typeOfDrink = currentOrder[1];
        let price;
        let milk = false;
        let sugar = +currentOrder[currentOrder.length-1];

        let milkPrice = 0;
        let sugarPrice = 0;

        if (typeOfDrink === 'coffee'){
            let typeOfCoffee = currentOrder[2];

            if (typeOfCoffee === 'caffeine'){
                price = 0.8;
            }
            if (typeOfCoffee === 'decaf'){
                price = 0.9;
            }
            if (currentOrder.length === 5){
                milk = true;
            }
        }else if (typeOfDrink === 'tea'){

            if (currentOrder.length === 4){
                milk = true;
            }
            price = 0.8;
        }

        if (milk){
            milkPrice = + (10/100) * price;
            milkPrice = + milkPrice.toFixed(1);
        }

        if (sugar !== 0){
            sugarPrice = 0.1;
        }
        else{
            sugarPrice = 0;
        }
        price +=milkPrice;
        price += sugarPrice;

        printResult(coins,typeOfDrink,price);
    }

    console.log(`Income Report: ${totalIncome.toFixed(2)}`);
}

solve(['1.00, coffee, caffeine, milk, 4',
    '0.40, tea, milk, 2',
    '1.00, coffee, decaf, 0']
);

