const array = [
    "Иди на лево",
    "На тебя упадет кирпич",
    "Гугли",
    "Это не твоё",
    "Иди поешь",
    "Незнаю",
    "Ты умничка"
];

function calculate() {
    let randomValue = Math.random() * (array.length - 1) + 1;
    let preparedValue = Math.floor(randomValue);
    let answer = document.getElementById("answer");

    answer.style.cssText = "font-size: 35%; margin-top: 45%";
    answer.textContent = array[preparedValue];
}