function solveSameNumbers(number) {


    number = number.toString();
    let isTrue = true;
    let firstElement = number[0];
    let sum = +firstElement;

    for (let i = 1; i < number.length; i++) {
        if (number[i] !== firstElement){
            isTrue = false;
        }
        sum += +number[i];
    }
    console.log(isTrue);
    console.log(sum);
}

solveSameNumbers(1234);