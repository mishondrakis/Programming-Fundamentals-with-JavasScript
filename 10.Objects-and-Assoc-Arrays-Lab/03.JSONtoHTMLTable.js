function jsonToHtml(json) {
    let html = "<table>\n";
    let arr = JSON.parse(json);
    html += " <tr>";
    for (let key of Object.keys(arr[0])) {
        html += `<th>${htmlEscape(key)}</th>`;
    }

        html += "</tr>\n";


    for (let obj of arr) {
        html += '   <tr>';
        Object.keys(obj).forEach(k => html += `<td>${htmlEscape(String(obj[k]))}</td>`);
        html +='</tr>\n';
    }

    html += "</table>";
    console.log(html);


    function htmlEscape(text) {
        let map = {
            '"': '&quot;', '&': '&amp;',
            "'": '&#39;', '<': '&lt;', '>': '&gt;'
        };

        return text.replace(/[\"&'<>]/g, ch => map[ch]);
    }
}

jsonToHtml('[{"Name":"Tomatoes & Chips","Price":2.35},{"Name":"J&B Chocolate","Price":0.96}]');