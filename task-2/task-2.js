while (1) {
    var qn = +prompt('Введите номер вопроса \n -1 - Выход из игры');
    if (qn == -1) {
        break;
    }
    alert('На вопрос \n ' + answers[qn - 1].question + '\n Ваш ответ был: \n' + answers[qn - 1].answer);
}
