function DNAex(arr) {
    let genes = {};
    let line = arr.shift();

    while (line != 'Stop!') {
        let pattern = /([a-z!@#$?]+)=([\d]+)--([\d]+)<<([\w]+)/;
        let result = pattern.exec(line);
        if (result !== null) {
            let name = result[1];
            let nameLength = parseInt(result[2]);
            name = name.replace(/[!@#$?]/g,'');
            if (name.length == nameLength) {
                let geneCount = parseInt(result[3]);
                let organism = result[4];
                if (!genes.hasOwnProperty(organism)) {
                    genes[organism] = 0;
                }
                genes[organism] += geneCount;
            }
        }
        line = arr.shift();
    }
    let keysSorted = Object.keys(genes).sort(function(a,b){return genes[b]-genes[a]});
    for (let key of keysSorted) {
        console.log(key + ' has genome size of ' + genes[key]);
    }
}

DNAex(["!@ab?si?di!a@=7--152<<human",
    "b!etu?la@=6--321<<dog",
    "!curtob@acter##ium$=14--230<<dog",
    "!some@thin@g##=9<<human",
    "Stop!"]);
