function das(input) {
    let str = String(input[0]).toUpperCase();
    let outString = str.split(/\W+/g);
    let temp = [];
    for (let each of outString){
        each&& temp.push(each)
    }
    outString=temp;  // object is outString
    console.log(outString.join(', '));
}
das(['Hi, how are you?']);