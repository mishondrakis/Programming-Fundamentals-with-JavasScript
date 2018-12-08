function solve(meals,arg) {

    let mealsEaten = 0;

    for(let line of arg){

        let commands = line.split(' ');

        if (commands[0] === "End"){
            break;
        }

        switch (commands[0]) {
            case "Serve":
                if (meals.length < 1){
                    break;
                }
                let lastMeal = meals.pop();
                console.log(`${lastMeal} served!`);
                break;
            case "Eat":
                if (meals.length < 1){
                    break;
                }
                let firstMeal = meals.shift();
                mealsEaten++;
                console.log(`${firstMeal} eaten`);
            case "Add":
                if (commands[1] === undefined){
                    break;
                }
                meals.unshift(commands[1]);
                break;
            case "Shift":
                let firstIndex = +commands[1];
                let secondIndex = +commands[2];

                if (meals[firstIndex] !== undefined && meals[secondIndex]!== undefined){

                    let firstMeal1 = meals[firstIndex];
                    meals[firstIndex] = meals[secondIndex];
                    meals[secondIndex ] = firstMeal1;
                    break;
                }
            case "Consume":

                let startIndex = +commands[1];
                let lastIndex = +commands[2];

                if (meals[startIndex] !== undefined && meals[lastIndex] !== undefined){

                    let count = lastIndex - startIndex +1 ;
                    meals.splice(startIndex,count);
                    console.log("Burp!");
                    mealsEaten += count;
                }
                break;
        }

    }
    if (meals.length > 0){

        console.log(`Meals left: ${meals.join(', ')}`);
    }else{
        console.log(`The food is gone`);
    }
    console.log(`Meals eaten: ${mealsEaten}`);


}


solve(['chicken','steak', 'eggs'],
    ['Serve',
        'Eat',
        'End',
        'Consume 0 1']);
