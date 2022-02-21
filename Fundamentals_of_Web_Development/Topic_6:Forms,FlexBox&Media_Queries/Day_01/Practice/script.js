const INPUT_TEXT = document.querySelector("#input-text");
const INPUT_CHECKBOX = document.querySelector("#input-checkbox");
const HREF_LINK = document.querySelector("#href");

HREF_LINK.addEventListener('click', defaultLink);
INPUT_CHECKBOX.addEventListener('click', defaultBox);
INPUT_TEXT.addEventListener('keypress', defaultText);

function defaultLink(event){
    event.preventDefault();
}

function defaultBox(event){
    event.preventDefault();
}

function defaultText(event){
    event.preventDefault();
}