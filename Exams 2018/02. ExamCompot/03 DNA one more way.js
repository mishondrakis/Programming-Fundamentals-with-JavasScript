function solve(input) {
    let pattern = /([a-zA-Z!@#$?]+)=(\d+)--(\d+)<<([a-z]+)/g;
    let collection = { };

    for (let i = 0; i < input.length - 1; i++) {
        let currentElement = input[i];

        let matches = pattern.exec(currentElement);

        if (matches) {
            let name = matches[1]
                .replace(new RegExp('\\!', 'g'), '')
                .replace(new RegExp('\\@', 'g'), '')
                .replace(new RegExp('\\#', 'g'), '')
                .replace(new RegExp('\\$', 'g'), '')
                .replace(new RegExp('\\?', 'g'), '');

            let lengthOfName = Number(matches[2]);
            let genomesCount = Number(matches[3]);
            let organism = matches[4];

            if(name.length === lengthOfName) {
                if(collection[organism]) {
                    collection[organism] =
                        collection[organism] + genomesCount;
                } else {
                    collection[organism] = genomesCount;
                }
            }
        }

        pattern.exec();
    }

    let sorted = [];

    for (const organism in collection) {
        sorted.push([organism, collection[organism]]);
    }

    sorted = sorted.sort((first, second) => {
        let firstValue = Number(first[1]);
        let secondValue = Number(second[1]);

        return secondValue - firstValue;
    });

    for (const elem of sorted) {
        console.log(elem[0] + ' has genome size of ' + elem[1]);
    }
}