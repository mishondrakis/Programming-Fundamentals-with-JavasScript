function rotateArray(arr) {
    let rotations = Number(arr[arr.length-1]) ;
    arr.pop();
    let rot = rotations % arr.length;
    for (let i = 0; i < rot; i++) {
        let lastElement = arr[arr.length-1];
        arr.pop();
        arr.unshift(lastElement);
    }

    console.log(arr.join(' '));
}

rotateArray(['1', '2', '3', '4', '2']); //3 4 1 2
rotateArray(['Banana', 'Orange', 'Coconut', 'Apple', '15']);