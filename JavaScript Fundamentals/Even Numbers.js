function solve(number) {

    let numbers = +number;

    for (let i = 1; i <= number; i++) {
        if (i % 2 === 0){
            if (i < 10){
                console.log('0' + i);

            }else   {
                console.log(i);
            }
        }
    }
}
solve(12);