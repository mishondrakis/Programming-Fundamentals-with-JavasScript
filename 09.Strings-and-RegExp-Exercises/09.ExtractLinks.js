function extractLinks(arr) {
    let validLinks = [];
    let pattern = /www\.([A-Za-z\d\-]+)(\.[a-z]+)+/g;
    for (let sentence of arr) {
        let match = pattern.exec(sentence);
        while (match) {
            validLinks.push(match[0]);
            match = pattern.exec(sentence);
        }
    }

    console.log(validLinks.join('\n'));
}

extractLinks(
    [
        'Join WebStars now for free, at www.web-stars.com',
        'You can also support our partners:',
        'Internet - www.internet.com',
        'WebSpiders - www.webspiders101.com',
        'Sentinel - www.sentinel.-ko'
    ]);