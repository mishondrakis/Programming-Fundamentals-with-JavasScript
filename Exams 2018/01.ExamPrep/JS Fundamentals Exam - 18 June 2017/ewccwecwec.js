function arr(input) {

    for (let line of input) {

        let products = line[0].split(',');
        let commands = line[1];
        console.log(products);
    }

}

arr(['chicken', 'steak', 'eggs'],
    ['Serve',
        'Eat',
        'End',
        'Consume 0 1']
);