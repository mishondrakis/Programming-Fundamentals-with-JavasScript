function jsonsTable(json) {
    let data = JSON.parse(json);
    let html = '<table>\n';
    html += ' <tr>';

    console.log(data.join('|'))
}

jsonsTable(`[
    {"name":"Pesho","position":"Promenliva","salary":100000},
    {"name":"Teo","position":"Lecturer","salary":1000},
    {"name":"Georgi","position":"Lecturer","salary":1000}
]`);