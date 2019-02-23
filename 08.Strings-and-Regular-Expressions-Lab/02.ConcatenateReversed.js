function concatenateReversed(input) {
    let str = input.join('');
    let chars = Array.from(str);
    let reversed = chars.reverse().join('');
    console.log(reversed);
}

concatenateReversed(['I', 'am', 'student']);