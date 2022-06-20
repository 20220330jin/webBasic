let paragraphElement = document.querySelector('p');
console.log(paragraphElement);

function changeParagraphText(){
    paragraphElement.textContent = 'Clicked';
}

paragraphElement.addEventListener('click', changeParagraphText); // callback function

let inputElement = document.querySelector('input');
console.log(inputElement);

function retrieveUserInput(){
    let enteredText = inputElement.value;
    console.log(enteredText);
}

inputElement.addEventListener('input',retrieveUserInput);