function countOccurrences(str, text) {
    let count = 0;
    let index = text.indexOf(str);
    while (index != -1) {
        index++;
        count++;
        index = text.indexOf(str, index);
    }

    console.log(count);
}

countOccurrences('the', 'The quick brown fox jumps over the lay dog.'); //1