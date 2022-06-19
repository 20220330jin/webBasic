let paragraphElement = document.querySelector('p');
console.log(paragraphElement);

function changeParagraphText(){
    paragraphElement.textContent = 'Clicked';
}

paragraphElement.addEventListener('click', changeParagraphText); // callback function