window.addEventListener('DOMContentLoaded', () => {
    'use strict';


    const days = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];

    const now = new Date();
    const newYear = new Date("December 31, 2021");
    const dayWeek = days[now.getDay()];
    const hours = now.getHours();
    const newTime = now.toLocaleTimeString('en');
    let newHours = '';

    if (hours > 0 && hours < 5) {
        newHours = 'доброй ночи';
    }
    if (hours > 5 && hours < 11) {
        newHours = 'доброй утро';
    }
    if (hours > 11 && hours < 17) {
        newHours = 'доброй день';
    }
    if (hours > 17 && hours < 24) {
        newHours = 'добрый вечер';
    }

   //? Количество миллисекунд в одном дне 
    const howDays = 24 * 60 * 60 * 1000;

    let getNewYear = Math.floor((newYear.getTime() - now.getTime()) / howDays);

    document.body.insertAdjacentHTML('beforebegin', `<li>${newHours}</li>`);
    document.body.insertAdjacentHTML('beforebegin', `<li> сегодня: ${dayWeek}</li>`);
    document.body.insertAdjacentHTML('beforebegin', `<li>текущее время: ${newTime}</li>`);
    document.body.insertAdjacentHTML('beforebegin', `<li>До нового года осталось : ${getNewYear} дней</li>`);

});