/**
 * Created by IVNovoselov on 11.05.2016.
 */


function letsGo1() {
    var A = parseInt(prompt('Введите A = ', '1'));
    var B = parseInt(prompt('Введите B  =', '5'));
    var sum = A;

    if (A < B) {

        document.write('<br> sum = A = ' + A);

        for (var i = A; i <B;)
        {
            i++;
            sum += i;
            document.write('<br> sum + ' + i + ' = ' + sum);
        }
// цикл выводит все не четные значения в интервале от A до B
        for (var i = A; i <= B; i++)
        {
            if((i%2) > 0) {
                document.write('<br>' + i + ' - не четное');
            }
        }
    }
}

function letsGo2() {
    var A = parseInt(prompt('Введите A = ', '1'));
    var B = parseInt(prompt('Введите B  =', '5'));
    var sum = A;

    if (A < B) {

        document.write('<br> sum = A = ' + A);

        for (var i = A; i <B;)
        {
            i++;
            sum += i;
            document.write('<br> sum + ' + i + ' = ' + sum);
        }
// цикл выводит все не четные значения в интервале от A до B
        for (var i = A; i <= B; i++)
        {
            if((i%2) > 0) {
                document.write('<br>' + i + ' - не четное');
            }
        }
    }
}