// console.log(window.document);

console.log(document);
console.dir(document);

// console.log(document.body.children[1]);

console.dir(document.body)
console.dir(document.body.children)

// document.body.children[1].children[0].href = 'https://google.com';

console.log('query')

let anchorElement = document.getElementById('external-link');

console.log(anchorElement);
console.log(anchorElement.href);

// let anchorElementByQuery = document.querySelector('#external-link');

// anchorElementByQuery.href = 'https://www.naver.com';

// console.log(anchorElementByQuery);

console.log('-------------');

// ADD AN ELEMENT
// 1. Create new the new element
let newAnchorElement = document.createElement('a');
newAnchorElement.href = 'https://google.com';
newAnchorElement.textContent = 'go to google';
console.log(newAnchorElement);

// 2.Get access to the parent element that should hold the new element
let firstParagraph = document.querySelector('p');
console.log(firstParagraph);

// 3. Intert new element into the parent element content
firstParagraph.append(newAnchorElement);

// Remove Elements
// 1. Select the element that should be removed
let firstH1Element = document.querySelector('h1');
firstH1Element.remove();
// firstH1Element.parentElement.removeChild(firstH1Element);

// MOVE ELEMENTS

// 1. 
firstParagraph.parentElement.append(firstParagraph)

// innerHTML
console.log(firstParagraph.innerHTML);
console.log(firstParagraph.textContent);

firstParagraph.innerHTML = 'Hi! This is <strong>important</strong>'