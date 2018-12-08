function solve(arr) {

    let result = [];

    for (let i = 0; i < arr.length; i++) {

        let current = arr[i];

        if (typeof current === 'number') {
            result.push(current);
        }
        else {
            if (result.length < 2) {
                console.log(`Error: not enough operands!`);
                return;
            }

            let num2 = result.pop();
            let num1 = result.pop();

            switch (current) {
                case '+':
                    result.push(num1 + num2);
                    break;
                case '-':
                    result.push(num1 - num2);
                    break;
                case '/':
                    result.push(num1 / num2);
                    break;
                case '*':
                    result.push(num1 * num2);
                    break;
            }

        }
    }

    if (result.length > 1){
        console.log(`Error: too many operands!`);
    }
    else {
        console.log(result[0]);
    }



}

solve([3, 4, '+']);