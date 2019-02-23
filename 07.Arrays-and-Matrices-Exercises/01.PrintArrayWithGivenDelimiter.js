function printArray(arr) {
    let delimiter = arr[arr.length-1];
    arr.pop();
    console.log(arr.join(delimiter));
}

printArray(['One', 'Two', 'Three', 'Four', 'Five', '-']); //One-Two-Three-Four-Five