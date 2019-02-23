function printNthElement(arr) {
    let step = Number(arr[arr.length-1]);
    arr.pop();
    for (let i = 0; i < arr.length; i+=step) {
        console.log(arr[i]);
    }
}

printNthElement(['5', '20', '31', '4', '20', '2']); //5 31 20