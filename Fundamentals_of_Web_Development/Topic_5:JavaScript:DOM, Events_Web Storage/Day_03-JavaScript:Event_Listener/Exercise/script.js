function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');

    for (let index = 0; index < weekDays.length; index += 1) {
        const days = weekDays[index];
        const dayListItem = document.createElement('li');
        dayListItem.innerHTML = days;

        weekDaysList.appendChild(dayListItem);
    };
};

createDaysOfTheWeek();

// Escreva seu código abaixo.


//Ex 1
const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

let days = document.getElementById('days');

for (let i = 0; i < dezDaysList.length; i++) {
    let day = dezDaysList[i];

    let dayElement = document.createElement('li');
    dayElement.innerText = dezDaysList[i];
    dayElement.classList.add('day');
    if (dezDaysList[i] === 24 || dezDaysList[i] === 25 || dezDaysList[i] === 31) {
        dayElement.classList.add('holiday');
    }
    if (dezDaysList[i] === 4 || dezDaysList[i] === 11 || dezDaysList[i] === 18 || dezDaysList[i] === 25) {
        dayElement.classList.add('friday');
    }

    days.appendChild(dayElement);

}

//Ex 2
function createButtonHoliday(string) {
    let button = document.getElementsByClassName('buttons-container');

    let buttonElement = document.createElement('button');
    buttonElement.innerText = string;
    buttonElement.id = 'btn-holiday';

    button[0].appendChild(buttonElement);
}

createButtonHoliday('Feriados');

let botaoFeriado = document.getElementById('btn-holiday');


//Ex 3
botaoFeriado.addEventListener('click', coresFeriados);

function coresFeriados() {
    let feriados = document.getElementsByClassName('holiday');
    if (feriados[0].style.backgroundColor != 'rgb(232, 197, 71)') {
        for (let i = 0; i < feriados.length; i++) {
            feriados[i].style.backgroundColor = 'rgb(232, 197, 71)';
        }
    } else {
        for (let i = 0; i < feriados.length; i++) {
            feriados[i].style.backgroundColor = 'rgb(238,238,238)';
        }
    }
}

//Ex 4
function createButtonFriday(string) {
    let button = document.getElementsByClassName('buttons-container');

    let buttonElement = document.createElement('button');
    buttonElement.innerText = string;
    buttonElement.id = 'btn-friday';

    button[0].appendChild(buttonElement);
}

createButtonFriday('SEXTA-FEIRA');


let botaoSexta = document.getElementById('btn-friday');

//Ex 5
botaoSexta.addEventListener('click', sextas);

function sextas() {
    let sextas = document.getElementsByClassName('friday');
    if (sextas[0].innerText != 'SEXTA-FEIRA') { // Setando InnerText como SEXTA-FEIRA
        for (let i = 0; i < sextas.length; i++) {
            sextas[i].innerText = 'SEXTA-FEIRA';
        }
    } else { //Resetando Dias
        for (let i = 0; i < sextas.length; i++) {
            if(sextas[i].nextElementSibling.innerText != null){ //Verifico se o sibling é null
                sextas[i].innerText = parseInt(sextas[i].nextElementSibling.innerText) - parseInt(1); //Necessário percorrer siblings para setar o valor, pois, após a modificação para 'SEXTA-FEIRA', não há variáveis com os valores prévios.
            } else {
                sextas[i].innerText = parseInt(sextas[i].previousElementSibling.innerText) + parseInt(1);
            }
        }
    }
}