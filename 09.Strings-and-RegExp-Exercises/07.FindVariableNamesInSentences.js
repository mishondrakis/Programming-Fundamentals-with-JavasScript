function findVariables(input) {
    let regex = /\b_([A-Za-z0-9]+)\b/g;
    let vars = [];
    let match = regex.exec(input);

    while (match) {
        vars.push(match[1]);
        match = regex.exec(input);
    }

    console.log(vars.join(','));
}

findVariables('The _id and _age variables are both integers.');