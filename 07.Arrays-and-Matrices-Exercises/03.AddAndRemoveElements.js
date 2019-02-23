function addRemoveElements(input) {
    let arr = [];
    for (let i = 0; i < input.length; i++) {
        if (input[i] == 'add') {
            arr.push(i+1);
        } else {
            arr.pop()
        }
    }

    if (arr.length == 0) {
        console.log('Empty')
    }

    console.log(arr.join('\n'));
}

addRemoveElements(['add', 'add', 'remove', 'add', 'add']);