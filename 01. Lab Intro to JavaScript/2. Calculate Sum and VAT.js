function sumVat(input) {
    let sum = 0;
    for(let num of input)
        sum += num;
    console.log("sum = " + sum);
    console.log("Vat = " + sum * 0.20);
    console.log("Total = " + sum * 1.20);
}
console.log(sumVat([1.20, 2.60, 3.50]));