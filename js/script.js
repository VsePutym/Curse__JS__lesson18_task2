window.addEventListener('DOMContentLoaded', () => {
    'use strict';

    const days = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];

    let now = new Date();

    let newYear = new Date("December 31, 2021");
    const dayWeek = days[now.getDay()];
    const hours = now.getHours();
    let newHours = '';

    if (hours > 0 && hours < 5) {
        newHours = 'доброй ночи';
    }
    if (hours > 5 && hours < 11) {
        newHours = 'доброе утро';
    }
    if (hours > 11 && hours < 17) {
        newHours = 'добрый день';
    }
    if (hours > 17 && hours < 24) {
        newHours = 'добрый вечер';
    }

    //? Количество миллисекунд в одном дне 
    const howDays = 24 * 60 * 60 * 1000;

    let getNewYear = Math.floor((newYear.getTime() - now.getTime()) / howDays);
    function DomElement(text) {
        this.text = text;
    }

    DomElement.prototype.createElement = function () {
        let newElem = document.createElement('div');
        newElem.textContent = `${this.text}`;
        document.body.append(newElem);
    };

    function getMassageTime() {
        toDai.innerHTML = 'текущее время: ' + new Date().toLocaleTimeString('en');
    };

    let toDai = document.createElement('div');
    setInterval(getMassageTime, 1000);

    const hi = new DomElement(`${newHours}`);
    const toDay = new DomElement(`сегодня  ${dayWeek}`);
    const dateNewYear = new DomElement(`До нового года осталось : ${getNewYear} дней`);

    hi.createElement();
    toDay.createElement();
    document.body.append(toDai) ;
    dateNewYear.createElement();

});