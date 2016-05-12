/**
 * Created by IVNovoselov on 11.05.2016.
 */


function letsGo1() {
    var A = parseInt(prompt('Введите A = ', '1'));
    var B = parseInt(prompt('Введите B  =', '5'));
    var sum = A;

    if (A < B) {

        document.write('<br> sum = A = ' + A);

        for (var i = A; i < B;) {
            i++;
            sum += i;
            document.write('<br> sum + ' + i + ' = ' + sum);
        }
// цикл выводит все не четные значения в интервале от A до B
        for (var i = A; i <= B; i++) {
            if ((i % 2) > 0) {
                document.write('<br>' + i + ' - не четное');
            }
        }
    }
}

function letsGo2() {
}

function letsGo3() {
    var type = prompt('Выбирите фигуру: ', '1');
    var height = parseInt(prompt('Введите высоту фигуры = ', '10'));


    document.write('<pre>');

    switch (type) {

        case "1":
        {
            document.write('Квадрат \n\n');
            for (i = 1; i <= height; i++) {
                for (j = 1; j <= height; j++) {
                    if ((i < 1 || i != height))
                    {
                        document.write('*'); // Печатаем звёздочку
                    }
                     else {
                        document.write('o'); // Печатаем пробел
                    }
                }
                document.write('\n'); // Переходим на новую строку
            }
        }
            break;
        case "2":
        {
            document.write('Прямоугольный треугольник \n\n');
            for (i = 1; i <= height; i++) {
                for (j = 1; j <= i; j++) {
                    //if ((i == 1 && i == height) && (j == 1 && j == height))
                    //{
                    document.write('*'); // Печатаем звёздочку
                    //}else {
                    //    document.write(' '); // Печатаем пробел
                    //}
                }
                document.write('\n'); // Переходим на новую строку
            }
        }
            break;
        case "3":
        {
            document.write('Равносторонний треугольник \n\n');
            for (i = 1; i <= height; i++) {

                for (j = 1; j <= (height + i); j++) {
                    if (j <= (height - i + 1))
                        document.write(' '); // Печатаем пробел
                    else
                        document.write('*'); // Печатаем звёздочку
                }

                for (j = 1; j <= (height + i); j++) {
                    if (j <= (height - i + 1))
                        document.write(' '); // Печатаем пробел
                    else
                        document.write('*'); // Печатаем звёздочку
                }
            }
        }
            break;

        default:
        {
        }
            break;
    }


    document.write('</pre>');
    document.write('<br><a href="001_HomeWork.html" class="button">Назад</a>');
}