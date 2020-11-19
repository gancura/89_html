

let firstCurrency;
let twoCurrency;
let summa;
let usduah=27, euruah=30, usdeur=0.9, eurusd=1.11, uahusd=0.037, uaheur=0.033;
let total;

function exchange(){
    firstCurrency = prompt('Какую валюту Вы продаете (USD/EUR/UAH)', '');
    if (firstCurrency.toUpperCase() === 'USD' || firstCurrency.toUpperCase() === 'EUR' ||firstCurrency.toUpperCase() ===  'UAH')
    {twoCurrency = prompt('Какую валюту Вы хотите купить (USD/EUR/UAH)', '');}
    else {
        alert('Неизвестная валюта! Обновите страницу и попробуйте еще раз.');
        return false;
    };
    if (twoCurrency.toUpperCase() === 'USD'|| twoCurrency.toUpperCase() === 'EUR' ||twoCurrency.toUpperCase() ===  'UAH')
    {summa = prompt('Сколько валюты Вы хотите продать?', '');}
    else {
        alert('Неизвестная валюта! Обновите страницу и попробуйте еще раз.');
        return false;
    };
    if (summa <= 0)
    {
        alert('Сумма не может быть меньше нуля! Обновите страницу и попробуйте еще раз.');
        return false;
    }
    if (isFinite(summa)){
        if (firstCurrency.toUpperCase() === 'USD' && twoCurrency.toUpperCase() === 'UAH')
        {total = summa * usduah;
            alert ('Вы получите ' + total + ' UAH')}
        if (firstCurrency.toUpperCase() === 'USD' && twoCurrency.toUpperCase() === 'EUR')
        {total = summa * usdeur
            alert ('Вы получите ' + total + ' EUR')}
        if (firstCurrency.toUpperCase() === 'EUR' && twoCurrency.toUpperCase() === 'UAH')
        {total = summa * euruah
            alert ('Вы получите ' + total + ' UAH')}
        if (firstCurrency.toUpperCase() === 'EUR' && twoCurrency.toUpperCase() === 'USD')
        {total = summa * eurusd
            alert ('Вы получите ' + total + ' USD')}
        if (firstCurrency.toUpperCase() === 'UAH' && twoCurrency.toUpperCase() === 'USD')
        {total = summa * uahusd
            alert ('Вы получите ' + total + ' USD')}
        if (firstCurrency.toUpperCase() === 'UAH' && twoCurrency.toUpperCase() === 'EUR')
        {total = summa * uaheur
            alert ('Вы получите ' + total + ' EUR')}
        if (firstCurrency.toUpperCase() === twoCurrency.toUpperCase())
        {alert('Нельзя менять одно и тоже! Обновите страницу и попробуйте еще раз.');
            return false;}
    }
    else {
        alert('Здесь должно быть число! Обновите страницу и попробуйте еще раз.');
        return false;
    }
}
exchange()