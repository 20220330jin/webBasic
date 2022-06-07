// console.log(window.document);

console.log(document);
console.dir(document);

// console.log(document.body.children[1]);

console.dir(document.body)
console.dir(document.body.children)

document.body.children[1].children[0].href = 'https://google.com';

console.log('query')

let anchorElement = document.getElementById('external-link');

console.log(anchorElement);
console.log(anchorElement.href);

let anchorElementByQuery = document.querySelector('#external-link');

anchorElementByQuery.href = 'https://www.naver.com';

console.log(anchorElementByQuery);