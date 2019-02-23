function splitString(string, delimiter) {
    let result = string.split(delimiter);
    console.log(result.join('\n'));
}

splitString('http://platform.softuni.bg', '.');