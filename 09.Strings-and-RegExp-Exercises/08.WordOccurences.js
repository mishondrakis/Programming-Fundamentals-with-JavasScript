function wordOccurrences(text,word) {
    let pattern = new RegExp(`\\b${word}\\b`,'gi');
    let matches = text.match(pattern);
    if (matches) {
        console.log(matches.length)
    } else {
        console.log(0);
    }
}

wordOccurrences('There was one. Therefore I bought it. I wouldn’t buy it otherwise.', 'there'); //1