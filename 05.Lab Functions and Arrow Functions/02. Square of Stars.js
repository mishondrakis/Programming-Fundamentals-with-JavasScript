function sa(input) {
    if (!isNaN(input[0])) {
        for (let row = 0; row < Number(input[0]); row++) {
            console.log("*" + " *".repeat(Number(input[0]) - 1));
        }
    }
    else {
        for (let row = 0; row < 5; row++) {
            console.log("*" + " *".repeat(5 - 1));
        }
    }
}

sa(['q2']);