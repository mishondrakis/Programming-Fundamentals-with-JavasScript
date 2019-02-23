function extractSub(input) {
    let result = [];
    let num = Number.MIN_SAFE_INTEGER;
    for (let i = 0; i < input.length; i++) {
        if (input[i] >= num) {
            result.push(input[i]);
            num = input[i];
        }
    }

    console.log(result.join('\n'));
}

extractSub([1, 3, 8, 4, 10, 12, 3, 2, 24]); //1 3 8 10 12 24