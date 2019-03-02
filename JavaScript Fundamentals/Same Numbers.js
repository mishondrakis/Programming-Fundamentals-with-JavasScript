function solve(number) {

    number = number.toString();
    let firstElement = number[0];
    let sum = +firstElement;
    let result  = true;

    for (let i = 1; i < number.length; i++) {

        if (number[i] !== firstElement){
            result = false;
        }
        sum += +number[i]
    }
    console.log(result);
    console.log(sum);
}
solve(22222);
