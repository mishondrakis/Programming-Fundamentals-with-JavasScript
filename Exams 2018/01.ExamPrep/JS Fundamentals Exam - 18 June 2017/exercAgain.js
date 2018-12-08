function solve(input) {

    let resultCoffe = {};

    for (let line of input) {

        let [command, brandCoffee, coffeeName, expDate, quatity] = line.split(', ');

        switch (command) {
            case 'IN':
                if (!resultCoffe.hasOwnProperty(brandCoffee)) {
                    resultCoffe[brandCoffee] = {};
                    resultCoffe[brandCoffee][coffeeName] = expDate;
                    resultCoffe[brandCoffee][coffeeName][expDate] = +quatity;


                    if (!resultCoffe[brandCoffee].hasOwnProperty(coffeeName)) {

                        resultCoffe[brandCoffee][coffeeName] = expDate;
                        resultCoffe[brandCoffee][coffeeName][expDate] = +quatity;
                    }
                }
                else {
                    if (!resultCoffe[brandCoffee].hasOwnProperty(coffeeName)) {

                        resultCoffe[brandCoffee][coffeeName] = expDate;
                        resultCoffe[brandCoffee][coffeeName][expDate] = +quatity;
                    }
                    else {
                        Object.keys(expDate).sort((a,b) => {
                            let dif = a.localeCompare(b)
                            if (dif === -1){
                                resultCoffe[brandCoffee][coffeeName][expDate] = +quatity;
                            } else if (dif === 0){
                                resultCoffe[brandCoffee][coffeeName][expDate] += +quatity;
                            }

                        });


                    }
                }
        }


    }

}


solve([
    "IN, Batdorf , Espresso, 2025-05-25, 20",
    "IN, Folgers, Black Silk, 2023-03-01, 14",
    "IN, Lavazza, Crema e Gusto, 2023-05-01, 6",
   "IN, Lavazza, Crema e Gusto, 2023-05-02, 25",
   // "IN, Folgers, Black Silk, 2022-01-01, 10",
   // "IN, Lavazza, Intenso, 2022-07-19, 20",
    //"OUT, Dallmayr, Espresso, 2022-07-19, 5",
    //"OUT, Dallmayr, Crema, 2022-07-19, 5",
    //"OUT, Lavazza, Crema e Gusto, 2020-01-28, 2",
    //"REPORT",
    //"INSPECTION",
]);
