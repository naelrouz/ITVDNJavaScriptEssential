/**
 * Created by IVNovoselov on 11.05.2016.
 */
var pi = 3.14;
var r = prompt('Введите радиус', '1');
var h = prompt('Введите высоту', '2');
var V = 2*pi*r*h;
var S =2*pi*r*r+2*pi*r*h;
document.write('<br> Обьем цилиндра: ' + V);
document.write('<br> Площадь цилиндра: ' + S);