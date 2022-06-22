let paragraphElement = document.querySelector('p');
console.log(paragraphElement);

function changeParagraphText(){
    paragraphElement.textContent = 'Clicked';
}

paragraphElement.addEventListener('click', changeParagraphText); // callback function

let inputElement = document.querySelector('input');
console.log(inputElement);

function retrieveUserInput(event){
    // let enteredText = inputElement.value;
    let enteredText = event.target.value;
    console.log(event);
    console.log(event.target);
    console.log(enteredText);
}

inputElement.addEventListener('input',retrieveUserInput);