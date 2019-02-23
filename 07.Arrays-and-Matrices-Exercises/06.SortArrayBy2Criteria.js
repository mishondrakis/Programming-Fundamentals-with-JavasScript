function sortArray(arr) {
    arr.sort().sort((a, b) => a.length - b.length);
    console.log(arr.join('\n'))
}

sortArray(['gamma', 'beta', 'alpha' ]); //beta alpha gamma
sortArray(['Isacc', 'Theodor', 'Jack', 'Harrison', 'George]',]);