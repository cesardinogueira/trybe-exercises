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
    dayElement.addEventListener('mouseover', zoomInDia); //Ex 6
    dayElement.addEventListener('mouseleave', zoomOutDia); //Ex 6
    dayElement.addEventListener('click', dayTask); //Ex 10
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
            if (sextas[i].nextElementSibling.innerText != null) { //Verifico se o sibling é null
                sextas[i].innerText = parseInt(sextas[i].nextElementSibling.innerText) - parseInt(1); //Necessário percorrer siblings para setar o valor, pois, após a modificação para 'SEXTA-FEIRA', não há variáveis com os valores prévios.
            } else {
                sextas[i].innerText = parseInt(sextas[i].previousElementSibling.innerText) + parseInt(1);
            }
        }
    }
}

//Ex 6
function zoomInDia(event) { //Eventlistener setado no Ex 1
    event.target.style.fontSize = '30px';
}

function zoomOutDia(event) {
    event.target.style.fontSize = '20px';
}

//Ex 7

let myTasks = document.getElementsByClassName('my-tasks');
addTasks('cozinhar');

function addTasks(string) {
    let task = document.createElement('span');
    task.innerText = string;
    myTasks[myTasks.length - 1].appendChild(task);
}

//Ex 8

addTasksColor('green');

function addTasksColor(string) {
    let taskColor = document.createElement('div');
    taskColor.classList.add('task');
    taskColor.style.backgroundColor = string;
    taskColor.addEventListener('click', selectColor);//Ex 9
    myTasks[myTasks.length - 1].appendChild(taskColor);
}

//Ex 9
function selectColor(event) {
    console.log(event.target.classList);
    if (event.target.classList.value === 'task') {
        event.target.classList.add('selected')
    } else {
        event.target.classList.remove('selected');
    }
}

//Ex 10

function dayTask(event) {
    if (document.getElementsByClassName('selected').length > 0) { //Verificando se há elemento com classe selected
        let colorTask = document.getElementsByClassName('selected')
        event.target.style.color = colorTask[colorTask.length - 1].style.backgroundColor;
    } else {
        event.target.style.color = 'rgb(119,119,119)'
    }
}

//Bonus

document.getElementById('btn-add').addEventListener('click', compromissoBotao);
document.getElementById('task-input').addEventListener('keypress', compromissoEnter);

function compromissoBotao() {
    if (document.getElementById('task-input').value != '') {
        let taskList = document.getElementsByClassName('task-list');
        let taskItem = document.createElement('li');
        taskItem.innerText = document.getElementById('task-input').value;
        taskList[0].appendChild(taskItem);
        document.getElementById('task-input').value = '';
    } else {
        alert('Você não digitou uma tarefa!')
    }
}

function compromissoEnter(event) {
    if (event.key === 'Enter') {
        if (document.getElementById('task-input').value != '') {
            let taskList = document.getElementsByClassName('task-list');
            let taskItem = document.createElement('li');
            taskItem.innerText = document.getElementById('task-input').value;
            taskList[0].appendChild(taskItem);
            document.getElementById('task-input').value = '';
        } else {
            alert('Você não digitou uma tarefa!')
        }
    }
}
