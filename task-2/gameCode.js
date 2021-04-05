//После игры необходимо спросить номер вопроса. 
//По номеру вопроса нужно вывести текст вопроса и текст выбранного ответа

var event, ok;

var answers = [];

//Выводим первый вопрос
event = doWhile(works.a00, [works.a1, works.a2], works.a0);
switch (event) {
    case 1: // Первое действие  - если в первом окне ввели 1 то открываем серию окон - окно 2
        event = doWhile(works.b00, [works.b1, works.b2], works.b0);
        switch (event) {
            case 1: // Второе действие, если во 2 окне ввели 1 то переходим на 4 окно
                event = doWhile(works.d00, [works.d1, works.d2], works.d0);
                break;
            case 2: // Второе действие   Если ввели 2 то также переходим на 4 окно
                event = doWhile(works.d00, [works.d1, works.d2], works.d0);
                break;
            case -1: // Второе действие
                break;
            default:
                alert('Ошибка');
        }
        break;
    case 2: // Первое действие    Если в 1 окне ввели 2 то переходим к 3 окну
        event = doWhile(works.c00, [works.c1, works.c2], works.c0);
        switch (event) {
            case 1: // Второе действие
                event = doWhile(works.d00, [works.d1, works.d2], works.d0);
                break;
            case 2: // Второе действие
                event = doWhile(works.d00, [works.d1, works.d2], works.d0);
                break;
            case -1: // Второе действие
                break;
            default:
                alert('Ошибка');
        }
        break;
    case -1: // Первое действие
        break;
    default:
        alert('Ошибка');
}
alert('Спасибо за игру');
console.log(answers);

//------------------------------------------
function isAnswer(q, event) {
    if (isNaN(event) || !isFinite(event)) {
        alert('Вы ввели недопустимый символ');
        return false;
    }
    else if (event < 1 || event > q) {
        alert('Ваше число выходит из допустимого диапозона');
        return false;
    }
    return true;
}

function doWhile(question, aa, count) {
    do {//Выводим первый вопрос
        ok = false;
        event = +prompt(question + aa[0] + aa[1] + '-1 - Выход из игры');

        if (event == -1) {
            break;
        }
        else {
            ok = isAnswer(count, event);
        }
    } while (!ok);

    var answer = {
        question: question,
        answer: event == -1 ? 'Выход из игры' : aa[parseInt(event) - 1],
    };

    answers.push(answer);
    return event;
}

