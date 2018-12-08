
function multiplicationTable(input) {
    let n = Number(input[0]);

    let html = '<table border="1">\n';


    html += ' <tr><th>x</th>';


    for (i = 0; i < n; i++) {
        html += html + '<th>i</th>'.repeat(n);
    }


    html += '</tr>\n';

    return html
}
console.log(multiplicationTable(['3']));