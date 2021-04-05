/*3. *На базе игры, созданной на уроке, реализовать игру «Кто хочет стать миллионером?»*/
var answer = 'ABCD';
var sum = 0;
var event;
var check = 0;
for (var i = 0; i < questions.length; i++) {
    var ok = false;
    while (!ok) {
        event = prompt(questions[i].question + questions[i].A + questions[i].B + questions[i].C + 'D - Выход из игры');
        if (event == 'D') {
            alert("Игра окончена.\nВаш выйгрыш = " + sum);
            break;
        }
        if (answer.indexOf(event) == -1) {
            alert("Введен несуществующий вариант!");
        }
        ok = true;
    }
    if (!ok) {
        break;
    }
    if (event == questions[i].correct) {
        sum += questions[i].price;
        check++;
    } else {
        alert("К сожалению, Вы ответили неверно на последний вопрос. Ваш выйгрыш = " + sum);
        break;
    }
}

if (check == questions.length) {
    alert("Поздравляем! Вы ответили на все вопросы верно и забрали максимальный выйгрыш в размере " + sum);
}