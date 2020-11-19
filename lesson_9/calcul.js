

let firstNumber
let twoNumber;
let operation;
let total;

function calc(){
    firstNumber = prompt('Введите первое число', '');
    if (isFinite(firstNumber))
    {operation = prompt('Укажите арифметическое действие (+ - * /)', '')}
    else {
        alert('Это не число! Обновите страницу и попробуйте еще раз.');
        return false;
    }
    if (operation === '+'|| operation === '-' ||operation ===  '*' || operation === '/')
    {twoNumber = prompt('Введите второе число', '');}
    else {
        alert('Это не число! Обновите страницу и попробуйте еще раз.');
        return false;
    }
    if (isFinite(twoNumber)){
        if (operation=== '+') {total=+firstNumber + +twoNumber}
        if (operation=== '-') {total=firstNumber - twoNumber}
        if (operation=== '*') {total=firstNumber * twoNumber}
        if (operation=== '/') {total=firstNumber / twoNumber}}
    else {
        alert('Что-то пошло не так. Обновите страницу и попробуйте еще раз.');
        return false;
    }
    if (isFinite(total))
    {alert (total)}
    else alert ('Деление на ноль! Или другое, недопустимое значение. Обновите страницу и попробуйте еще раз.');
}
calc();